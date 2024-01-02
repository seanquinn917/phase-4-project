import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
import MovieList from "./MovieList"
import { useContext } from "react";
import UserContext from "./User-context";
import './App.css'


function Home(){
const [user, setUser]=useContext(UserContext)


     if(!user) {
      return <Login user={user} setUser={setUser}/>
    }
      
  
    return(

        <div>
            <p className="home">
                Welcome Back {user.name},  
                <Link to="/movies">    get back in there!  </Link>
          </p>
        </div>
        )
};


export default Home