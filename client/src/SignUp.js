import React, { useState } from "react"
import {  useNavigate } from "react-router-dom";


function SignUp(){
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [password_confirmation, setPasswordConfirmation]=useState('')
const [user, setUser]=useState(null)
const[city, setCity]=useState("")
const[name, setName]=useState('')
const[age, setAge]=useState('')
const [errors, setErrors]=useState([])

const navigate=useNavigate()


function signUp(e){
e.preventDefault();
const newUser={
    username,
    age,
    city,
    name,
    password,
    password_confirmation
}
fetch('/signup',{
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body:JSON.stringify(newUser)
})
.then((r)=> r.json())
.then((user) => {
    setUser(user);
    console.log(user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
}


    return(
        <div>
        <form onSubmit={signUp}>
            <label>Create a username</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <label>Create a password</label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)
            }
            />
            <label>Confirm password</label>
            <input
            type="text"
            id="password_confirmation"
            value={password_confirmation}
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
        </div>



    )



}



export default SignUp