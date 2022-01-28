// shapes and animations
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid rgb(226, 90, 42);
  }
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`

export function Nan(props, {to}) {
    return <NavLinksContainer>
        <LinksWrapper>
        <LinkItem><Link to={"about"}>About</Link></LinkItem>
        <LinkItem><Link to={"warehouses"}>Warehouses</Link></LinkItem>
        <LinkItem><Link to={"/"}>Inventory List</Link></LinkItem>
        <LinkItem><Link to={"/user"}>Users</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}