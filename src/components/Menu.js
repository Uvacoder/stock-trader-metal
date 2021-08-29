import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../img/temp-logo.png";
import { Link } from 'react-router-dom';
import '../styles/Menu.css'

export default function Menu() {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top" className="navbar">
        <Container>
          <Link to="/">
            <Navbar.Brand className="logo">
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
              <Navbar.Text><Link className="link" to="/about">About</Link></Navbar.Text>
              <Navbar.Text><Link className="link" to="/contact">Contact</Link></Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}