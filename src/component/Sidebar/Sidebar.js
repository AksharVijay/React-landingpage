import React from 'react';
import { SidebarConatiner, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarItem, SidebarLinks, SidebarBtn, SidebarBtnLink } from './SidebarElements';

const Sidebar = (props) => {
    return (
        <div>
            <SidebarConatiner isOpen = {props.isOpen } onClick = {props.toggle}>
                <Icon onClick = { props.toggle }>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarItem>
                            <SidebarLinks to="about" onClick = { props.toggle }>About</SidebarLinks>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLinks to="discover" onClick = { props.toggle }>Discover</SidebarLinks>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLinks to="services" onClick = { props.toggle }>Services</SidebarLinks>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLinks to="signup" onClick = { props.toggle }>Signup</SidebarLinks>
                        </SidebarItem>
                    </SidebarMenu>
                    <SidebarBtn>
                        <SidebarBtnLink to="/signin">SignIn</SidebarBtnLink>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarConatiner>
            
        </div>
    )
}

export default Sidebar;
