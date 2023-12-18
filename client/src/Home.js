import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";



function Home({user, setUser}){

    useEffect(()=>{
        fetch('/me').then((r)=> {
          if (r.ok) {
            r.json().then((user)=> setUser(user))
          }
        })
      }, []);
    
      if(user){
        return <h2>Welcome, {user.name}!</h2>
      } else {
        
      


    return(

        <div>
            <p>
                Welcome!
        Not a member? <Link to={'/signup'}> click here to Signup</Link>
        </p>
        </div>
        )}
};


export default Home