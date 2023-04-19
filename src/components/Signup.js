import React from 'react';
import "../stylesheets/Signup.css";

const Signup = () => {

return (
<>
<div className="container">
<input id="signup_toggle" type="checkbox"></input>
<form className="form">
<div className="form_front">
<div className="form_details">Login</div>

<input type="text" className="input" placeholder="Username"></input>
<input type="text" className="input" placeholder="Password"></input>
<button className="btn">Login</button>
<span className="switch">Don't have an account?
<label htmlFor="signup_toggle" className="signup_tog">
Sign Up
</label>
</span>
</div>
<div className="form_back">
<div className="form_details">SignUp</div>
<input type="text" className="input" placeholder="Firstname"></input>
<input type="text" className="input" placeholder="Username"></input>
<input type="text" className="input" placeholder="Password"></input>
<input type="text" className="input" placeholder="Confirm Password"></input>
<button className="btn">Signup</button>
<span className="switch">Already have an account?
 <label htmlFor="signup_toggle" class="signup_tog">
Sign In
</label>
</span>
</div>
</form>
</div>


</>
)
}

export default Signup;