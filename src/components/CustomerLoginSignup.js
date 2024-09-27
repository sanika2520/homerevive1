// src/components/CustomerLoginSignup.js
import React, { useState } from 'react';
import './LoginSignup.css';

const CustomerLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="form-container">
      <h1>{isLogin ? "Customer Login" : "Customer Signup"}</h1>
      <form>
        <input type="text" placeholder="Name" required={!isLogin} />
        <input type="text" placeholder="Surname" required={!isLogin} />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" placeholder="Mobile Number" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Area" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Pincode" required />
            <input type="text" placeholder="State" required />
          </>
        )}
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default CustomerLoginSignup;
