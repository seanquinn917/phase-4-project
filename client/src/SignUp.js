import React, { useState, useContext } from "react"
import {  useNavigate } from "react-router-dom";
import UserContext from "./User-context";
import Error from "./styles/Error";


function SignUp(){
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [passwordConfirmation, setPasswordConfirmation]=useState('')
const [user, setUser]=useContext(UserContext)
const[city, setCity]=useState("")
const[name, setName]=useState('')
const[age, setAge]=useState('')
const [errors, setErrors]=useState([])

const navigate=useNavigate()


function handleSubmit(e){
    e.preventDefault();
    setErrors([])
    const newUser={
        username,
        age,
        city,
        name,
        password,
        password_confirmation: passwordConfirmation
    }
    console.log(newUser)
    fetch('/signup',{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify(newUser),
    }).then((r)=> {
        if(r.ok){
            r.json()
        .then((user)=>setUser(user))
        .then(()=>navigate('/movies'))
    } else {
        r.json().then((err)=>setErrors(err.errors))
    }
    })
}


    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Create a username</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <label>Create a password</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Confirm password</label>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
             <label>Where are you from?</label>
            <input
            type="text"
            id="city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            /> 
            <label>How old are you?</label>
            <input
            type="text"
            id="age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
             <label>Your first name</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <div className="Form Control">
                <label></label>
                <button type="submit">Signup</button>
            </div>
        </form>
        <ul>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
        </ul>
        </div>



    )



}



export default SignUp