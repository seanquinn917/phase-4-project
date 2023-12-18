// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import MovieList from './MovieList';
import Home from './Home';
import InsiderInfo from './InsiderInfo';

function App() {
 const [movies, setMovies]=useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((r)=> r.json())
    .then((data)=>setMovies(data))
  }, [])

  
  
  return (
      <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path= "/movies" element={<MovieList movies={movies} id={movies.id} setMovies={setMovies}/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path= '/movies/:id' element={<InsiderInfo movies={movies} setMovies={setMovies}/>}/>
          </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
