import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { Nan } from "./nan";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'
import { useNavigate, useLocation } from "react-router-dom";
import { getWarehouse } from "../../actions/Warehouse"
import { getUser } from "../../actions/User"

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
`;

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function NavBar(props){
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/');
        setUser(null);
      }
      // check token and if expired send home
      useEffect(() => {
        const token = user?.token;
        if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
        dispatch(getWarehouse())
        dispatch(getUser())
      }, [location, dispatch]);

    return <NavBarContainer>
        <LeftSection>
            <Logo />
        </LeftSection>
        <MiddleSection>
            {!isMobile && <Nan />}
        </MiddleSection>
        <RightSection>
        {!isMobile && <Accessibility user={user} logout={logout}/>}
        {isMobile && <MobileNavLinks user={user} logout={logout}/>}
      </RightSection>
    </NavBarContainer>
}