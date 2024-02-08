import React from "react";
// import background from './homepage.png';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div  className="home" >
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className="find-btn" to='/Vans' >Find your van</Link>
        </div>
    );
}