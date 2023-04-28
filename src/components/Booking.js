
import React, { useState } from 'react';
import axios from 'axios';
import "../stylesheets/Booking.css";

function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number');
      return;
    }

    try {
      await axios.post('http://localhost:4000/App', {
        name,
        email,
        mobile,
        date,
        time,
        paymentMode
      });
      alert('Form submitted successfully');
      setName('');
      setEmail('');
      setMobile('');
      setDate('');
      setTime('');
      setPaymentMode('');
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <div>
    <div className="booking-heading">

      <h1>Book  <span>Your Slot</span>  </h1>
    </div>
      <form className="Booking" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
        </div>
        <div className='booking-time'>
          <label >Time Slot: </label>
          <select value={time} onChange={(event) => setTime(event.target.value)} required>
            <option value="">-- Select --</option>
            <option value="10am-12pm">10am-12pm</option>
            <option value="12pm-2pm">12pm-2pm</option>
            <option value="2pm-4pm">2pm-4pm</option>
            <option value="4pm-6pm">4pm-6pm</option>
            <option value="6pm-8pm">6pm-8pm</option>
            <option value="8pm-10pm">8pm-10pm</option>
          </select>
        </div>
        <div className='booking-payment'>
          <label>Payment Mode: </label>
          <select value={paymentMode} onChange={(event) => setPaymentMode(event.target.value)} required>
            <option value="">-- Select --</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Booking;
