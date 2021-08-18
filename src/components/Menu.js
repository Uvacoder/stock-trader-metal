import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../img/temp-logo.png"

export default function Menu() {
return (
    <div>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home">
  <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Metal Trade</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">     
    </Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
)
}