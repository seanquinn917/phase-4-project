import React from "react";



function MovieTile({id, title, director, genre}){



    return( 
        <div>
            <h1>{title}</h1>
            <li>{director}</li>
            <li>{genre}</li>
        </div>
    )
};


export default MovieTile