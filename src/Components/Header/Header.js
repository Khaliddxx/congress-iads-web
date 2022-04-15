import React from "react";
import "./Header.scss";
import { Nav, Container, Navbar } from "react-bootstrap";
import congressLogo from "../../Assets/Images/congresslogo1.png";
function Header() {
  return (
    <>
      <Navbar className="header" collapseOnSelect expand="lg" >
        <Container className="cont" fluid>
          <Navbar.Brand className="logo" href="#home"><img src={congressLogo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="headerInner">
              <Nav.Link className="headerLink" href="">ABOUT</Nav.Link>
              <Nav.Link className="headerLink"  href="">
                PROGRAM
              </Nav.Link>

              <Nav.Link className="headerLink"  href="">
                REGISTRATIONS
              </Nav.Link>

              <Nav.Link className="headerLink" href="">
                TRANSPORTATION
              </Nav.Link>

              <Nav.Link className="headerLink" href="">
                CONTACT US
              </Nav.Link>

              <Nav.Link className="headerCTA" href="">
                REGISTER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
