import React, { useInsertionEffect, useState } from "react"


function Auth(){
const [name, setName]=useState(" ")
const [password, setPassword]=useState(" ")


function Signup(e){
    e.preventDefault()
    const user={
       name,
       password
    }   
    fetch("/users",{
        method: "POST",
        headers:{
            "content-type":"application/json"
        }, 
        body:JSON.stringify(user)
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
        <form onSubmit={Signup}>
            <input></input>
            


        </form>





    )



}



export default Auth