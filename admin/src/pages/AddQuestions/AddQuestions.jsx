import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddQuestions.css";

const AddQuestions = () => {
  const [formData, setFormData] = useState({
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
    difficultyLevel: "",
    category: ""
  });

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/question/add", formData);
      if (response.data === "Successfully added question") {
        toast.success("Question added successfully!");
        setFormData({
          questionTitle: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          rightAnswer: "",
          difficultyLevel: "",
          category: ""
        });
      } else {
        toast.error("Failed to add question.");
      }
    } catch (error) {
      toast.error("Error submitting question.");
    }
  };

  return (
    <div className="add-question-container">
      <h2>Add New Question</h2>
      <form onSubmit={handleSubmit} className="question-form">
        <textarea name="questionTitle" placeholder="Enter question title" value={formData.questionTitle} onChange={handleChange} required />
        <input type="text" name="option1" placeholder="Option 1" value={formData.option1} onChange={handleChange} required />
        <input type="text" name="option2" placeholder="Option 2" value={formData.option2} onChange={handleChange} required />
        <input type="text" name="option3" placeholder="Option 3" value={formData.option3} onChange={handleChange} required />
        <input type="text" name="option4" placeholder="Option 4" value={formData.option4} onChange={handleChange} required />
        <input type="text" name="rightAnswer" placeholder="Correct Answer" value={formData.rightAnswer} onChange={handleChange} required />
        <input type="text" name="difficultyLevel" placeholder="Difficulty Level" value={formData.difficultyLevel} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <button type="submit" className="submit-btn" disabled={!isFormValid}>Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestions;