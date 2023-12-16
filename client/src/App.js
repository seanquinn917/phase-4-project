// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import MovieList from './MovieList';
import Home from './Home';


function App() {
 const [movies, setMovies]=useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((r)=> r.json())
    .then((data)=>setMovies(data))
  }, [])

 
  
  
  return (
      <div className="App">
    {/* //   <main> */}
    {/* {/* // <div> */}
       <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path= "/movies" element={<MovieList movies={movies}/>} />
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>  
    /* //   {/* // </main> */
    /* //   /* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
          
    //     </p>
    //     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header> */
   
  );
}

export default App;
