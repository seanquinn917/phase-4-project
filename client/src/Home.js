import React from "react";
import { Link } from "react-router-dom";



function Home(){



    return(

        <div>Welcome to my home page
        <Link to={'/login'}> click here to Login</Link>
        
        </div>
    )
};


export default Home