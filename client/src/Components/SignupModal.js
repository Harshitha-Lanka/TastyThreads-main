import React from "react";
import "./SignupModal.css"; // Ensure proper CSS is added
import { useNavigate } from "react-router-dom";

function SignupModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Join Tasty Threads</h2>
        <p>
          Sign up to explore the best recipes and share your own culinary
          journey.
        </p>
        <div className="modal-buttons">
          <button
            className="modal-btn"
            onClick={() => {
              navigate("/login");
              onClose();
            }}
          >
            Login
          </button>
          <button
            className="modal-btn modal-signup-btn"
            onClick={() => {
              navigate("/signup");
              onClose();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
