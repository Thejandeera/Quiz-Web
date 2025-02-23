import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Category.css";
import NavigationBar from "../../components/Navbar/NavigationBar";

const Category = () => {
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const fetchQuestions = async () => {
    if (!category.trim()) {
      toast.error("Please enter a category!");
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/question/category/${category}`);
      if (response.status === 200 && response.data.length > 0) {
        setQuestions(response.data);
        setCurrentIndex(0);
        setSelectedOption(null);
        toast.success("Questions loaded successfully!");
      } else {
        toast.error("No questions found for this category!");
      }
    } catch (error) {
      toast.error("Error fetching questions.");
    }
  };

  const handleFinishQuiz = () => {
    console.log("User Answers:", selectedOption);
    navigate("/landing");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  };

  return (
    <>
    <NavigationBar/>
    <div className="category-container">
      <h2>Enter Category</h2>
      <input type="text" value={category} onChange={handleCategoryChange} placeholder="Enter category" className="category-input" />
      <button onClick={fetchQuestions} className="fetch-btn">Load Questions</button>
      
      {questions.length > 0 && (
        <div className="question-card">
          <h3>{questions[currentIndex].questionTitle}</h3>
          <div className="options">
            {["option1", "option2", "option3", "option4"].map((opt) => (
              <button 
                key={opt} 
                className={`option-btn ${selectedOption === opt ? "selected" : ""}`} 
                onClick={() => handleOptionSelect(opt)}
              >
                {questions[currentIndex][opt]}
              </button>
            ))}
          </div>
          <div className="navigation">
            {currentIndex < questions.length - 1 ? (
              <button onClick={nextQuestion} className="next-btn" disabled={!selectedOption}>
                Next
              </button>
            ) : (
              <button onClick={handleFinishQuiz} className="finish-btn" disabled={!selectedOption}>
                Finish
              </button>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Category;