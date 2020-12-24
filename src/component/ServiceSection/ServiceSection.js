import React from 'react';
import Icon1 from '../../images/reduce.svg';
import Icon2 from '../../images/online.svg';
import Icon3 from '../../images/benifits.svg';
import { ServiceContainer, ServiceH1, ServiceWrapper, ServiceCard, ServiceImg, ServiceH3, ServiceP} from './ServiceSectionElements';

const ServiceSection = () => {
    return (
        <div>
            <ServiceContainer id='services'>
                <ServiceH1>Our Services</ServiceH1>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceImg src= {Icon1}></ServiceImg>
                        <ServiceH3>Reduce Expenses</ServiceH3>
                        <ServiceP>We help reduce your fees and increase your overall revenue. </ServiceP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImg src= {Icon2}></ServiceImg>
                        <ServiceH3>Virtual Offices</ServiceH3>
                        <ServiceP>You can access our platform from anywhere in the world. </ServiceP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImg src= {Icon3}></ServiceImg>
                        <ServiceH3>Premium Benifits</ServiceH3>
                        <ServiceP>Unlock our special membership card that returns 5% cash back. </ServiceP>
                    </ServiceCard>
                </ServiceWrapper>
            </ServiceContainer>
            
        </div>
    )
}

export default ServiceSection;
