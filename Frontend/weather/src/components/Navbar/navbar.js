import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./nav.css";

function NavB() {
  const [Navv, setNavbar] = useState(false);

 

  return (
    <Navbar
      className="Navv"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand className="brnd">
          WORLD WEATHER
        </Navbar.Brand>
        <Navbar.Toggle id="k" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <ul className="topnav">
              <li>
                  <a className="btn" >Login</a>
              </li>
              <li>
                  <a className="btn">
                    Sign up
                  </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
