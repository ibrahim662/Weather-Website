import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/home";
import Weather from "./components/weather";
import Particles from 'react-particles-js';
import NavB from './components/Navbar/navbar';
import Register from "./components/register/register";
import Login from "./components/login/login";
import Profil from "./components/profil/profil";
import Cities from "./components/cities/cities"

function App() {
  const params = {
    particles: {
      number: {
          value: 160,
          density: {
              enable: false
          }
      },
      size: {
          value: 3,
          random: true,
          anim: {
              speed: 4,
              size_min: 0.3
          }
      },
      line_linked: {
          enable: false
      },
      move: {
          random: true,
          speed: 1,
          direction: "top",
          out_mode: "out"
      }
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "bubble"
          },
          onclick: {
              enable: true,
              mode: "repulse"
          }
      },
      modes: {
          bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
          },
          repulse: {
              distance: 400,
              duration: 4
          }
      }
  }
  };
  return (
    <div>

    <Particles className="particles" params={params} />
    <BrowserRouter>
   
      <Route path="/home">

          <NavB/>
          <Home />

      </Route>
      <Route path="/register">
          
          <Register />
      </Route>
      <Route path="/login">
      <NavB/>
          <Login />
      </Route>
      <Route path="/profil">
        <Profil />
      </Route>
      <Route path="/cities">
        <NavB/>
          <Cities />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
