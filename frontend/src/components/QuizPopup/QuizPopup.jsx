import { useState } from "react";
import "./QuizPopup.css";

const QuizPopup = ({ onSubmit }) => {
  const [quizId, setQuizId] = useState("");

  const handleStartQuiz = () => {
    if (quizId.trim()) {
      onSubmit(quizId);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Enter Quiz ID</h2>
        <input
          type="text"
          placeholder="Enter Quiz ID"
          value={quizId}
          onChange={(e) => setQuizId(e.target.value)}
        />
        <button onClick={handleStartQuiz} disabled={!quizId.trim()}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPopup;
