import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Col, Image } from 'react-bootstrap'
import classNames from 'classnames'
import { useDispatch, useSelector, connect } from 'react-redux';

function Users({data, dispatch, loading, users}) {
  //const { data } = useMessageState()
  const selectedUser = users?.find((u) => u.selected === true)?._id

  

  let usersMarkup
  if (!users || loading) {
    usersMarkup = <p>Loading..</p>
  } else if (users.length === 0) {
    usersMarkup = <p>No users have joined yet</p>
  } else if (users.length > 0) {
    usersMarkup = users.map((user) => {
      const selected = selectedUser === user._id
      return (
        <div
          role="button"
          className={classNames(
            'user-div d-flex justify-content-center justify-content-md-start p-3',
            {
              'bg-white': selected,
            }
          )}
          key={user?._id}
          onClick={() =>
            dispatch({ type: 'SET_SELECTED_USER', payload: user._id })
          }
        >
          <Image
            src={
              user?.imageUrl ||
              'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }
            className="user-image"
          />
          <div className="d-none d-md-block ml-2">
            <p className="text-success">{user?.username}</p>
            <p className="font-weight-light">
              {user?.messages
                ? user?.messages?.content
                : 'You are now connected!'}
            </p>
          </div>
        </div>
      )
    })
  }
  return (
    <Col xs={2} md={4} className="p-0 bg-secondary">
      {usersMarkup}
    </Col>
  )
}

export default Users