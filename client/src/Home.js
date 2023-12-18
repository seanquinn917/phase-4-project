import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
import MovieList from "./MovieList"



function Home({user, setUser}){

    useEffect(()=>{
        fetch('/me').then((r)=> {
          if (r.ok) {
            r.json().then((user)=> setUser(user))
          }
        })
      }, []);

     if(!user) {
      return <Login user={user} setUser={setUser}/>
    }
      
    
        
      
console.log(user)

    return(

        <div>
            <p>
                Welcome Back {user.name}!  
                <Link to="/movies">Click here to Enter</Link>
          </p>
        </div>
        )
};


export default Home