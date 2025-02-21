import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      const token = response.data; // Assuming backend returns the JWT token as a plain string

      // Save token in session storage (temporary, expires on tab close)
      sessionStorage.setItem("token", token);

      navigate("/home"); // Redirect to home after login
    } catch (error) {
      alert(error.response?.data || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
