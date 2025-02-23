import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <img src="/stars.png" alt="Stars" className="stars-image" />
      <div className="landing-card">
        <h2>Quiz Completed!</h2>
        <p>Great job! You've successfully finished the quiz.</p>
        <button onClick={() => navigate("/home")} className="home-btn">Go to Home</button>
      </div>
    </div>
  );
};

export default Landing;
