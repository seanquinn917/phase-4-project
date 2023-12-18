import React from "react";
import MovieList from "./MovieList";
import { json, useParams } from "react-router-dom";
import { useState } from "react";



function InsiderInfo({movies, setMovies}){

   


const {id}=useParams()
const[newReviewContent, setNewReviewContent]=useState({
    content:"",
    name:"",
    city:"",
    movie_id :id
})

const movie = movies.find(movie=>movie.id===parseInt(id))


    function addNewReview(e){
        e.preventDefault()
        fetch('/reviews',{
            method: "POST",
            headers:{
                "content-type":"application/JSON"
            },
            body:JSON.stringify({
                content:newReviewContent.content,
                name:newReviewContent.name,
                city:newReviewContent.city,
                movie_id: id
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
    // const user= movies.users.map((user)=>{
    //     console.log(user)
    // })
    // }
   
   const reviews= movie.reviews.map((review)=>{
    const user = movie.users.find((user) => user.id === review.user_id);
    console.log(user)
    return <ul>{review.content} said {user.name} from {user.city}</ul>
   })

    return(
        <div key={movie.id}>
            <ul>
                {movie.title}
                {movie.director}
                {movie.genre}

                  What did the people have to say?
                {reviews}
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