import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../img/temp-logo.png";
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Metal Trade</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}