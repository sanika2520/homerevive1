// src/components/RoleSelection.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const RoleSelection = () => {
  const history = useHistory();

  const handleSelection = (role) => {
    history.push(`/${role}-login-signup`);
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
