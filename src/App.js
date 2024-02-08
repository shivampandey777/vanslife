import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/vans/Van'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import VanDetail from './pages/vans/VansDetail';
import Layout from './component/Layout';
import Dashboard from './pages/host/DashBoard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';





function App() {
  return (
    <div>
    <Router>
         <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} /> 
              <Route path="/Vans" element={<Van />} /> 
              <Route path="/Vans/:id" element={<VanDetail />} /> 
              <Route path="/host" element={<Dashboard />} /> 
              <Route path="/host/income" element={<Income />} /> 
              <Route path="/host/reviews" element={<Reviews />} /> 
          </Route>
        </Routes>   
   </Router>

    </div>
  );
}

export default App;
