//src/components/ServiceProviderDashboard.js

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceProviderDashboard.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const ServiceProviderDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [accountHolder, setAccountHolder] = useState(null); // To store account holder details
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [showFindButton, setShowFindButton] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy services
    const dummyServices = [
      { id: 1, title: 'Earnings', subServices: [] },
      { id: 2, title: 'Past-Work', subServices: [] },
      { id: 3, title: 'Upcoming-Work', subServices: [] },
      { id: 4, title: 'New Request', subServices: [] },
    ];
    setServices(dummyServices);

    // Simulate fetching account holder's details
    const accountHolderDetails = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    };
    setAccountHolder(accountHolderDetails);
  }, []);

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleJobClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowFindButton(true);
  };

  const handleViewJobDetails = () => {
    const fetchedProfessionals = [
      { id: 1, name: 'John Doe', rating: '4.9' },
      { id: 2, name: 'Jane Smith', rating: '4.7' },
    ];
    setProfessionals(fetchedProfessionals);
  };

  const handleViewProfile = () => {
    setShowProfile(true); // Show account holder's profile
    setShowDropdown(false); // Close dropdown after clicking
  };

  const handleEditProfile = () => {
    navigate('/provider-login-signup'); // Navigate to LoginSignup.js for editing
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="service-provider-dashboard">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={toggleProfileDropdown}>
            <img src="https://via.placeholder.com/40" alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li onClick={handleViewProfile}>View Profile</li>
                <li>Account Settings</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="service-selection-buttons">
        <h2>Your Jobs</h2>
        <div className="services-buttons">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <button
                className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`}
                onClick={() => handleJobClick(service.id)}
              >
                {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedServiceId && (
        <div className="sub-services-list">
          <h3>Available Information:</h3>
          {services
            .find(service => service.id === selectedServiceId)
            .subServices.map(subService => (
              <div key={subService.id} className="sub-service-card">
                <h4>{subService.title}</h4>
              </div>
            ))}
        </div>
      )}

      {showFindButton && (
        <div className="View Details">
          <button onClick={handleViewJobDetails} className="View-Details">View Details</button>
        </div>
      )}

      {showProfile && accountHolder && (
        <div className="profile-details">
          <h3>Account Holder's Profile</h3>
          <p><strong>Name:</strong> {accountHolder.name}</p>
          <p><strong>Email:</strong> {accountHolder.email}</p>
          <p><strong>Phone:</strong> {accountHolder.phone}</p>
          <button onClick={handleEditProfile} className="edit-button">Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderDashboard;