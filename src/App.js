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
import HostLayout from './pages/host/HostLayout';


function App() {
  return (
    <div>
    <Router>
         <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} /> 
              <Route path="Vans" element={<Van />} /> 
              <Route path="Vans/:id" element={<VanDetail />} /> 

              <Route path="host" element={<HostLayout />} > 
              <Route index element={<Dashboard />} /> 
              <Route path="income" element={<Income />} /> 
              <Route path="reviews" element={<Reviews />} /> 
              </Route>
          </Route>
        </Routes>   
   </Router>

    </div>
  );
}

export default App;
