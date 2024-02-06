import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
        <header>
            <Link className="homeLink" to="/">#VANLIFE</Link>
          <nav>
            <Link className="aboutLink" to="/About">About</Link>
            <Link className="vansLink" to="/Vans">Vans</Link>
          </nav>
        </header>       
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} /> 
        </Routes>
        <footer>
          <h1 className='foot'>Ⓒ2022 #VANLIFE</h1>
        </footer>
   </Router>

    </div>
  );
}

export default App;
