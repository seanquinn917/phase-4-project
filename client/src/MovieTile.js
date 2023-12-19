import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./styles/Button";




function MovieTile({id, title, director, genre, setMovies}){

 

function deleteMovie(e){
    e.preventDefault();
    fetch(`/movies/${id}`,{
      method: "DELETE",
    })
    .then((r)=> r.json())
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