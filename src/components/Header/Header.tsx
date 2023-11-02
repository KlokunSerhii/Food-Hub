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
            <NL to="/">
              <SVG width="50" height="50">
                <use href={symbolDefs + "#icon-spoon-knife"}></use>
              </SVG>
            </NL>
            <NL to="/">Home</NL>
            <NL to="soups">Soups</NL>
            <NL to="salads">Salads</NL>
            <NL to="main_dishes">Main Dishes</NL>
            <NL to="dessert">Desserts</NL>
            <NL to="children_meals">Children`s Meals</NL>
          </UserBar>
          <Auth>
            <Button to="singin">Sing In</Button>
            <Button to="singup">Sing Up</Button>
          </Auth>
        </NavBar>
      </Container>
    </Nav>
  );
}

export default Header;
