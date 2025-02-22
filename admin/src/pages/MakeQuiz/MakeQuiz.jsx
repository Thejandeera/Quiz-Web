import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MakeQuiz.css";

const MakeQuiz = () => {
  const [formData, setFormData] = useState({
    category: "",
    numQ: "",
    title: ""
  });

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, numQ, title } = formData;
    try {
      const response = await axios.post(`http://localhost:8080/Quiz/create?category=${category}&numQ=${numQ}&title=${title}`);
      if (response.status === 200) {
        toast.success("Quiz created successfully!");
        setFormData({ category: "", numQ: "", title: "" });
      } else {
        toast.error("Failed to create quiz.");
      }
    } catch (error) {
      toast.error("Error creating quiz.");
    }
  };

  return (
    <div className="make-quiz-container">
      <h2>Create a New Quiz</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input type="number" name="numQ" placeholder="Number of Questions" value={formData.numQ} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Quiz Title" value={formData.title} onChange={handleChange} required />
        <button type="submit" className="submit-btn" disabled={!isFormValid}>Create Quiz</button>
      </form>
    </div>
  );
};

export default MakeQuiz;
