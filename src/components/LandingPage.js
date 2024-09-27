// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './LandingPage.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// Importing images for services
import plumbingImage from '../assets/plumbing.jpeg';
import electricianImage from '../assets/electrician.jpeg';
import electronicImage from '../assets/electronic.webp';
import carpentryImage from '../assets/carpentry.jpg';

const LandingPage = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of images to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
  };

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

      {/* Service Slider Section */}
      <section className="service-slider">
        <h3>Our Services</h3>
        <Slider {...settings}>
          <div className="service-slide">
            <img src={plumbingImage} alt="Plumbing Service" className="service-image" />
            <h4>Plumbing</h4>
          </div>
          <div className="service-slide">
            <img src={carpentryImage} alt="Carpentry Service" className="service-image" />
            <h4>Carpentry</h4>
          </div>
          <div className="service-slide">
            <img src={electricianImage} alt="Electrician Service" className="service-image" />
            <h4>Electrician</h4>
          </div>
          <div className="service-slide">
            <img src={electronicImage} alt="Electronics Repair Service" className="service-image" />
            <h4>Electronics Repair</h4>
          </div>
        </Slider>
      </section>

      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <h4>For Customers</h4>
            <ol>
              <li>Search for services in your area.</li>
              <li>Book a service that fits your needs.</li>
              <li>Enjoy quick and reliable home repairs.</li>
            </ol>
          </div>
          <div className="step">
            <h4>For Service Providers</h4>
            <ol>
              <li>Register on our platform.</li>
              <li>List your services and availability.</li>
              <li>Start receiving job requests from local customers.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="signup-encouragement">
        <h3>Service Providers: Join Us!</h3>
        <p>Start getting jobs now and grow your business.</p>
        <Link to="/join" className="cta-button">Start Getting Jobs Now</Link>
      </section>

      <section className="testimonials">
        <h3>What Our Users Say</h3>
        <div className="testimonial">
          <h4>Customer Testimonials</h4>
          <p>"Home Revive helped me find a plumber quickly!"</p>
        </div>
        <div className="testimonial">
          <h4>Provider Testimonials</h4>
          <p>"This platform has increased my client base significantly!"</p>
        </div>
      </section>

      <footer>
        <div className="footer-links">
          <Link to="/faqs/customers">FAQs for Customers</Link>
          <Link to="/faqs/providers">FAQs for Providers</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;