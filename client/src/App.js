// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import MovieList from './MovieList';
import Home from './Home';
import InsiderInfo from './InsiderInfo';
import Login from './Login';
import UserContext from './User-context';

function App() {
 
 const [user, setUser]=useState(null)
 const [movies, setMovies]=useState([])



 useEffect(()=>{
  fetch("http://localhost:4000/movies")
  .then((r)=> r.json())
  .then((data)=>setMovies(data))
}, [])



  
  return (
    
      <div className="App">
      <UserContext.Provider value={[user, setUser]}/>
       <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path= "/movies" element={<MovieList user={user}movies={movies} setMovies={setMovies}/>}/>
            <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
            <Route path= '/movies/:id' element={<InsiderInfo user={user} movies={movies} setMovies={setMovies}/>}/>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
          </Routes>
      </BrowserRouter>
      <UserContext.Provider/>
    </div>  
    
  );
}

export default App;
