// src/components/CustomerHomePage.js
import React, { useState, useRef, useEffect } from 'react';
import './CustomerHomePage.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import userProfile from '../assets/user-placeholder.png.webp'; // Import user profile image

const CustomerHomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to CustomerDashboard on button click
  const handleBookServiceClick = () => {
    navigate('/customer-dashboard'); // Redirect to Customer Dashboard
  };

  
  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to home on logout
  };


  return (
    <div className="customer-home-page">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={toggleProfileDropdown}>
          <img src={userProfile} alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Account Settings</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Section */}
      <div className="customer-home-content">
        <h2>Welcome to Home Revive</h2>
        <div className="home-service-buttons">
          <div className="service-card">
            <button className="service-button" onClick={() => alert('View Past Services')}>
              View Past Services
            </button>
          </div>
          <div className="service-card">
            <button className="service-button" onClick={handleBookServiceClick}>
              Book a Service
            </button>
          </div>
          <div className="service-card">
            <button className="service-button" onClick={() => alert('Upcoming Services')}>
              View Upcoming Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHomePage;
