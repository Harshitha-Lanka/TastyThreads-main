import React from 'react'
import  './Signup.css'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
   


  
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p>Sign up with your email and password or continue with social media.</p>

        {/* Email and Password Form */}
        <form>
          <input type="text" placeholder="Full Name" className="form-input" required />
          <input type="email" placeholder="Email" className="form-input" required />
          <input type="password" placeholder="Password" className="form-input" required />
          <input type="password" placeholder=" Confirm Password" className="form-input" required />
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>

        <div className="divider">or</div>

        {/* Social Media Login Buttons */}
        <div className="social-login">
          <button className="btn-social google">
            <i className="fab fa-google"></i> Continue with Google
          </button>
          <button className="btn-social facebook">
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
          <button className="btn-social github">
            <i className="fab fa-github"></i> Continue with GitHub
          </button>
        </div>

        <p className="footer-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};



export default Signup