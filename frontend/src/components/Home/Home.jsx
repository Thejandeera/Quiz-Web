import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <NavigationBar />
      <div className="features-container">
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>🌟 Track Your Progress</h3>
          <p>Monitor your quiz history and see how much you've improved.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>🧠 Diverse Categories</h3>
          <p>Choose from a variety of subjects and challenge yourself.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>🏆 Compete with Friends</h3>
          <p>Challenge your friends and climb the leaderboard!</p>
        </motion.div>
      </div>

      <div className="home-container">
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Welcome to BrainBoost!</h1>
          <p className="hero-subtitle">
            Explore fun and challenging quizzes tailored for your knowledge level.
          </p>
          <motion.button
            className="start-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/quiz")}
          >
            Take a Quiz
          </motion.button>
        </motion.div>
      </div>

      {/* Feature Section */}
      
    </div>
  );
};

export default Home;
