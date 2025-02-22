import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <img className="sidebar-icon" alt="" src={assets.add_icon} />
          <p className="sidebar-text">Add Questions</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/makequiz">
          <img className="sidebar-icon" alt="" src={assets.makeicon} />
          <p className="sidebar-text">Make Quizzes</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/sscore">
          <img className="sidebar-icon" alt="" src={assets.scoreicon} />
          <p className="sidebar-text">Students Scores</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/delete">
          <img className="sidebar-icon" alt="" src={assets.deleteicon} />
          <p className="sidebar-text">Delete Questions</p>
        </NavLink>
        
      </div>
      <div className="nav-icons">
        
        <img 
          src="/icons/logout.png" 
          alt="Logout" 
          className="icon" 
          onClick={() => navigate("/logout")}
        />
      </div>
    </div>
  );
};

export default SideBar;