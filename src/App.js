// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoleSelection from './components/RoleSelection';
import CustomerLoginSignup from './components/CustomerLoginSignup';
import ProviderLoginSignup from './components/ProviderLoginSignup';
import AddData from './AddData';
import GetData from './GetData';
import UserDetails from './components/UserDetails'; // Import UserDetails
import ProviderDetails from './components/ProviderDetails'; // Import ProviderDetails
import CustomerDashboard from './components/CustomerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-signup" element={<RoleSelection />} />
        <Route path="/customer-login-signup" element={<CustomerLoginSignup />} />
        <Route path="/provider-login-signup" element={<ProviderLoginSignup />} />
        <Route path="/user/:userId" element={<UserDetails />} /> {/* User Details Route */}
        <Route path="/provider/:providerId" element={<ProviderDetails />} /> {/* Provider Details Route */}
        <Route path="/add-data" element={<AddData />} />
        <Route path="/get-data" element={<GetData />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;