import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function TopNav() {
  return(
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home"><img src="../../images/SmallLogo.png" height="35"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}