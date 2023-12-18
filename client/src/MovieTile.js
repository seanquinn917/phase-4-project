import React from "react";
import { Link, useParams } from "react-router-dom";


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
            <button onClick={deleteMovie}>Delete</button>
        </div>
    )
};


export default MovieTile