import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./nav.css";

function NavB() {
  const [Navv, setNavbar] = useState(false);
  const [user, setUser] = useState();

  function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/home";
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return user ? (
    <Navbar className="Navv" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="brnd">WORLD WEATHER</Navbar.Brand>
        <Navbar.Toggle id="k" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <ul className="topnav">
              <li>
                <a className="btn" href="/profil">Profile</a>
                </li>
              <li>
                <a className="btn" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="Navv" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="brnd">WORLD WEATHER</Navbar.Brand>
        <Navbar.Toggle id="k" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <ul className="topnav">
              <li>
                <a className="btn" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="btn" href="/register">
                  Signup
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
