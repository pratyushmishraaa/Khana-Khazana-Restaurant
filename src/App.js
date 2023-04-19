import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Service from "./components/Service";
import About from "./components/About";
import Booking from "./components/Booking";
import Signup from "./components/Signup";
// import Checkout from "./components/Checkout";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



export default function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />         
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* <Route exact path="/checkout" element={<Checkout />} /> */}
          
          
        </Routes>
       
      </div>
    </Router>
  );
}

