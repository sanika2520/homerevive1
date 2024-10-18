// src/components/TermsOfService.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Reuse the same CSS for consistent styling
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const TermsOfService = () => {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <div className="description">
            <h1>Home Revive</h1>
            <p>Connecting Local Professionals with Customers for Fast and Reliable Home Repairs</p>
          </div>
        </div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Contact</Link>
          <Link to="/join" className="nav-link">About Us</Link>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      <section className="terms-of-service-content">
        <h2>Terms of Service</h2>
        <p>Welcome to Home Revive. By using our platform, you agree to comply with the following terms of service:</p>
        <h3>1. User Responsibilities</h3>
        <p>All users must provide accurate and truthful information during the registration process.</p>
        <h3>2. Service Provider Responsibilities</h3>
        <p>Service providers must ensure the quality of their work and maintain professionalism with customers.</p>
        <h3>3. Payments</h3>
        <p>All payments for services must be made through the platform unless otherwise agreed between the parties.</p>
        <h3>4. Termination of Account</h3>
        <p>Home Revive reserves the right to terminate any user’s account for violating these terms.</p>
        <h3>5. Liability</h3>
        <p>Home Revive is not responsible for any disputes between users and service providers.</p>
        <h3>6. Updates to Terms</h3>
        <p>These terms may be updated from time to time. It is the user's responsibility to review them regularly.</p>
      </section>

      <footer>
        <div className="footer-links">
          <Link to="/fAQSCustomers">FAQs for Customers</Link>
          <Link to="/FAQsProviders">FAQs for Providers</Link>
          <Link to="/Terms">Terms of Service</Link> 
          <Link to="/Privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;