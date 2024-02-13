import React from "react";
import { NavLink , Link } from "react-router-dom";
import logo from "./avatar-icon.svg";

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
                    <Link to="login" className="login-link">
                    <img 
                        src={logo}
                        className="login-icon"
                    />
                    </Link>
                </nav>
            </header>
        </div>
    );
}