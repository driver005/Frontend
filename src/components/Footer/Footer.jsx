import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    WebsiteRights,
    TextWrap,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <TextWrap>
                    <h3>Impressum:</h3>
                    <p>Felipe Fernández</p>
                    <p>Derendinger Allee 8</p>
                    <p>72072 Tübingen</p>
                    <p>Phone: +491634363720</p>
                    <p>Email: <a href="mailto:sfz.teclab@vdi.de">sfz.teclab@vdi.de</a></p>
                </TextWrap>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        TECLAB
                    </SocialLogo>
                    <WebsiteRights>teclab © 2025</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
