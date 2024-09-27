// src/components/LoginSignup.js
import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {!isLogin && <input type="text" placeholder="Username" required />}
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginSignup;