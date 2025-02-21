import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="logout-overlay">
      <div className="logout-box">
        <h2>Really want to logout?</h2>
        <div className="buttons">
          <button className="yes-btn" onClick={handleLogout}>Yes</button>
          <button className="no-btn" onClick={() => navigate("/home")}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
