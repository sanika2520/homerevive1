// src/components/FAQsCustomers.js

import React from 'react';
import { Link } from 'react-router-dom';
// import './FAQs.css';

const FAQsCustomers = () => {
  return (
    <div className="faqs-container">
      <header className="navbar">
        <div className="logo-container">
          <h1>Home Revive</h1>
        </div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Contact</Link>
          <Link to="/join" className="nav-link">About Us</Link>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      <section className="faq-content">
        <h2>FAQs for Customers</h2>
        <div className="faq-item">
          <h3>How do I book a service?</h3>
          <p>You can book a service by searching for the service provider in your area and clicking the 'Book Now' button next to the provider you want.</p>
        </div>
        <div className="faq-item">
          <h3>What services are available?</h3>
          <p>We provide a variety of home repair services including plumbing, carpentry, electrical work, and electronics repair.</p>
        </div>
        <div className="faq-item">
          <h3>Can I cancel a booking?</h3>
          <p>Yes, you can cancel a booking from your account dashboard before the service provider has confirmed the job.</p>
        </div>
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

export default FAQsCustomers;