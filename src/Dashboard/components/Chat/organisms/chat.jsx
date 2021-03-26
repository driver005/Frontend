import React from 'react';
import CommentList from '../molecules/comment-list.jsx';
import CommentForm from '../molecules/comment-form.jsx';
import PeopleList from '../molecules/people-list.jsx';
import SockJS from 'sockjs-client';
import {
    MessageBox,
    ChatItem,
    ChatList,
    SystemMessage,
    MessageList,
    Input,
    Button,
    Avatar,
    Navbar,
    SideBar,
    Dropdown,
    Popup,
    MeetingList,
} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

class Chatcomponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [],
            people: []
        };
        this.setState = this.setState.bind(this);
        var sockjs_url = 'https://localhost:5000/chat';
        this.sockjs = new SockJS(sockjs_url);
        this.sockjs.onopen = this._initialize.bind(this);
        this.sockjs.onmessage = this._onMessage.bind(this);
        this.sockjs.onclose = this._onClose.bind(this);
    };

    _initialize() {
        console.log("connected");
        console.log(this.props?.user)
        this._sendMessage({text: 'Connected. Type /help for a list of available commands.', type: 'private', id: 'connected'});
        this.sockjs.send(JSON.stringify({type: "USER_LOGIN", userId: this.props?.user?.info?.user?._id}));
    }

    _onMessage(e) {
        this._sendMessage(JSON.parse(e.data));
    }

    _onClose() {
        this._sendMessage({text:'Closing Connection.', type: 'private', id: 'disconnected'});
    }

    _sendMessage(message) {
        if (message.type == 'history_list') {
            message.data.forEach(function(m){
                this.state.comments.push(m);
                this.setState(this.state);
            }.bind(this))
        } else if (message.type == 'user_list') {
            Object.keys(message.data).map(function (key) {return message.data[key]}).forEach(function(m){
                this.state.people.push(m);
                this.setState(this.state);
            }.bind(this))
        } else {
            console.log(message)
            this.state.comments.push(message);
            this.setState(this.state)

            if (message.type == 'joined_channel') {
                this.state.people.push(message.data);
                this.setState(this.state);
            } else if (message.type == 'left_channel') {
                this.state.people.splice(
                    this.state.people.findIndex(
                        (i) => i.username === message.username
                    ),1
                );
                this.setState(this.state);
            } else if (message.type == 'username_changed') {
                console.log(message)
                this.state.people.forEach(function(user) {
                    if (user.connection_id == message.data.connection_id) {
                        user.username = message.data.username;
                    }
                })
                this.setState(this.state);
            } else if (message.type == 'user_typing') {
                console.log(message)
            } else if (message.type == 'user_not_typing') {
                console.log(message)
            }
        }
    }

    handleMessageSubmit(message) {
        console.log(message)
        this.sockjs.send(JSON.stringify({type: "text_message", text: message, sender: this.props?.user?.info?.user?._id}));
    }

    render () {
        return (
            <div id="first" className="box">
                <div className="commentsContainer">
                <div className='right-panel'>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        downButtonBadge={10}
                        dataSource={this.state.messageList} />

                    <Input
                        placeholder="Input Message"
                        defaultValue=""
                        ref='input'
                        multiline={true}
                        // buttonsFloat='left'
                        onKeyPress={(e) => {
                            if (e.shiftKey && e.charCode === 13) {
                                return true;
                            }
                            if (e.charCode === 13) {
                                this.handleMessageSubmit(this.refs.input);
                                this.refs.input.clear();
                                e.preventDefault();
                                return false;
                            }
                        }}
                        rightButtons={
                            <Button
                                text='Send'
                                onClick={() => this.handleMessageSubmit(this.refs.input)} />
                        } />
                </div>
                </div>
                <PeopleList people={this.state.people}/>
        </div>
    )
};
}

export default Chatcomponent;
