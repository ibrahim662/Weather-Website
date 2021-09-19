import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(username);
    axios
      .post("http://localhost:3001/register", {
        username: username,
        password: password,
        email: email,
      })
      .then((response) => {
        console.log(response);
      });
    alert("successfully registered !, welcome " + username + " please login");
  };

  return (
    <div className="all">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form>
            <input
              className="un"
              type="text"
              align="center"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
            />

            <input
              className="pass"
              type="password"
              align="center"
              name="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <input
              className="un"
              type="email"
              align="center"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />

            <button onClick={register} class="submit">
              {" "}
              Save
            </button>
            <br></br>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>You already registred ?</h1>
              <h2>
                <Link className="txt" to="/login">
                  Login 🙋‍♂️
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
