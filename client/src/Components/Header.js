import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../Assets/Tasty-withoutbg.png";
import avatar from "../Assets/avatar2.jpg"; // Import the avatar image

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/RecipeListPage">Recipe List</Link>
          </li>
          <li>
            <Link to="/#about-us-section">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="profile-section">
        {isLoggedIn ? (
          <div className="profile-menu">
            <img
              src={avatar} // Use the static avatar image
              alt="User Avatar"
              className="profile-avatar"
              onClick={handleLogout} // Add dropdown logic here for advanced functionality
            />
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
