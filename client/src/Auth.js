import React, { useInsertionEffect, useState } from "react"


function Auth(){
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [user, setUser]=useState(null)


function Login(e){
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
      })
    .then((r)=>r.json())
    .then ((user)=>setUser(user));
    
}

console.log(user)
    return(
        <form onSubmit={Login}>
            <label>Enter your username</label>
            <input
            type="text"
            id="name"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            />
            {/* <label>Enter your password</label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e)=>setUserName(e.target.value)}
            /> */}
            <div className="Form Control">
                <label></label>
                <button type="submit">Login</button>
            </div>
        </form>





    )



}



export default Auth