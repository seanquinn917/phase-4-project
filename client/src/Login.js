import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./User-context";



function Login(){
 const [user, setUser]=useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate=useNavigate()


    // function onLogin(e){
    //     e.preventDefault();
    //     fetch("/login",{
    //         method: "POST",
    //         headers: {
    //             "Content-type":"Application/json",
    //         },
    //         body: JSON.stringify({username, password}),
    //     })
    //     .then((r)=>{
    //         if(r.ok){
    //             console.log(r)
    //             return r.json();
    //         }
    //             .then((user)=> {
    //                 setUser(user)
    //                 console.log(user)
    //                 navigate('/movies')});
    //         } else {
    //         r.json().then((error)=> console.log(error.errors));
    //         }
    //     })
    // } 

    function onLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => {
            if (r.ok) {
              return r.json();
            } else {
              throw new Error("Login failed");
            }
          })
          .then((user) => {
            setUser(user);
            navigate("/movies");
          })
          .catch((error) => {
            console.log(error);
            // Handle login failure
          });
      }



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