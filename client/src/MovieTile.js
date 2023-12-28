import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./styles/Button";
import { useContext } from "react";
import UserContext from "./User-context";



function MovieTile({id, title, director, genre, setMovies}){
  const [user, setUser]=useContext(UserContext)


function deleteMovie(e){
    e.preventDefault();
    fetch(`/movies/${id}`,{
      method: "DELETE",
    })
    .then((r)=> {
      console.log(r);
      // r.json()
    })
    .then(()=>{
      setMovies(movies=>{
        return movies.filter((movie)=>movie.id!==id)
      })
    })
  }
      

    return( 
        <div>
            <h1>{title}</h1>
            <li>{director}</li>
            <li>{genre}</li>
            <Link to={`/movies/${id}`}>Insider Info</Link>
            <Button onClick={deleteMovie}>Delete</Button>
        </div>
    )
};


export default MovieTile