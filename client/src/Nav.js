// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from './User-context';
import React, { useParams,  useContext } from "react";
import MovieList from "./MovieList";
import "./index.css"
import Home from "./Home";
import Button from "./styles/Button";


function Nav({movies}){
    const [user, setUser] = useContext(UserContext);
    const navigate=useNavigate()


    console.log(user)
    function logOut(e){
      e.preventDefault();
      fetch("/logout",{
        method: "DELETE"
      }).then(()=>{
        setUser(null)
        navigate('/')})
    }


    return( 
        <div className="NavBar">
            <h1 className="navList">
                <ul className="topNav">
                    
                
                    {user ? (
                        <>
                          <li className="navItem">
                            <Link to="/movies">Movies</Link>
                          </li>
                          
                          <li className="navItem" > {user.name}'s MovieWorld!</li>
                          <Button onClick={logOut}>Logout</Button>
                        </>
                      ) : (
                        <>
                          {null}
                         
                        </>
                      )}    </ul>
            </h1>
        </div>
    )
}

export default Nav;