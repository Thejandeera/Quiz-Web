import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      const data = response.data; // Assuming backend returns the JWT token as a plain string
      const token = data.token;

      // Check if token is valid and save it in sessionStorage
      if (token) {
        sessionStorage.setItem("token", token);
        navigate("/home"); // Redirect to home after successful login
        alert("Loged in")
      } else {
        alert("Login failed: Invalid Credentials.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={credentials.email} 
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={credentials.password} 
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
