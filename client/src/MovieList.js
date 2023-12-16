import React from "react";
import { Link, useParams } from 'react-router-dom';
import MovieTile from "./MovieTile";

function MovieList({movies}){






    
    const displayMovies = movies.map((movie)=>{
        return <MovieTile movies={movies} id={movie.id} key={movie.id} title={movie.title} director={movie.director} genre={movie.genre}/>
      })
    

return(

<div>
    {displayMovies}
</div>
)



}
export default MovieList