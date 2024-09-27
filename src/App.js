// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LandingPage from './components/LandingPage';
//import LoginSignup from './components/LoginSignup';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoleSelection from './components/RoleSelection';
import CustomerLoginSignup from './components/CustomerLoginSignup';
import ProviderLoginSignup from './components/ProviderLoginSignup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-signup" component={RoleSelection} />
        <Route path="/customer-login-signup" component={CustomerLoginSignup} />
        <Route path="/provider-login-signup" component={ProviderLoginSignup} />
      </Routes>
    </Router>
  );
}

export default App;