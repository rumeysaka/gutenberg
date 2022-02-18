import React from "react";
import "./Menun.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Sign from "../Login/Sign";
import { Button } from "bootstrap";
import Btn from "../Btn";
import { Navigate, Link } from "react-router-dom";

export default function Menu(props) {
  const { user, setUser, handleLogout } = props;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" id="shadow">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m">
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/sign">
                Login
              </Link>
              {/* <Btn /> */}

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              
                <Link className="nav-link" to="/sign"
                >
                  Sign In
                </Link>
              
                <Link className="nav-link" to="/"
                  onClick={handleLogout}
                >
                  Log out
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
