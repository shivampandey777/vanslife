import React  from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {    
    return (
        <div className="notfound">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <NavLink to="/">
            <button > Return to home </button>
            </NavLink>
            
        </div>
    )
}