import React from 'react';
import "../stylesheets/Service.css"
import kursi from "../images/table.jpg";
import { Link } from "react-router-dom";
import delivery from "../images/take away food.jpg"
const Service = () => {
  return (
    <div className='service-container'>
    <h1>Services <span>We Provide</span> </h1>  

    <div className='facility-patti'>
    <div className="facility-ulta-patti">
    
    <div className="facility-ulta-patti-andar">

    
        <div className="facility-ulta-patti-aage">
        
        <img src={kursi} alt="" />
        
        <p className='book-table'>Book Your Table</p>
           
        </div>
        <div className="facility-ulta-patti-piche">
        <Link to="/booking">Get the seat you want</Link>
            
        </div>
    </div>
</div>
    <div className="facility-ulta-patti">
    <div className="facility-ulta-patti-andar">
        <div className="facility-ulta-patti-aage">
            <img src={delivery} alt="" />
            <p className='book-table'>Take your food</p>  

        </div>
        <div className="facility-ulta-patti-piche">
        <Link to="/menu">Choose the Food you want</Link>
            
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default Service