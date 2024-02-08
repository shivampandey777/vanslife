import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Van from './Van'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import VanDetail from './VansDetail';


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
          <Route path="/Vans" element={<Van />} /> 
          <Route path="/Vans/:id" element={<VanDetail />} /> 
        </Routes>
        <footer>
          <h1 className='foot'>Ⓒ2022 #VANLIFE</h1>
        </footer>
   </Router>

    </div>
  );
}

export default App;
