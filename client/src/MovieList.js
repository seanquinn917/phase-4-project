import React from "react";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import MovieTile from "./MovieTile";
import { useState, useEffect } from "react";

function MovieList({user, movies, setMovies}){
const{id}=useParams()

console.log(user)


const [newMovieForm, setNewMovieForm]=useState({
  title: "",
  director: "",
  genre:""
})

function movieFormChange(e){
  e.preventDefault()
setNewMovieForm({
  ...newMovieForm,
[e.target.name]:e.target.value
})
}

function addNewMovie(e){
 e.preventDefault()
 fetch('/movies',{
  method: 'POST',
  headers: {
    "content-type":"application/JSON"
  },
  body: JSON.stringify({
    title:newMovieForm.title,
    director:newMovieForm.director,
    genre:newMovieForm.genre
  })
 })
 .then((r)=>r.json())
 .then((newMovie)=>setMovies([...movies, newMovie]))
}



    // const displayMovies = movies.map((movie)=>{
    //     return <MovieTile movies={movies} id={movie.id} key={movie.id} title={movie.title} director={movie.director} genre={movie.genre} />
    //   })
    

return(

<div>
    {movies.map((movie)=>{
      return  <MovieTile
      key={movie.id}
      setMovies={setMovies}
      movies={movies}
      id={movie.id}
      title={movie.title}
      director={movie.director}
      genre={movie.genre}
    />
    })}
    <form onSubmit={addNewMovie}>Add your favorite movie:
        <label>Movie Title</label>
        <input type="text" name="title" value={newMovieForm.title} onChange={movieFormChange}></input>
        <label>Director</label>
        <input type="text" name="director" value={newMovieForm.director} onChange={movieFormChange}></input>
        <label>Genre</label>
        <input type="text" name="genre" value={newMovieForm.genre} onChange={movieFormChange}></input>
        <input type="submit" value="submit"/>
        
    </form>
</div>

)



}
export default MovieList