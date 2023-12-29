import React, { useState } from "react"



function SignUp(){
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [passwordConfirmation, setPasswordConfirmation]=useState('')
const [user, setUser]=useState(null)
const[city, setCity]=useState("")
const[name, setName]=useState('')
const[age, setAge]=useState('')
const [errors, setErrors]=useState([])



function Signup(e){
e.preventDefault();
const user={
    username,
    password,
    age,
    city,
    name,
    passwordConfirmation:passwordConfirmation
}
fetch('/signup',{
    method: "POST",
    headers: {
        "Content-type":"Application/Json"
    },
    body:JSON.stringify(user)
})
.then((r)=>{
    if(r.ok){
        r.json().then((user)=>setUser(user))
    }else{
        r.json().then((err)=>setErrors(err.errors))
    }
});
}


    return(
        <div>
        <form onSubmit={Signup}>
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
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
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
        <form></form>
        <p>
        {/* {errors.map((error) => {
          return <ul key={error}>{error}</ul>
        })} */}
        </p>
        </div>



    )



}



export default SignUp