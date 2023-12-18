import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login({user, setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);



    function onLogin(e){
        e.preventDefault();
        fetch("/login",{
            method: "POST",
            headers: {
                "Content-type":"Application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r)=>{
            if(r.ok){
                r.json()
                .then((user)=> {
                    setUser(user)
                    Navigate("/movies")});
            } else {
            r.json().then((error)=> console.log(error.errors));
            }
        })
    } 
console.log(user)




    return(
        <span>
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
    </span>
    )
};


export default Login