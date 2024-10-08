// src/components/CustomerDashboard.js
import React, { useState, useEffect, useRef } from 'react';
import './CustomerDashboard.css'; 
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import { useHistory } from 'react-router-dom';


const CustomerDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [services, setServices] = useState([]); 
  const [selectedServiceId, setSelectedServiceId] = useState(null); 
  const [professionals, setProfessionals] = useState([]);
  const [showFindButton, setShowFindButton] = useState(false);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const dummyServices = [
      {
        id: 1,
        title: 'Plumbing Service',
        subServices: [
          { id: 1, title: 'Tap Repair' },
          { id: 2, title: 'Tap Installation/Replacement' },
          { id: 3, title: 'Pipe Leak Repair' },
          { id: 4, title: 'Toilet Repair' },
          { id: 5, title: 'Toilet Installation' },
          { id: 6, title: 'Drain Cleaning' },
          { id: 7, title: 'Basin Installation/Repair' },
        ],
      },
      {
        id: 2,
        title: 'Electrical Work',
        subServices: [
          { id: 8, title: 'Wiring and Rewiring' },
          { id: 9, title: 'Light Fixture Installation' },
          { id: 10, title: 'Ceiling Fan Installation/Repair' },
          { id: 11, title: 'Electrical Panel Upgrades' },
          { id: 12, title: 'Appliance Wiring and Installation' },
          { id: 13, title: 'Outdoor Lighting Installation' },
        ],
      },
      {
        id: 3,
        title: 'Carpentry',
        subServices: [
          { id: 14, title: 'Furniture Assembly' },
          { id: 15, title: 'Cabinet Installation and Repair' },
          { id: 16, title: 'Door and Window Frame Installation' },
          { id: 17, title: 'Furniture Repair and Refinishing' },
          { id: 18, title: 'Closet Organization Systems' },
        ],
      },
      {
        id: 4,
        title: 'Electronic Repairs',
        subServices: [
          { id: 19, title: 'TV Repair' },
          { id: 20, title: 'Microwave and Small Appliance Repair' },
          { id: 21, title: 'Audio System Repair' },
        ],
      },
    ];
    setServices(dummyServices);
  }, []);

  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowFindButton(true);
  };

  const handleFindProfessionals = () => {
    const fetchedProfessionals = [
      { id: 1, name: 'John Doe', rating: '4.9' },
      { id: 2, name: 'Jane Smith', rating: '4.7' },
    ];
    setProfessionals(fetchedProfessionals);
  };

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

  return (
    <div className="customer-dashboard">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item">Home</div>
          <div className="nav-item">Support</div>
          <div className="profile" onClick={handleProfileClick}>
            <img src="https://via.placeholder.com/40" alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Service History</li>
                <li>My Bookings</li>
                <li>Account Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="service-selection-buttons">
        <h2>Select a Service</h2>
        <div className="services-buttons">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <button 
                className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
                onClick={() => handleServiceClick(service.id)}
              >
                {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedServiceId && (
        <div className="sub-services-list">
          <h3>Available services:</h3>
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
        <div className="fixed-find-professionals">
          <button onClick={handleFindProfessionals} className="find-professionals-button">Find Professionals</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
