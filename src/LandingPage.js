// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="navbar">
        <h1 className="site-name">Service Marketplace</h1>
        <nav>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      <section className="landing-info">
        <h2>Welcome to the Service Marketplace</h2>
        <p>Find trusted local professionals for all your home service needs. Whether it's plumbing, carpentry, electronics repair, or electrical work, we connect you with skilled experts in your area.</p>
      </section>

      <section className="scrollable-content">
        <h3>Why Choose Us?</h3>
        <p>Quick, reliable, and professional services tailored to your needs.</p>
        <p>We support local employment by connecting you with local professionals.</p>
        <p>Our services ensure quality and customer satisfaction.</p>
      </section>
    </div>
  );
}

export default LandingPage;