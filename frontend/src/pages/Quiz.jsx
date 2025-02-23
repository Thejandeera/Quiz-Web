import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuizPopup from "../components/QuizPopup/QuizPopup.jsx";
import "./Quiz.css";

const Quiz = () => {
  const [quizId, setQuizId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  // Fetch quiz data when quizId is set
  useEffect(() => {
    if (quizId) {
      axios
        .get(`http://localhost:8080/Quiz/get/${quizId}`)
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {
          console.error("Error fetching quiz:", error);
        });
    }
  }, [quizId]);

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
    navigate("/landing");
  };

  if (!quizId) {
    return <QuizPopup onSubmit={setQuizId} />;
  }

  if (questions.length === 0) {
    return <div className="loading">Loading Quiz...</div>;
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

export default Quiz;