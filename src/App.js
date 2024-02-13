import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/vans/Van'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import VanDetail from './pages/vans/VansDetail';
import Layout from './component/Layout';
import AuthRequired from './component/AuthRequired';
import Dashboard from './pages/host/DashBoard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVansDetail from './pages/host/HostVansDetail';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import NotFound from './pages/NotFound';
import Login from './pages/Login';



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
              <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />} > 
              <Route index element={<Dashboard />} /> 
              <Route path="income" element={<Income />} /> 
              <Route path="reviews" element={<Reviews />} /> 
              <Route path="vans" element={<HostVans />} /> 
              <Route path="vans/:id" element={<HostVansDetail />} >
                <Route index  element={<HostVanInfo />}/>
                <Route path="pricing" element={<HostVanPricing/>} />
                <Route path="photos" element={<HostVanPhotos/>} />
              </Route>
              </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>   
   </Router>

    </div>
  );
}

export default App;
