import SockJS from 'sockjs-client';
import React, { useEffect } from "react"
import decode from 'jwt-decode';
import { Row, Button, Container } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import { useDispatch, connect } from 'react-redux'
import { useHistory, useLocation, Link } from 'react-router-dom';
import './styles.css'
import Users from './Users'
import Messages from './Messages'

const GET_USERS = gql`
  query userMany {
    userMany{
      _id name username email messages password updatedAt createdAt
    }
  }
`

function Chats({ data, users }) {
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const UserID = user?.info?.user?._id
    const { loading } = useQuery(GET_USERS, {
        onCompleted: (data) => {
            dispatch({ type: 'SET_USERS', payload: data.userMany.filter(((u) => u._id != UserID)) })
        },
        onError: (err) => console.log(err),
    })
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    
        history.push('/');
    
        setUser(null);
    };

    useEffect(() => {
        const token = user?.access_token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    return (
        <Container style={{backgroundColor: "white"}}>
        <Row className="bg-white">
            {users.data?.length > 0 && <Users data={data.data} dispatch={dispatch} loading={loading} users={users.data} />}
            {users.data?.length > 0 && <Messages data={data.data} dispatch={dispatch} UserID={UserID} users={users.data} />}
        </Row>
        </Container>
    )

}

const ConnectedMessage = (state, props) => {
    return {
        data: state.message.message,
        users: state.message.users
  }
}

export default connect(ConnectedMessage)(Chats)
