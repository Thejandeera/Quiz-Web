import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';

const SignUp = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", user);
      
      if (response.data === "User registered successfully!") {
        navigate("/login");
      } else {
        alert(response.data || "Signup failed");
      }
    } catch (error) {
      if (error.response?.data === "Email already exists!") {
        alert(error.response.data); // Alert if the email already exists
      } else {
        alert(error.response?.data || "Signup failed");
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
