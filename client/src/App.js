import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Auth from './Auth';
import MovieList from './MovieList';
import Home from './Home';
import { Link } from 'react-router-dom';

function App() {
 const [movies, setMovies]=useState([])
 const{id}=useParams()

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((r)=> r.json())
    .then((data)=>setMovies(data))
  }, [])

  
  const displayMovies = movies.map((movie)=>{
    return <div> 
      <li> 
        
        <Link to={`/movies/${id}`}>{movie.title}</Link>
          </li>
          </div>
  })

  
  
  return (
      <div className="App">
    {/* //   <main> */}
    {/* {/* // <div> */}
       <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path= "/movies" element={<MovieList movieList={displayMovies}/>} />
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
