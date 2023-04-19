import React from "react";
import "../stylesheets/Nav.css";
import { Link } from "react-router-dom";
import lg from '../images/logo.png';

export default function Nav() {

   return (
      <div className="navbar">
         <div className="logo">
         <img src={lg} alt="no logo found" />
         </div>

         <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/service">Services</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Signup</Link>
         </ul>


        
      </div>
   );

}