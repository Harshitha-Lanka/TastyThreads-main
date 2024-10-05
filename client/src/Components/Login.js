// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import './login.css'; // Import CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Create a navigate instance
  const navigate = useNavigate();

  return (
    <div className="loginpage">
      <div className="border">
        <h2 className="text-primary text-center headerlog">Login Form</h2>

        <div>
          <input
            type="email"
            className="formcontrol"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            className="formcontrol"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="remember-section">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="remember">Remember Me</label>
        </div>

        <div className="forgot">
          Lost Your Password? <a href="#">Click Here!</a>
        </div>

        <div>
          <button
            className="button1"
            onClick={() => {
              console.log("email:", email);
              console.log("password:", password);
            }}
          >
            Login
          </button>
        </div>

        <div>
          <button
            className="button1"
            onClick={() => {
              navigate('/signup'); // Navigate to the signup page when clicked
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
