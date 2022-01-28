import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PowerFlex from "../../assets/images/PowerFlex.jpg"


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    &:active {
        border: 2px solid #00000005;
        background-color: #00000005;
    }
`

const LogoImg = styled.div`
    width: 29px;
    height: 29px;
    img {
        width: 100%;
        height: 100%;
    }
`
const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: rgb(36,50,106);
    font-weight: 500;
`

export function Logo(props){
    const navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }

    return <LogoWrapper onClick={goHome}>
        <LogoImg><img src={PowerFlex} alt="PowerFlex logo" /></LogoImg>
        <LogoText >PowerFlex</LogoText>
    </LogoWrapper>
}