// LoginSignup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Adjust the path as necessary
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const username = isLogin ? undefined : e.target[2]?.value;

    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful');
      } else {
        // Signup
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={handleSubmit}>
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
