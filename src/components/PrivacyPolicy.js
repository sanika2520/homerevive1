// src/components/PrivacyPolicy.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Reuse the same CSS for consistent styling
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const PrivacyPolicy = () => {
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

      <section className="privacy-policy-content">
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and share your personal information.</p>
        <h3>1. Information We Collect</h3>
        <p>We collect personal information when you register on our platform or use our services, such as your name, email, and location.</p>
        <h3>2. How We Use Your Information</h3>
        <p>We use your information to provide services, process payments, and communicate with you regarding your bookings.</p>
        <h3>3. Sharing Your Information</h3>
        <p>We do not sell your personal information to third parties. However, we may share your data with service providers to fulfill your service requests.</p>
        <h3>4. Data Security</h3>
        <p>We implement various security measures to protect your personal information.</p>
        <h3>5. Your Rights</h3>
        <p>You can access, modify, or delete your personal information at any time by visiting your account settings.</p>
        <h3>6. Changes to This Policy</h3>
        <p>We may update this policy from time to time. Please review it periodically for any changes.</p>
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

export default PrivacyPolicy;