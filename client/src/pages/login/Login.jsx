import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from 'axios';
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch , isFetching } = useContext(Context);
  
  const loginHandler = async (e) => {
    e.preventDefault();
    
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login' , {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS" , payload: res.data})
      // window.location.replace('/')  //it is ok too
      window.location.reload()
    }
    catch(error) {
      dispatch({type: "LOGIN_FAILURE"})
      window.location.reload()
    }
  };
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={loginHandler}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          required 
          minLength="6"
          ref={passwordRef}
        />
        <button className="loginButton" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton" type="submit">
        <Link to="/register"> Register </Link>
      </button>
    </div>
  );
};

export default Login;
