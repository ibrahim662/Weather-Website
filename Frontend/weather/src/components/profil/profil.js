import React, { useState, useEffect } from "react";
import "./profil.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export function Profil() {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [showuser, setShowUser] = useState([]);

  useEffect(() => {
    const em = JSON.parse(localStorage.getItem("user"));
    // console.log(em.token)
    /*var requestOptions = {
              method: 'GET',
              redirect: 'follow'
              };*/

    fetch("http://localhost:3001/profil" /*, requestOptions*/, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + em.token,
      },
    })
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
      .then((res) => res.json())
      .then(
        (resuser) => {
          setShowUser(resuser);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setError(error);
          console.log(error);
        }
      );
    // console.log(JSON.parse(localStorage.getItem("user")))
  }, []);

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
    <div>
      <Navbar className="Navv" collapseOnSelect expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand className="brnd">WORLD WEATHER</Navbar.Brand>
          <Navbar.Toggle id="k" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <ul className="topnav">
                <li>
                  <a className="btn" href="/home">
                    Go back to home
                  </a>
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
      <div className="Dashboard">
        {showuser.map((user) => (
          <div>
            <h2>Bonjour, {user.username}</h2>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>go back</h1>
  );
}

export default Profil;
