import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import logo from '../Assets/Tasty-withoutbg.png';

function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <Link to="/">
            <img src={logo} alt="Tasty Threads Logo" className="footer-logo" />
          </Link>
          <p>
            Join our culinary community and explore a world of flavors. Share
            your recipes and connect with fellow food lovers!
          </p>
          <div className="footer-links">
            {/* Using Link for navigation */}
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/RecipeListPage" className="footer-link">Recipe List</Link>
            <Link to="/login" className="footer-link">Login</Link>
            <Link to="/#about-us-section" className="footer-link">About Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
