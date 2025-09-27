import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    WebsiteRights,
    TextWrap,
    IMG,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    Email,
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <TextWrap>
                    <h3>Impressum:</h3>
                    <p>teclab - VDI Schülerforschungszentrum</p>
                    <p>Felipe Fernández</p>
                    <p>Derendinger Allee 8</p>
                    <p>72072 Tübingen</p>
                    <p>Phone: +491634363720</p>
                    <p>Email: <Email href="mailto:sfz.teclab@vdi.de">sfz.teclab@vdi.de</Email></p>
                </TextWrap>
            <SocialMediaWrap>
              <SocialLogo>
                <IMG height='35px' src="teclab.svg" />
              </SocialLogo>
              <WebsiteRights>teclab © 2025</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
