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
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeLng, setChangeLng] = useState(false);

    const openMenuLng = () => {
        closeMenu()
        setChangeLng((prev) => !prev)
    };
    const closeMenuLng = () => setChangeLng(false);

    const openMenu = () => {
        closeMenuLng()
        setIsOpen((prev) => !prev)
    };
    const closeMenu = () => setIsOpen(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <NavbarEl onMouseLeave={props.onMouseLeave}>
            <NavbarList>
                <Navcontainer>
                    <Logo href='/'>
                        <IMG loading="lazy" alt="teclab logo" height='50px' src="teclab.svg" />
                    </Logo>
                    <Navigationleft>
                        {props.children}
                        <Navigationlink href={'/projects'}>{t(`navbar.project`)}</Navigationlink>
                        <Navigationlink href={'/printer'}>{t(`navbar.printer`)}</Navigationlink>
                        <Navigationlink href={'https://www.vdi.de/'}>VDI</Navigationlink>
                    </Navigationleft>
                    <DropdownWrapper className='show'>
                        <ToggleButton className='no-border' onClick={openMenuLng} aria-haspopup="true" aria-expanded={changeLng}>
                            <TbWorld color='var(--accent-color)' size={20} />
                        </ToggleButton>

                        {changeLng && (
                            <Menu className='lng' role="menu">
                                <MenuItem onClick={() => {
                                    changeLanguage('en');
                                    closeMenuLng();
                                }}>
                                    <span>English</span>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    changeLanguage('de');
                                    closeMenuLng();
                                }}>
                                    <span>Deutsch</span>
                                </MenuItem>
                            </Menu>
                        )}
                    </DropdownWrapper>
                    <DropdownWrapper>
                        <ToggleButton onClick={openMenu} aria-haspopup="true" aria-expanded={isOpen}>
                            <IoMdMenu color='white' size={20} />
                        </ToggleButton>

                        {isOpen && (
                            <Menu role="menu">
                                <MenuItem onClick={closeMenu}>
                                    <a href="/projects">{t(`navbar.project`)}</a>
                                </MenuItem>
                                <MenuItem onClick={closeMenu}>
                                    <a href="/printer">{t(`navbar.printer`)}</a>
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
