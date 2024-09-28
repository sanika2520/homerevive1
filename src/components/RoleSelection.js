// src/components/RoleSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    navigate(`/${role}-login-signup`);
  };

  return (
    <div className="form-container">
      <h1>Select Your Role</h1>
      <button onClick={() => handleSelection('customer')}>Customer</button>
      <button onClick={() => handleSelection('provider')}>Service Provider</button>
    </div>
  );
};

export default RoleSelection;
