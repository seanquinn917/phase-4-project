// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from './User-context';
import React, { useParams,  useContext } from "react";
import MovieList from "./MovieList";
import "./index.css"
import Home from "./Home";


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
                     {/* <li className="topNav"><Link to="/movies">Movies</Link></li> 
                     <li className="topNav"><Link to="/movies/:id">InsiderInfo</Link></li> 
                 */}
                
                    {user ? (
                        <>
                          <li className="navItem">
                            <Link to="/movies">Movies</Link>
                          </li>
                          {/* <li className="navItem">
                            <Link to={`/movies/${movies.id}`}>InsiderInfo</Link>
                          </li> */}
                          <li className="navItem" > {user.name}'s MovieWorld!</li>
                          <button onClick={logOut}>Logout</button>
                        </>
                      ) : (
                        <>
                          {/* <li className="navItem">
                            <Link to="/login">Login</Link>
                          </li> */}
                         
                        </>
                      )}    </ul>
            </h1>
        </div>
    )
}

export default Nav;