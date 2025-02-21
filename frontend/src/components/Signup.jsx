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
      await axios.post("http://localhost:8080/api/auth/signup", user);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
