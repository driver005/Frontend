import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import {
    Brand,
    Logo,
    Menubutton,
    Navbutton,
    Navcontainer,
    Navigationleft,
    Navigationlink,
    Navigationright,
    Navlink,
    Icon,
} from './styles';
import { IoMdMenu } from 'react-icons/io';
import decode from 'jwt-decode';
import { Button, Dropdown } from 'react-bootstrap';
import teclab from '../../images/teclab.png';

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

	@media screen and (max-width: 991px) {
		padding-right: 3%;
		padding-left: 3%;
	}
`;

const NavbarList = styled.ul`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	width: 100%;
	max-width: 1140px;

	@media screen and (max-width: 479px) {
		justify-content: space-between;
	}

	@media screen and (max-width: 767px) {
		justify-content: space-between;
	}
	@media screen and (max-width: 991px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const IMG = styled.img`
	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

const Navbar = (props) => {
    const [user, setUser] = React.useState(
        JSON.parse(localStorage.getItem('profile')),
    );
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history('/');

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
                        <Logo href='/'>
                            <IMG height='75px' src={teclab} />
                        </Logo>
                    </Brand>
                    <Navigationleft>
                        {/* <Navigationlink href={'/dash'}>Dashboard</Navigationlink> */}
                        {props.children}
                        <Navigationlink href={'/projects'}>Projects</Navigationlink>
                        <Navigationlink href={'/printer'}>Printer</Navigationlink>
                        <Navigationlink href={'https://www.vdi.de/'}>VDI</Navigationlink>
                    </Navigationleft>
                    <Navigationright>
                        {/*{user?.info.user ? (
                            <>
                                <div
                                    className='rounded-circle bg-primary text-white align-middle align-items-center justify-content-center d-flex mr-2'
                                    style={{ width: '2.3rem', height: '2.3rem' }}>
                                    {user?.info.user.name.charAt(0)}
                                </div>
                                <h5 className='mb-0 mr-3'>{user?.info.user.name}</h5>
                                <Button variant='outline-danger' onClick={logout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                {
                                    //  <Navlink href={"/dash"}>Dashboard</Navlink>
                                }
                                <Navbutton href={'/sign-up'}>Sign Up</Navbutton>
                            </>
                        )}*/}
                    </Navigationright>
                    <Menubutton>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant='outline-dark'
                                id='dropdown-basic'
                                role='menuitem'>
                                <Icon>
                                    <IoMdMenu />
                                </Icon>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/projects'>Projects</Dropdown.Item>
                                <Dropdown.Item href='/printer'>Printer</Dropdown.Item>
                                <Dropdown.Item href={'https://www.vdi.de/'}>VDI</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menubutton>
                </Navcontainer>
            </NavbarList>
        </NavbarEl>
    );
};

export default Navbar;
