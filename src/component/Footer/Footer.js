import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, FooterLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElement';

const Footer = () => {
    const toggleTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/Signin" >How it Works</FooterLink>
                                    <FooterLink to="/Signin" >Careers</FooterLink>
                                    <FooterLink to="/Signin" >Terms of Service</FooterLink>
                                    <FooterLink to="/Signin" >Investors</FooterLink>
                                    <FooterLink to="/Signin" >Testimonials</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Conatct Us</FooterLinkTitle>
                                    <FooterLink to="/Signin" >Contact</FooterLink>
                                    <FooterLink to="/Signin" >Support</FooterLink>
                                    <FooterLink to="/Signin" >Desitinations</FooterLink>
                                    <FooterLink to="/Signin" >Sponsorships</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to="/Signin" >Agency</FooterLink>
                                    <FooterLink to="/Signin" >Influencers</FooterLink>
                                    <FooterLink to="/Signin" >Submit Video</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <FooterLogo to="/" onClick={toggleTop}>
                                 Dolla
                            </FooterLogo>
                            <WebsiteRights> Dolla &#169; {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
            
        </div>
    )
}

export default Footer
