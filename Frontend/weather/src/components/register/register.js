import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css"


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const register = () => {
        console.log(username);
        axios.post("http://localhost:3001/register", {
            username: username, 
            password: password, 
            email: email,
        }).then((response) => {
            console.log(response)
        });
    }

    return (

        <div className="all">
        <div class="container" id="container">
            <div class="form-container sign-in-container">
                <form action="">
                    <h1>Connection</h1>

                    <input
                    className="un"
                    type="text"
                    align="center"
                    name="pseudo"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Pseudo"
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

    
                <button onClick={register} class="submit"> ENREGISTRER</button>
                <br></br>

                    {/* <GoogleLogin
                        clientId="929564246048-oj8iprqmg1rpsufve26p9kp21lt41fi0.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccesGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
                </form>


            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                    <h1>Vous avez déja un compte ?</h1>
                    <h2><Link className="txt"  to="/login">Connectez-vous 🙋‍♂️</Link></h2>


                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Register