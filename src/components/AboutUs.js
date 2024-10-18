// src/components/AboutUs.js

import React from 'react';
import { Link } from 'react-router-dom';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header */}
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
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to Home Revive, where we connect talented service providers with clients looking for quality services.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower freelancers and service providers by providing a platform that allows them to showcase their skills, connect with clients, and grow their businesses, providing employment to locals.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a marketplace where every service provider has the opportunity to thrive, and every client can find the perfect match for their needs quickly.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Vetted Service Providers: We ensure that all our service providers meet high-quality standards.</li>
          <li>User-Friendly Interface: Our platform is designed to make the service hiring process seamless and straightforward.</li>
          <li>Secure Transactions: We prioritize your security and provide safe payment options.</li>
        </ul>
        <h2>Join Us</h2>
        <p>
          Whether you're a service provider or looking for a service, join us today and be a part of our growing community!
        </p>
      </main>

      {/* Footer */}
      <footer>

        <div className="footer-links">
          <Link to="/FAQSCustomers">FAQs for Customers</Link>
          <Link to="/FAQSProviders">FAQs for Providers</Link>
          <Link to="/Terms">Terms of Service</Link>
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

