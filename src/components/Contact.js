import React from 'react'
import "../stylesheets/Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
    <h1 className='contact-heading'>Get <span>In Touch</span> </h1>

    <div className='contact-content'>
    <div className='cards'>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <i class="fa-solid fa-clock fa-2x"></i><br />
        <p className="title">Tap me to view Timing : </p><br />
        
        
        </div>
        <div className="flip-card-back">
        <p className="title">Monday to Sunday </p><br />
             <p className="title">10:00 AM - 10:00 PM </p><br />
             <p className="title">Thursday Closed </p><br />
            
        </div>
    </div>
</div>


    </div>
    <div className='cards'>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <i class="fa-solid fa-location-dot fa-2x"></i><br />
        <p className="title">Tap me to view Address : </p><br />

        </div>
        <div className="flip-card-back"><br />
            <p className="title">Veer Kunwar Singh Colony,Charitravan Buxar,Bihar <br />802101</p><br />
            
        </div>
    </div>
</div>


    </div>
    <div className='cards'>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <i class="fa-solid fa-phone fa-2x"></i><br />
        <p className="title">Tap me to view Phone Number : </p><br />
        </div>
        <div className="flip-card-back"><br />
            <p className="title">+91-7488680768</p><br />
            
        </div>
    </div>
</div>


    </div>
    
    <div className='cards'>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front"><br />
        <i class="fa-solid fa-envelope fa-2x"></i><br />
        <p className="title">Tap me to view Email-Id : </p><br />

        </div>
        <div className="flip-card-back">
            <p className="title"><a href="mailto:pratyushmishra287@gmail.com" target="_blank">pratyushmishra <br /> 287@gmail.com</a></p><br />
            
        </div>
    </div>
</div>


    </div>
    </div>
    
</div>

  )
}

export default Contact;