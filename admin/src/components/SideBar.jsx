import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import './SideBar.css'; // Import the external CSS file

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <img className="sidebar-icon" alt="" src={assets.add_icon} />
          <p className="sidebar-text">Add Questions</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/makequiz">
          <img className="sidebar-icon" alt="" src={assets.order_icon} />
          <p className="sidebar-text">Make Quizes</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/sscore">
          <img className="sidebar-icon" alt="" src={assets.order_icon} />
          <p className="sidebar-text">Students Scores</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
