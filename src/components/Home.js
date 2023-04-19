import React from 'react';
import "../stylesheets/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
    <div className="home-heading">
    <p className='heading-naam-1'>Khana 
     <span>Khazana</span>  </p>
    <p className='heading-naam-2'>Welcomes <span>You</span> </p>


    <Link to="/booking"><button className='home-btn'> Book your table now
</button></Link>
    <Link to="/about"><button className='home-about-btn'> About Us
</button></Link>
    
    </div>
      



    </div>
  )
}

export default Home;