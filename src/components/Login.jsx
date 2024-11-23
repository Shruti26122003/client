import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import "/src/styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      alert("Welcome, " + res.data.user.username);
      navigate("/"); // Replace '/home' with the actual route for your home page
    } catch (error) {
      console.error("Login error:", error.response || error.message); // Debugging
      setErrorMessage(error.response?.data?.error || "Something went wrong!");
    }
  };
  

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
