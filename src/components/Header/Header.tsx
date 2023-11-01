import React from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Nav, UserBar, Auth, NavBar, SVG } from "./Header.styled";
import symbolDefs from "../../img/symbol-defs.svg";

function Header() {
  return (
    <Nav>
      <Container>
        <NavBar>
          <UserBar>
            <NavLink to="/">
              <SVG width="20" height="20">
                <use href={symbolDefs + "#icon-spoon-knife"}></use>
              </SVG>
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="catalog">Catalog</NavLink>
          </UserBar>
          <Auth>
            <NavLink to="singin">
              <Button variant="primary">Sing In</Button>
            </NavLink>
            <NavLink to="singup">
              <Button variant="primary">Sing Up</Button>
            </NavLink>
          </Auth>
        </NavBar>
      </Container>
    </Nav>
  );
}

export default Header;
