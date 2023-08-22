import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { gql, useLazyQuery, useMutation, useSubscription } from '@apollo/client'
import { Col, Form } from 'react-bootstrap'

import Message from './Message'
import { useForm } from 'react-hook-form';

const SEND_MESSAGE = gql`
  mutation sendMessage($to: MongoID!, $from: MongoID!, $content: String!) {
    sendMessage(
      content: $content,
      from: $from
      to: $to 
    ){content from to _id updatedAt createdAt }
  }
`

const GET_MESSAGES = gql`
  query getAllMessages($from: MongoID! $to: MongoID!) {
    getAllMessages(from: $from to: $to) {
      content from to reactions  {content messageId userId _id updatedAt createdAt __typename} _id updatedAt createdAt __typename
    }
  }
`

const NEW_MESSAGE = gql`
  subscription getMessage {
    getMessage {content from to reactions  {content messageId userId _id updatedAt createdAt __typename} _id updatedAt createdAt __typename}
  }
`

const NEW_REACTION = gql`
  subscription getReaction {
    getReaction {content messageId userId message {content from to reactions {content messageId userId _id updatedAt createdAt __typename} _id updatedAt createdAt __typename}}
  }
`

function Messages({ data, dispatch, UserID, users }) {
    const [content, setContent] = useState('')
    const [messageloading, setmessageloading] = useState(true)
    const { register, errors, handleSubmit } = useForm();
    const selectedUser = users?.find((u) => u.selected === true)

    const messages = data?.[selectedUser?._id]
    const [
        getMessages,
        { loading: messagesLoading, data: messagesData },
    ] = useLazyQuery(GET_MESSAGES)

    const [sendMessage] = useMutation(SEND_MESSAGE, {
        onError: (err) => console.log(err),
    })

    const { data: message, error: messageError } = useSubscription(
        NEW_MESSAGE
    )

    const { data: reaction, error: reactionError } = useSubscription(
        NEW_REACTION
    )

    useEffect(() => {
        if (messageError) console.log(messageError)
        if (message) {
            const otherUser = UserID === message.getMessage.to ? message.getMessage.from : message.getMessage.to
            dispatch({ type: 'SET_MESSAGES', payload: { _id: otherUser, messages: message.getMessage, }, })
        }
    }, [messageError, message])

    useEffect(() => {
        if (reactionError) console.log(reactionError)
        if (reaction) {
            const otherUser = UserID === reaction.getReaction.message[0].to ? reaction.getReaction.message[0].from : reaction.getReaction.message[0].to
            dispatch({ type: 'SET_REACTION', payload: { Userid: otherUser, Messageid: reaction.getReaction.messageId, reaction: reaction.getReaction.message[0] }, })
        }
    }, [reactionError, reaction])

    useEffect(() => {
        if (selectedUser && !selectedUser.messages.length > 0) {
            getMessages({ variables: { from: UserID, to: selectedUser._id } })
            //getReactions({ variables: { from: UserID, to: selectedUser._id } })
        }
    }, [selectedUser])


    useEffect(() => {
        if (messagesData) {
            dispatch({ type: 'SET_USER_MESSAGES', payload: { _id: selectedUser._id, messages: messagesData.getAllMessages, }, })
            setmessageloading(false)
        }
    }, [messagesData])

    const submitMessage = (e) => {
        if (content.trim() === '' || !selectedUser) return

        setContent('')

        // mutation for sending the message
        sendMessage({ variables: { to: selectedUser._id, from: UserID, content } })
    }

    let selectedChatMarkup
    if (!messages && !messagesLoading) {
        selectedChatMarkup = <p className="info-text">Select a friend</p>
    } else if (messagesLoading) {
        selectedChatMarkup = <p className="info-text">Loading..</p>
    } else if (messages.length > 0) {
        selectedChatMarkup = messages.slice(0).reverse().map((message, index) => (
            <Fragment key={message._id}>
                <Message message={message} UserID={UserID} />
                {index === messages.length - 1 && (
                    <div className="invisible">
                        <hr className="m-0" />
                    </div>
                )}
            </Fragment>
        ))
    } else if (messages.length === 0) {
        selectedChatMarkup = (
            <p className="info-text">
                You are now connected! send your first message!
            </p>
        )
    }

    return (
        <Col xs={10} md={8} className="p-0">
            <div className="messages-box d-flex flex-column-reverse p-3">
                {selectedChatMarkup}
            </div>
            <div className="px-3 py-2">
                <Form onSubmit={handleSubmit(submitMessage)}>
                    <Form.Group className="d-flex align-items-center m-0">
                        <Form.Control
                            type="text"
                            name="message"
                            className="message-input rounded-pill p-4 bg-secondary border-0"
                            placeholder="Type a message.."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            {...register("message", { required: 'This is required.' })}
                        />
                        <i
                            className="fas fa-paper-plane fa-2x text-primary ml-2"
                            onClick={submitMessage}
                            role="button"
                        ></i>
                    </Form.Group>
                </Form>
            </div>
        </Col>
    )
}

export default Messages
