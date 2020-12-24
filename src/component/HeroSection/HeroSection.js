import React, { useState } from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../Button/ButtonElements';
import {HeroSectionContainer, HeroSectionBg, VideoBg, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight} from './HeroSectionElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const hoverHandler = () => {
        setHover(!hover);
    }

    return (
        <div>
            <HeroSectionContainer  id="home">
                <HeroSectionBg>
                    <VideoBg autoPlay muted loop src= {video} type="video/mp4"/>
                </HeroSectionBg>
                <HeroContent>
                    <HeroH1>
                        Virtual Banking made easy
                    </HeroH1>
                    <HeroP>
                        Signup for new account today and recieve $50 credit.
                    </HeroP>
                    <HeroButtonWrapper>
                        <Button to="signup" onMouseEnter = { hoverHandler } onMouseLeave = { hoverHandler } primary = 'true' dark = 'true' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroButtonWrapper>
                </HeroContent>
            </HeroSectionContainer>
        </div>
    )
}

export default HeroSection
