import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import AddQuestions from "./pages/AddQuestions/AddQuestions.jsx";
import Home from "./pages/Home/Home.jsx";
import MakeQuiz from "./pages/MakeQuiz/MakeQuiz.jsx";
import StudentsScore from "./pages/StudentsScore/StudentsScore.jsx";
import SideBar from "./components/SideBar.jsx";

const App = () => {
  return (
    <div>
      <ToastContainer />
      
      <Router>
      <SideBar/>
        <Routes>
          <Route path="/add" element={<AddQuestions />} />
          <Route path="/makequiz" element={<MakeQuiz />} />
          <Route path="/sscore" element={<StudentsScore />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
