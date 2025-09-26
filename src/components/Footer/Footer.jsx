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
                    <h1>Impressum:</h1>
                    <p>Felipe Fernandez</p>
                    <p>Derendinger Allee 8</p>
                    <p>72072 Tübingen</p>
                    <p>Telefon bitte melden</p>
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
