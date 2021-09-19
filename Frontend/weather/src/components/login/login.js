import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

async function loginUsers(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUsers({
      email,
      password,
    });

    const user = { email, password };
    const response = await axios.post("http://localhost:3001/login", user);
    if (response.data.token) {
      setToken(token);
      setUser(response.user);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response);
      window.location.href = "/profil";
    }
  };

  return (
    <div className="all">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Connection</h1>

            <input
              class="un"
              type="text"
              align="center"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              class="pass"
              type="password"
              align="center"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button class="submit">Login</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Oups 🤭 You didn't register yet ?</h1>
              <h2>
                <Link className="txt" to="/register">
                  Signup 🙋‍♂️
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
