// src/components/ProviderLoginSignup.js
import React, { useState } from 'react';
import './LoginSignup.css';

const ProviderLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="form-container">
      <h1>{isLogin ? "Provider Login" : "Provider Signup"}</h1>
      <form>
        <input type="text" placeholder="Name" required={!isLogin} />
        <input type="text" placeholder="Surname" required={!isLogin} />
        <input type="text" placeholder="Phone Number" required />
        <input type="password" placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" placeholder="Area" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Pincode" required />
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="Aadhar Card Number" required />
            <select required>
              <option value="">Select Services</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrician">Electrician</option>
              <option value="electronicRepair">Electronic Repair</option>
              <option value="carpentry">Carpentry</option>
            </select>
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

export default ProviderLoginSignup;
