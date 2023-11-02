import React from "react";
import Container from "../Container";
import { Nav, UserBar, Auth, NavBar, SVG, NL } from "./Header.styled";
import symbolDefs from "../../img/symbol-defs.svg";
import Button from "../Button";

function Header() {
  return (
    <Nav>
      <Container>
        <NavBar>
          <UserBar>
            <NL to="/" >
              <SVG width="20" height="20">
                <use href={symbolDefs + "#icon-spoon-knife"}></use>
              </SVG>
            </NL>
            <NL to="/">Home</NL>
            <NL to="catalog">Catalog</NL>
          </UserBar>
          <Auth>
            <Button to='singin'>
              Sing In
            </Button>
            <Button to='singup'>
              Sing Up
            </Button>
          </Auth>
        </NavBar>
      </Container>
    </Nav>
  );
}

export default Header;
