import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

///portfolio/# is added to href path due to production routing. 

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
      <Navbar.Brand href="/portfolio/#" className="title">
        JD
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/portfolio/#/projects">Projects</Nav.Link>

          <Nav.Link href="/portfolio/#/experiences">Experiences</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/portfolio/#/resume">Resume</Nav.Link>
          <Nav.Link href="/portfolio/#/blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
