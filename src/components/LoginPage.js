import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/LoginPage.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" || password === "kohli") {
      // alert("Please enter both username and password.");
      // return;
      alert("You have successfully logged in!");

      navigate("/");
    }
    else{
      alert("invalid username");
    }

    // TODO: authenticate user with backend
   

   
  };

  return (
   <>
      <h1 className="login-heading">Login <span>To Khana Khazana</span> </h1>
     <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input className="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
