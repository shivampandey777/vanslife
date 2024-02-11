import React from "react";
import { NavLink , Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header>
                <Link className="homeLink" to="/">#VANLIFE</Link>
                <nav className="home-navbar">
                    <NavLink 
                     className={({isActive}) => isActive ? "my-nav" :"aboutLink"}
                     to="/host">
                        Host
                    </NavLink>
                    <NavLink 
                     className={({isActive}) => isActive ? "my-nav" :"aboutLink"}
                     to="/About">
                        About
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => isActive ? "my-nav" :"vansLink"} 
                    to="/Vans">
                        Vans
                    </NavLink>
                </nav>
            </header>
        </div>
    );
}