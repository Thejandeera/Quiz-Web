import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout/Logout.jsx";
import Quiz from "./pages/Quiz.jsx";
import AllQuestions from "./pages/AllQuestions/AllQuestions.jsx";
import PopupQuestion from "./components/PopupQuestion/PopupQuestion.jsx";  // Ensure this import is correct
import QuizPopup from "./components/QuizPopup/QuizPopup.jsx";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/all-questions" element={<AllQuestions />} />
          <Route path="/question-popup" element={<PopupQuestion />} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
