import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";
import logo from "../Assets/Tasty-withoutbg.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Tasty Threads Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Use Link to navigate to home */}
          </li>
          <li>
            <Link to="/RecipeListPage">Recipe List Page</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/#about-us-section">About Us</Link>{" "}
            {/* Link with hash to scroll to the section */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
