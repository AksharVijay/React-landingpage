import React , { useState } from 'react';
import HeroSection from '../component/HeroSection/HeroSection';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import InfoSection from '../component/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../component/InfoSection/Data';
import ServiceSection from '../component/ServiceSection/ServiceSection';
import Footer from '../component/Footer/Footer';

const Home = () => {

    const [isOpen, setIsOpen ] = useState(false);

    const toggleHandler = () => {
        setIsOpen (!isOpen);
    };
    return (
        <div>
            <Navbar  toggle = {toggleHandler}/>
            <Sidebar isOpen = { isOpen } toggle = { toggleHandler }/>
            <HeroSection/>
            <InfoSection {...homeObjOne }/>
            <InfoSection {...homeObjTwo }/>
            <ServiceSection />
            <InfoSection {...homeObjThree }/>
            <Footer/>

        </div>
    )
}

export default Home
