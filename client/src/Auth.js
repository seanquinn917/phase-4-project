import React, { useInsertionEffect, useState } from "react"


function Auth(){
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [user, setUser]=useState({
    username:"",
    password:"",
    city:"",
    age:"",
    name:""

})
const [errors, setErrors]=useState([])


// function Login(e){
//     e.preventDefault();
//     fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username })
//       })
//     .then((r)=>r.json())
//     .then ((user)=>setUser(user));
    
// }


function Signup(e){
e.preventDefault();
const user={
    username,
    password
}
fetch('/users',{
    method: "POST",
    headers: {
        "Content-type":"Application/Json"
    },
    body:JSON.stringify(user)
})
.then((r)=>{
    if(r.ok){
        r.json().then(setUser)
    }else{
        r.json().then(e=>setErrors(Object.entries(e.error).flat()))
    }
})
}

console.log(user)
    return(
        <div>
        <form onSubmit={Signup}>
            <label>Create a username</label>
            <input
            type="text"
            id="name"
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
             {/* <label>Where are you from?</label>
            <input
            type="text"
            id="city"
            value={user.city}
            onChange={(e)=>setUser(e.target.value)}
            /> 
            <label>How old are you?</label>
            <input
            type="text"
            id="age"
            value={user.username}
            onChange={(e)=>setUser(e.target.value)}
            />
             <label>Your first name</label>
            <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e)=>setUser(e.target.value)}
            /> */}
            <div className="Form Control">
                <label></label>
                <button type="submit">Signup</button>
            </div>
        </form>
        <form></form>

        </div>



    )



}



export default Auth