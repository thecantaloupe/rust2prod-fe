// shapes and animations
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
    z-index: 99;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`

export function MobileNavLinks(props, {to}) {
    const [isOpen, setOpen] = useState(false);

    return <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && <LinksWrapper>
            <Accessibility />
            <LinkItem><Link to={"about"}>About</Link></LinkItem>
            <LinkItem><Link to={"warehouses"}>Warehouses</Link></LinkItem>
            <LinkItem><Link to={"/"}>Inventory List</Link></LinkItem>
            <LinkItem><Link to={"/user"}>Users</Link></LinkItem>
        </LinksWrapper>}
    </NavLinksContainer>
}