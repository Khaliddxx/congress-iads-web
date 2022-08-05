import React from "react";
import "./Header.scss";
import { Nav, Container, Navbar } from "react-bootstrap";
import congressLogo from "../../Assets/Images/congresslogo1.png";
function Header() {
  return (
    <>
      <Navbar className="header" collapseOnSelect expand="lg">
        <Container className="cont" fluid>
          <Navbar.Brand className="logo" href="/">
            <img src={congressLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="headerInner">
              <Nav.Link className="headerLink" href="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="headerLink" href="/program">
                PROGRAM
              </Nav.Link>

              <Nav.Link className="headerLink" href="/register">
                REGISTRATIONS
              </Nav.Link>

              <Nav.Link className="headerLink" href="/transportation">
                TRANSPORTATION
              </Nav.Link>

              <Nav.Link className="headerLink" href="/#footer">
                CONTACT US
              </Nav.Link>

              <Nav.Link className="headerLink" href="/sponsors">
                SPONSORS
              </Nav.Link>

              <Nav.Link className="headerCTA" href="/form">
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
