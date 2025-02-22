import React, { useState } from "react";
import axios from "axios";
import "./DeleteQuize.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteQuize = () => {
  const [id, setId] = useState("");
  const [quizId, setQuizId] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteQuestion = async () => {
    if (!id) {
      toast.error("Please enter a question ID.");
      return;
    }
    try {
        const response = await axios.delete(`http://localhost:8080/question/delete/${id}`);
        const dat = response.data; // Access the data property from the response
        toast.success(dat);
        setId("");
      } catch (error) {
        const errorMessage = error.response ? error.response.data : "An error occurred"; // Handle errors from the server
        toast.error(errorMessage);
      }
      
  };

  const handleDeleteQuiz = async () => {
    if (!quizId) {
      toast.error("Please enter a quiz ID.");
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/Quiz/delete/${quizId}`);
      toast.success("Quiz deleted successfully.");
      setQuizId("");
    } catch (error) {
      toast.error("Error deleting quiz.");
    }
  };

  return (
    <div className="delete-container">
      <div className="delete-section">
        <h2>Delete a Question</h2>
        <input
          type="text"
          placeholder="Enter the Question ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="delete-input"
        />
        <button onClick={handleDeleteQuestion} className="delete-button">
          Delete Question
        </button>
        {message && <p className="delete-message">{message}</p>}
      </div>
      <div className="delete-section">
        <h2>Delete a Quiz</h2>
        <input
          type="text"
          placeholder="Enter the Quiz ID"
          value={quizId}
          onChange={(e) => setQuizId(e.target.value)}
          className="delete-input"
        />
        <button onClick={handleDeleteQuiz} className="delete-button">
          Delete Quiz
        </button>
        {message && <p className="delete-message">{message}</p>}
      </div>
    </div>
  );
};

export default DeleteQuize;
