import { useState } from 'react';
import {
    Logo,
    Navcontainer,
    Navigationleft,
    Navigationlink,
    NavbarEl,
    IMG,
    NavbarList,
    DropdownWrapper,
    ToggleButton,
    Menu,
    MenuItem,
} from './styles';
import { IoMdMenu } from 'react-icons/io';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    
    return (
        <NavbarEl onMouseLeave={props.onMouseLeave}>
            <NavbarList>
                <Navcontainer>
                        <Logo href='/'>
                            <IMG loading="lazy" height='50px' src="teclab.svg" />
                        </Logo>
                    <Navigationleft>
                        {props.children}
                        <Navigationlink href={'/projects'}>Projects</Navigationlink>
                        <Navigationlink href={'/printer'}>Printer</Navigationlink>
                        <Navigationlink href={'https://www.vdi.de/'}>VDI</Navigationlink>
                    </Navigationleft>
                    <DropdownWrapper>
                      <ToggleButton onClick={handleToggle} aria-haspopup="true" aria-expanded={isOpen}>
                        <IoMdMenu color='white' size={20} />
                      </ToggleButton>

                      {isOpen && (
                        <Menu role="menu">
                          <MenuItem onClick={closeMenu}>
                            <a href="/projects">Projects</a>
                          </MenuItem>
                          <MenuItem onClick={closeMenu}>
                            <a href="/printer">Printer</a>
                          </MenuItem>
                          <MenuItem onClick={closeMenu}>
                            <a href="https://www.vdi.de/" target="_blank" rel="noopener noreferrer">
                              VDI
                            </a>
                          </MenuItem>
                        </Menu>
                      )}
                  </DropdownWrapper>
                </Navcontainer>
            </NavbarList>
        </NavbarEl>
    );
};

export default Navbar;
