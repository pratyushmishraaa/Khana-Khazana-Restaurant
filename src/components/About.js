import React from 'react'
import "../stylesheets/About.css"
import abt1 from "../images/about-1.jpg";
const About = () => {
  return (
    <>
    <div className="About-container">
    <div className="head">
    About <span>Us</span> 
    </div>
    <div className="about-cafe">
    <div  className="cafe-intro">
     <br /> <br />
      Khana  Khazana is a charming cafe that is known for its delectable menu of mouth-watering dishes. The name "Khana Khazana" translates to "treasure trove of food" in Hindi, which perfectly encapsulates the experience you'll have when you visit this cafe.
From classic Indian dishes like biryani and butter chicken, to more contemporary offerings like avocado toast and smoothie bowls, there's something for everyone on the menu at Khana Khazana. And with friendly and attentive staff always on hand to assist with your dining needs, you can rest assured that your experience at this cafe will be nothing short of exceptional.
    </div>
    <div className="about-ka-pic">
      <img src={abt1} alt="" />
    </div>
    
    </div>
   
    

    </div>
    
    
    
    </>
  )
}

export default About