import React from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./User-context";
import { useEffect } from "react";
import './App.css';
import InsiderWrap from "./styles/InsiderWrap";
import Button from "./styles/Button";
import Error from "./styles/Error";

function InsiderInfo({ movies, setMovies}){
const {id}=useParams()
const [user, setUser]=useContext(UserContext)
const [showForm, setShowForm]=useState(false)
const [errors, setErrors]=useState([])

const[newReviewContent, setNewReviewContent]=useState({
    content:"",
    movie_id :id,
})



const movie = movies.find((movie)=>movie.id===parseInt(id))


    function addNewReview(e){
        e.preventDefault()
        setErrors([])
      if(newReviewContent.content.length < 1){
        return setErrors(["input field cannot be blank"])
      }
        fetch('/reviews',{
            method: "POST",
            headers:{
                "content-type":"application/JSON"
            },
            body:JSON.stringify({
                content:newReviewContent.content,
                movie_id: newReviewContent.movie_id,
                user_id:user.id
            })
        })
        .then((r)=>{
          if(r.ok){
            r.json()
        .then((newreview)=>{
          console.log(newreview)
            const updatedMovies=[...movies]
            const targetMovie=updatedMovies.find((r)=>r.id ===parseInt(id))
            targetMovie.reviews.push(newreview)
            setMovies(updatedMovies)
        })} else {
          r.json().then((err)=>{
            console.log("this is what i'm looking for", err)
            setErrors([err.exception])
            })
        }
      })
    }

    function deleteReview(reviewId){
    fetch(`/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.status === 204) {
          return null;
        } else {
          return r.json();
        }
      })
      .then((deletedReview) => {
        if (deletedReview === null) {
          // Deletion was successful, handle accordingly
          // e.g., remove the deleted review from the movies array
          const updatedMovies = movies.map((movie) => {
            const updatedReviews = movie.reviews.filter(
              (review) => review.id !== reviewId
            );
            return {
              ...movie,
              reviews: updatedReviews,
            };
          });
          setMovies(updatedMovies);
        } else {
          // Handle the response as JSON in case of an error or unexpected response
          // ...
          console.log("oops")
        }
      });
    }



    const[updateReviewContent, setUpdateReviewContent]=useState({
      reviewId: null,
      content:"",
      movie_id :id,
    })
    
    function updateReviewFormChange(e, reviewId) {
      e.preventDefault();
      setUpdateReviewContent({
        ...updateReviewContent,
        reviewId: reviewId,
        content: e.target.value,
      });
    }
    

    function updateReview(reviewId, e){
      e.preventDefault()
      console.log("click")
      e.preventDefault();
       console.log(reviewId)
      fetch(`/reviews/${reviewId}`,{
        method: "PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          content:updateReviewContent.content,
          movie_id: updateReviewContent.movie_id,
          user_id:user.id,
        })
      })
      .then((r)=>r.json())
      .then((newContent)=>{
        const updatedMovies = [...movies]
        const targetMovie = updatedMovies.find((movie)=>movie.id === parseInt(id))
        targetMovie.reviews = targetMovie.reviews.map((review)=>{
          if(review.id === reviewId){
            return newContent;
          } else {
            return review;
          }
        })
        setMovies(updatedMovies)
        setShowForm(!showForm)
      })
    }


    function handleReviewFormChange(e){
        e.preventDefault()
        setNewReviewContent({
            ...newReviewContent,
            [e.target.name]:e.target.value
        })

    }
    

    if(!movie){
        return <h1>Loading...</h1>
    }
   
    if (user === null) {
      return <p>Loading User...</p>;
    }
   


const movieReviews = movie.reviews.map((review) => {
    if (user.id === review.user_id) {
      return (
        <li className="review" key={review.id}>
          "{review.content}" said {review.username} from {review.usercity}{" "}
          <Button onClick={() => deleteReview(review.id)}>Delete review</Button>
          <Button onClick={()=>{
            setUpdateReviewContent((prevContent) => ({
              ...prevContent,
              reviewId: review.id,
            }));
            setShowForm(!showForm)}}>Edit</Button>
          
        </li>
      );
    } else {
      return (
        <li className="review" key={review.id}>
          "{review.content}" said {review.username && `by ${review.username}`}{" "}
          {review.usercity && `from ${review.usercity}`}
        </li>
      );
    }
  });

    return(
      <InsiderWrap>
        <body>
        <div className="Info"> <header key={movie.id}> 
           
                <h1>{movie.title}/{movie.genre}</h1>
                <h2>Directed by: {movie.director}</h2>
                <h3></h3>
                </header>
                  <h4>What the people have to say:</h4>
                  <ul className="reviewBlock">
                {movieReviews}
               </ul>
               {showForm? (
               <form onSubmit={(e)=>updateReview(updateReviewContent.reviewId, e)}>
            <label>change your mind {user.name}?</label>
            <input type="text" name="content" value={updateReviewContent.content}  onChange={(e)=>updateReviewFormChange(e, updateReviewContent.reviewId)}></input>
            <input type="submit" value="submit"></input>
            </form>
            ) : null}
               <form onSubmit={addNewReview}>
                <ul>
                <label>What did you think??</label>
                <input type="text" name="content" value={newReviewContent.content} onChange={handleReviewFormChange}></input>
                </ul>
                <input type="submit" value="submit"></input>
               </form>
        </div>
        <ul>
        {errors.map((err, index) => (
          <Error key={index}>{err}</Error>
        ))}
        </ul>
        </body>
        </InsiderWrap>
    )
}


export default InsiderInfo