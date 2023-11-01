import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        className="py-3"
      >
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Catalog</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
          <Button className="mx-3" variant="light">
            Sing In
          </Button>
          <Button variant="outline-light">Sing Up</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
