import React from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./User-context";
import { useEffect } from "react";


function InsiderInfo({ movies, setMovies}){
const {id}=useParams()
const [user, setUser]=useContext(UserContext)
// const userId = user ? user.id : null

// console.log(user)
const[newReviewContent, setNewReviewContent]=useState({
    content:"",
    movie_id :id,
    user_id: user ? user.id : null
})
console.log(user)
const movie = movies.find((movie)=>movie.id===parseInt(id))
// console.log(movie)

useEffect(() => {
    fetch('/current_user')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch current user');
        }
      })
      .then((user) => {
        setUser(user);
        setNewReviewContent((prevReviewContent) => ({
          ...prevReviewContent,
          user_id: user ? user.id : null,
        }))
      })
      .catch((error) => {
        console.log(error);
        // Handle the error or redirect to the login page if necessary
      });
  }, []);


console.log(user)


    function addNewReview(e){
        e.preventDefault()
        console.log(newReviewContent.user_id)
        fetch('/reviews',{
            method: "POST",
            headers:{
                "content-type":"application/JSON"
            },
            body:JSON.stringify({
                content:newReviewContent.content,
                movie_id: newReviewContent.movie_id,
                user_id:newReviewContent.user_id
            })
        })
        .then((r)=>r.json())
        .then((newreview)=>{
            const updatedMovies=[...movies]
            const targetMovie=updatedMovies.find((r)=>r.id ===parseInt(id))
            targetMovie.reviews.push(newreview)
            setMovies(updatedMovies)
        })

    }

    // function deleteReview(reviewId){
    //     console.log(reviewId)
    //     console.log(user.id)
    //     fetch(`/reviews/${reviewId}`,{
    //         method:"DELETE",
    //     })
    //     .then((r)=>{
    //       if(r.ok) {
    //         console.log(r)
    //         return r.json()
    //       }else {
    //         throw new Error("Failed to delete review");
    //       }
    //       })
    //     .then((deletedReview)=>{
    //       if (!deletedReview) {
    //         throw new Error("Deleted review is undefined");
    //       }
    //         const updatedMovies= movies.map((movie)=>{
    //             if(movie.id === deletedReview.movie_id){
    //                 const updatedMovie = { ...movie, 
    //                   reviews: movie.reviews.filter((review)=>review.id !== deletedReview.id)}
    //                 return updatedMovie
    //             }else return movie
    //         })
    //         setMovies(updatedMovies)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // Handle the error or display an error message to the user
    //     });
    // }

    function deleteReview(reviewId) {
      console.log(reviewId);
      console.log(user.id);
      fetch(`/reviews/${reviewId}`, {
        method: "DELETE",
      })
        .then((r) =>  r.json())
        .then((deletedReview) => {
          if (!deletedReview) {
            throw new Error("Deleted review is undefined");
          }
          const updatedMovies = movies.map((movie) => {
            if (movie.id === deletedReview.movie_id) {
              const updatedMovie = {
                ...movie,
                reviews: movie.reviews.filter((review) => review.id !== deletedReview.id),
              };
              return updatedMovie;
            } else {
              return movie;
            }
          });
          setMovies(updatedMovies);
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
   
//    const movieReviews= movie.reviews.map((review)=>{
   
//    if(user.id === review.user_id){
//     return <li key={review.id}>{review.content} said {review.username} from {review.usercity} <button onClick={()=>deleteReview(review.id)}>Delete review</button></li>
// }else{
//     return <li>{review.content} said {review.username} from {review.usercity}</li>
// }
// })

const movieReviews = movie.reviews.map((review) => {
    if (user.id === review.user_id) {
      return (
        <li key={review.id}>
          {review.content} said {review.username} from {review.usercity}{" "}
          <button onClick={() => deleteReview(review.id)}>Delete review</button>
        </li>
      );
    } else {
      return (
        <li key={review.id}>
          {review.content} said {review.username && `by ${review.username}`}{" "}
          {review.usercity && `from ${review.usercity}`}
        </li>
      );
    }
  });

    return(
        <div> <header key={movie.id}> 
           
                <h1>{movie.title}</h1>
                <h2>{movie.director}</h2>
                <h3>{movie.genre}</h3>
                </header>
                  What did the people have to say?
                  <ul className="reviewBlock">
                {movieReviews}
               </ul>
               <form onSubmit={addNewReview}>
                <ul>
                <label>What did you think??</label>
                <input type="text" name="content" value={newReviewContent.content} onChange={handleReviewFormChange}></input>
                </ul>
                <input type="submit" value="submit"></input>
               </form>
        </div>


    )
}


export default InsiderInfo