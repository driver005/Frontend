import styled from 'styled-components';

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
                        {props.children}
                        <Navigationlink href={'/projects'}>Projects</Navigationlink>
                        <Navigationlink href={'/printer'}>Printer</Navigationlink>
                        <Navigationlink href={'https://www.vdi.de/'}>VDI</Navigationlink>
                    </Navigationleft>
                    <Navigationright>
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
