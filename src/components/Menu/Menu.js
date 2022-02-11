import React from 'react';
import "./Menun.css"
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

 export default function Menu() {
   return(<>
<Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" id="shadow">
  <Container>
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m">
      <Link to="/about">About</Link>
      <Link to="/signin">Login</Link>
      {/* <Link to="/signin">Login</Link>
      <Nav.Link href="signin">Sign Up</Nav.Link> */}
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>) }