import Chatcomponent from './organisms/chat.jsx';
import SockJS from 'sockjs-client';
import React, { useEffect } from "react"
import styled from "styled-components"
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';

function Chats() {
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    
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
        <Chatcomponent user={user}/>        
    )

}

export default Chats
