import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import "./PopupQuestion.css";  // Import the CSS for styling
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "../Navbar/NavigationBar";

const PopupQuestion = () => {
  const id = "400890";
  const [key, setKey] = useState("");  // Define the state for key
  const [error, setError] = useState("");  // Error state to display error message
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (key === id) {
      console.log(id)
      console.log(key)
      toast.success("Getting into All Questions ")
      navigate("/all-questions");  // Navigate to /all-questions on correct key
    } else {
      console.log(id)
      console.log(key)
      toast.error("Invalid Key");  // Set error message if key is incorrect
    }
  };

  return (<>
    <NavigationBar />
    <div className="popup-container">
      <div className="popup-card">
        <h2>Enter Access Key</h2>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="key-input"
          placeholder="Enter 6-digit key"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
        {error && <div className="error">{error}</div>}  {/* Display error message */}
      </div>
    </div>
  </>
  );
};

export default PopupQuestion;
