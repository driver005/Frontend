import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import { Brand, Logo, Menubutton, Navbutton, Navcontainer, Navigationleft, Navigationlink, Navigationright, Navlink, Icon } from "./styles"
import {IoMdMenu } from 'react-icons/io'
import decode from 'jwt-decode';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './stylesmaterial';

const NavbarEl = styled.nav`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  position: absolute;
  padding: 26px 3%;
  background: #dddddd;
  z-index: 1000;
  background-color: hsla(0, 0%, 86.7%, 0);

  @media screen and (max-width: 991px)
  {
      padding-right: 3%;
      padding-left: 3%;
  }
  
`

const NavbarList = styled.ul`
  margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    max-width: 1140px;

    @media screen and (max-width: 479px)
    {
        justify-content: space-between;
    }

    @media screen and (max-width: 767px)
    {
        justify-content: space-between;
    }
    @media screen and (max-width: 991px)
    {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
  
`

const Navbar = (props) => {
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

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
    <NavbarEl onMouseLeave={props.onMouseLeave}>
      <NavbarList>
        <Navcontainer>
              <Brand>
                  <Logo href="#" >
                      <img src="https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d809868bc58d0c27_logo.svg" />
                  </Logo>
              </Brand>
              <Navigationleft>
                  <Navigationlink>Company</Navigationlink>
                  {props.children}
                  <Navigationlink>Partnership</Navigationlink>
              </Navigationleft>
              <Navigationright>
              {user?.info.user ? (
                <>
                  <Avatar className={classes.purple} alt={user?.info.user.name} src={user?.info.user.imageUrl}>{user?.info.user.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user?.info.user.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </>
              ) : (
                  <>
                    <Navlink href={"/login"}>Login</Navlink>
                    <Navbutton href={"/sign-up"}>Sign Up</Navbutton>
                  </>
                  )}
              </Navigationright>
              <Menubutton>
                  <Icon>
                    <IoMdMenu />
                  </Icon>
              </Menubutton>
              
          </Navcontainer>
          </NavbarList>
    </NavbarEl>
  )
}

export default Navbar
