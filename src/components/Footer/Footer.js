import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { Button, Newsletter } from '../globalStyles'
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    FooterLinksContainer, 
    FooterLinkItems,
    FooterLink,
    FooterLinksWrapper,
    FooterLinkTitle,
    WebsiteRights,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            {
                // <FooterSubscription>
                //     <FooterSubHeading>
                //         Join our exclusiv membership to
                //         receive the latest news and ternds
                //     </FooterSubHeading>
                //     <FooterSubText>
                //         You can unsubscibe at any time.
                //     </FooterSubText>
                //     <Newsletter primary/>
                // </FooterSubscription>
            }
                {/*<FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>*/}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        TECLAB
                    </SocialLogo>
                    <WebsiteRights>teclab © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/facebook' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/instagram' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={
                                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/twitter' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/linkedin' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
