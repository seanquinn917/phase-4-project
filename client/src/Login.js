import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./User-context";
import './App.css'
import Error from "./styles/Error";



function Login(){
 const [user, setUser]=useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate=useNavigate()

    function onLogin(e) {
        e.preventDefault();
        setErrors([])
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => {
            if (r.ok) {
             r.json().then((user) => {
              setUser(user);
              navigate("/movies");
            })
            } else {
              r.json().then((err) => setErrors(err.error));;
            }
          })
          
      }



    return(
        <body className="login">
        <form onSubmit={onLogin}>
            <lable>Username</lable>
            <input 
            type="text" 
            id="username"
            value = {username}
            onChange={(e)=>setUsername(e.target.value)}
        />
        <lable>Password</lable>
        <input 
        type="text" 
        id="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        />
    <button type="submit">Login</button>
    </form>
    <p>
    Not a member? <Link to='/signup'>Click here to sign up</Link>
    </p>
    <ul>
    {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
    </ul>
    
    </body>
    )
};


export default Login