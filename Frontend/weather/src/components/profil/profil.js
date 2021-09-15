import React, { Component } from 'react'
import { useState, useEffect } from "react";
import "./profil.css"





export function Profil() {
    const [user, setUser] = useState()
    const [error, setError] = useState(null);
    const [showuser, setShowUser] = useState([]);
    useEffect(() => {
          /*var requestOptions = {
              method: 'GET',
              redirect: 'follow'
              };*/
  
          fetch("http://localhost:3001/profil" /*, requestOptions*/, {
          method: "GET",
          redirect: 'follow',
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
          }, []);

function logout()  {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/home';
}

useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }

  }, []);

    return (
        <div className="Dashboard" >
            <button onClick={logout}>Logout</button>
            {showuser.map((user) => (
        <div>
                <div>Bonjour, {user.username}</div>
                <h2></h2>
                
                <div class="">
                  <div class="">
                  
                   <h5>{user.username}</h5>
            
                  </div>
       
                </div>
              </div>
              ))}
        </div>
    );
    
     
}

export default Profil