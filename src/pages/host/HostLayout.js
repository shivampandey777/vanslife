import React from "react";
import { NavLink ,Outlet } from "react-router-dom";

export default function HostLayout() {

    return (
        <>
        <nav  className="host-nav">
         <NavLink 
           className={({ isActive }) => isActive ? "my-nav" : null}
           end
           to="/host">
            Dashboard
         </NavLink>
         <NavLink 
            style={({ isActive }) => isActive ? "my-nav" : null}
            to="/host/income">
            Income
         </NavLink>
         <NavLink 
            style={({ isActive }) => isActive ? "my-nav" : null}
            to="/host/reviews">
             Reviews
         </NavLink>
        </nav>
          <Outlet />
        </>
    )}