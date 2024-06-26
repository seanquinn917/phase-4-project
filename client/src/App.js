// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import MovieList from './MovieList';
import Home from './Home';
import InsiderInfo from './InsiderInfo';
import Login from './Login';
import UserContext, { UserProvider }from './User-context'; 
import Nav from './Nav';


function App() {
 

 const [movies, setMovies]=useState([])



 useEffect(()=>{
  fetch("/movies")
  .then((r)=> r.json())
  .then((data)=>setMovies(data))
}, [])



  
  return (
    
      <div className="App">
       <BrowserRouter>
      <UserProvider>
      <Nav movies={movies}/>
      
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path= "/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
            <Route path="/" element={<Home />}/>
            <Route path= '/movies/:id' element={<InsiderInfo  movies={movies} setMovies={setMovies}/>}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
      
      </UserProvider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
