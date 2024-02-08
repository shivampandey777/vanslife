import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header>
                <Link className="homeLink" to="/">#VANLIFE</Link>
                <nav>
                    <Link className="aboutLink" to="/host">Host</Link>
                    <Link className="aboutLink" to="/About">About</Link>
                    <Link className="vansLink" to="/Vans">Vans</Link>
                </nav>
            </header>
        </div>
    );
}