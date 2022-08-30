import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const confirm = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (confirm.current.value !== password) {
      confirm.current.setCustomValidity("Passwords don't match!");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username,
            email,
            password,
          }
        );
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
        />
        <label>Confirm Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="confirm your password..."
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength="6"
          ref={confirm}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton" type="submit">
        <Link to="/login">Login</Link>
      </button>
      {error && <span className="alertError">Something went wrong!</span>}
    </div>
  );
};

export default Register;
