import React, { useInsertionEffect, useState } from "react"


function Auth(){
const [name, setName]=useState("")
const [password, setPassword]=useState()


function SignUp(e){
    e.preventDefault()
   
    fetch("/login",{
        method: "POST",
        headers:{
            "content-type":"application/json"
        }, 
        body:JSON.stringify({name, password})
    })
    .then(res=>{
        if(res.ok){
            res.json().then(user=>console.log(user))
        }else {
            res.json().then(e=>console.log(e.errors.full_messages))
        }
    })
    
}


    return(
        <form onSubmit={SignUp}>
            <label>Enter your username</label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Enter your password</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <div className="Form Control">
                <label></label>
                <button type="submit">Login</button>
            </div>
        </form>





    )



}



export default Auth