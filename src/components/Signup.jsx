import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/styles/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ username, email, password }); // Debugging
    axios
      .post("http://localhost:5000/api/register", {
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result.data); // Debugging
        if (result.data.message === "User registered successfully") {
          navigate("/Login");
        }
      })
      .catch((err) => {
        console.error(err.response?.data || err.message); // Debugging
      });
  };

  return (
    <>
      {/* Add title directly */}
      <h1 className="signup-title"> Hello, Good Morning!</h1>

      {/* Signup form */}
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
