// src/components/AllQuestions/AllQuestions.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllQuestions.css";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  // Fetch all questions from the API
  useEffect(() => {
    axios
      .get("http://localhost:8080/question/allQuestions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleSelectAnswer = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleFinishQuiz = () => {
    console.log("User Answers:", selectedAnswers);
    navigate("/home");
  };

  if (questions.length === 0) {
    return <div className="loading">Loading Questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>{currentQuestion.questionTitle}</h2>
        <div className="options">
          {[currentQuestion.option1, currentQuestion.option2, currentQuestion.option3, currentQuestion.option4].map(
            (option, index) => (
              <button
                key={index}
                className={selectedAnswers[currentQuestionIndex] === option ? "selected" : ""}
                onClick={() => handleSelectAnswer(option)}
              >
                {option}
              </button>
            )
          )}
        </div>
        <div className="quiz-actions">
          {!isLastQuestion ? (
            <button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
              Next
            </button>
          ) : (
            <button onClick={handleFinishQuiz} className="finish-btn" disabled={!isAnswerSelected}>
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
