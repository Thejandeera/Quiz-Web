import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";


const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
      <img 
          src="/icons/logo4.png" 
          alt="Profile" 
          className="icon" 
          onClick={() => navigate("/home")}
        />
      </div>

      <ul className="nav-links">
        <li><Link to="/question-popup">All Questions</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/languages">Languages</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-icons">
        <img 
          src="/icons/account.png" 
          alt="Profile" 
          className="icon" 
          onClick={() => navigate("/profile")}
        />
        <img 
          src="/icons/logout.png" 
          alt="Logout" 
          className="icon" 
          onClick={() => navigate("/logout")}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
