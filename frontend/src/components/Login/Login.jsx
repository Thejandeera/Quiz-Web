import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      const data = response.data;
      const token = data.token;

      if (token) {
        sessionStorage.setItem("token", token);
        navigate("/home");
        toast.success("Logged in Successfully !")
      } else {
        toast.error("Login failed: Invalid Credentials.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="cont" >
      <div className="login-container">
        <div className="login-box">
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
          <p className="signup-link">Don't have an account? <span onClick={() => navigate("/signup")}>Sign up here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
