// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
// import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth and signOut function
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import {db} from '../firebaseConfig';
// import {collection, addDoc} from 'firebase/firestore';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); 
//   const [selectedServiceId, setSelectedServiceId] = useState(null); 
//   const [professionals, setProfessionals] = useState([]); 
//   const dropdownRef = useRef(null); 

//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing',
//         subServices: [
//           { id: 1, title: 'Tap Repair', description: 'Fix leaking or damaged taps.', price: '₹500' },
//           { id: 2, title: 'Tap Installation/Replacement', description: 'Install or replace new taps.', price: '₹700' },
//           { id: 3, title: 'Pipe Leak Repair', description: 'Repair leaking or damaged pipes.', price: '₹1500' },
//           { id: 4, title: 'Toilet Repair', description: 'Fix issues related to toilets.', price: '₹1200' },
//           { id: 5, title: 'Toilet Installation', description: 'Install a new toilet system.', price: '₹2500' },
//           { id: 6, title: 'Drain Cleaning', description: 'Unclog and clean your drains.', price: '₹800' },
//           { id: 7, title: 'Basin Installation/Repair', description: 'Repair or install bathroom basins.', price: '₹1000' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring', description: 'Install new wiring or rewire old systems.', price: '₹3000' },
//           { id: 9, title: 'Light Fixture Installation', description: 'Install new light fixtures in your home.', price: '₹1500' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair', description: 'Repair or install ceiling fans.', price: '₹1000' },
//           { id: 11, title: 'Electrical Panel Upgrades', description: 'Upgrade your home’s electrical panel.', price: '₹5000' },
//           { id: 12, title: 'Appliance Wiring and Installation', description: 'Install and wire home appliances.', price: '₹2000' },
//           { id: 13, title: 'Outdoor Lighting Installation', description: 'Install outdoor lighting for security and aesthetics.', price: '₹2500' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly', description: 'Assemble new furniture.', price: '₹1200' },
//           { id: 15, title: 'Cabinet Installation and Repair', description: 'Install or repair cabinets.', price: '₹2000' },
//           { id: 16, title: 'Door and Window Frame Installation', description: 'Install doors and windows.', price: '₹3500' },
//           { id: 17, title: 'Furniture Repair and Refinishing', description: 'Repair and refinish wooden furniture.', price: '₹1800' },
//           { id: 18, title: 'Closet Organization Systems', description: 'Install closet organization systems.', price: '₹2500' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair', description: 'Repair issues related to television.', price: '₹1200' },
//           { id: 20, title: 'Microwave and Small Appliance Repair', description: 'Fix household electronic appliances.', price: '₹900' },
//           { id: 21, title: 'Audio System Repair', description: 'Repair your home audio system.', price: '₹1500' },
//         ],
//       },
//       {
//         id: 5,
//         title: 'AC Installation and Repair', // New AC service section
//         subServices: [
//           { id: 22, title: 'AC Installation', description: 'Install new air conditioning units.', price: '₹3500' },
//           { id: 23, title: 'AC Repair', description: 'Repair malfunctioning AC units.', price: '₹2000' },
//           { id: 24, title: 'AC Maintenance', description: 'Regular AC maintenance services.', price: '₹1500' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     setSelectedServiceId(serviceId);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   const handleHomeClick = () => {
//     navigate('/customer-home'); // Change to the path of your CustomerHome component
//   };

//   const toggleProfileDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleLogoutClick = () => {
//     navigate('/'); // Navigate to home on logout
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleBookProfessional = async (subService) => {
//     try {
//       const bookingData = {
//         serviceId: selectedServiceId,
//         subServiceId: subService.id,
//         serviceTitle: services.find(service => service.id === selectedServiceId).title,
//         subServiceTitle: subService.title,
//         timestamp: new Date(),
//       };

//       await addDoc(collection(db, 'bookings'), bookingData);
//       console.log("Booking successful!", bookingData);

//       navigate('/book-professional', {
//         state: {
//           selectedService: subService,
//           mainService: { title: bookingData.serviceTitle },
//         }
//       });
//     } catch (error) {
//       console.error("Error adding booking: ", error);
//     }
//   };


//   const handleLogout = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         navigate('/'); // Redirect to LandingPage after successful logout
//       })
//       .catch((error) => {
//         console.error("Error logging out: ", error);
//       });
//   };
  
//   return (
//     <div className="customer-dashboard">
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//           <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//           <div className="profile" onClick={toggleProfileDropdown}>
//           <img src={userProfile} alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown active" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button 
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.title}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Subservices Display */}
//       {selectedServiceId && (
//         <div className="sub-services-list">
//           <h3>Available services :</h3>
//           {services
//             .find(service => service.id === selectedServiceId)
//             .subServices.map(subService => (
//               <div key={subService.id} className="sub-service-card">
//                 <div className="sub-service-info">
//                   <h4>{subService.title}</h4>
//                   <p>{subService.description}</p>
//                   <p className="price">Price: {subService.price}</p> {/* Display the price */}
//                 </div>
//                 {/* Container for the button to align it properly */}
//                 <div className="button-container">
//                 <button 
//                 className="book-professional-button" 
//                 onClick={() => handleBookProfessional(subService)} // Pass sub-service object
//                 >
//                 Book Professional
//                 </button>

//                 </div>
//               </div>
//             ))}
//         </div>
//       )}

// <footer className="footer">
//             <div className="footer-links">
//                 <Link to="/FAQsCustomers">FAQs for Customers</Link>
//                 <Link to="/FAQsProviders">FAQs for Providers</Link>
//                 <Link to="/terms">Terms of Service</Link>
//                 <Link to="/privacy">Privacy Policy</Link>
//             </div>
//             </footer>
//     </div>
//   );
// };

// export default CustomerDashboard;


// src/components/CustomerDashboard.js

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth and signOut function
import './CustomerDashboard.css'; 
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import {db} from '../firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

const CustomerDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [services, setServices] = useState([]); 
  const [selectedServiceId, setSelectedServiceId] = useState(null); 
  const [professionals, setProfessionals] = useState([]); 
  const dropdownRef = useRef(null); 
  

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const dummyServices = [
      {
        id: 1,
        title: 'Plumbing',
        subServices: [
          { id: 1, title: 'Tap Repair', description: 'Fix leaking or damaged taps.', price: '₹500' },
          { id: 2, title: 'Tap Installation/Replacement', description: 'Install or replace new taps.', price: '₹700' },
          { id: 3, title: 'Pipe Leak Repair', description: 'Repair leaking or damaged pipes.', price: '₹1500' },
          { id: 4, title: 'Toilet Repair', description: 'Fix issues related to toilets.', price: '₹1200' },
          { id: 5, title: 'Toilet Installation', description: 'Install a new toilet system.', price: '₹2500' },
          { id: 6, title: 'Drain Cleaning', description: 'Unclog and clean your drains.', price: '₹800' },
          { id: 7, title: 'Basin Installation/Repair', description: 'Repair or install bathroom basins.', price: '₹1000' },
        ],
      },
      {
        id: 2,
        title: 'Electrical Work',
        subServices: [
          { id: 8, title: 'Wiring and Rewiring', description: 'Install new wiring or rewire old systems.', price: '₹3000' },
          { id: 9, title: 'Light Fixture Installation', description: 'Install new light fixtures in your home.', price: '₹1500' },
          { id: 10, title: 'Ceiling Fan Installation/Repair', description: 'Repair or install ceiling fans.', price: '₹1000' },
          { id: 11, title: 'Electrical Panel Upgrades', description: 'Upgrade your home’s electrical panel.', price: '₹5000' },
          { id: 12, title: 'Appliance Wiring and Installation', description: 'Install and wire home appliances.', price: '₹2000' },
          { id: 13, title: 'Outdoor Lighting Installation', description: 'Install outdoor lighting for security and aesthetics.', price: '₹2500' },
        ],
      },
      {
        id: 3,
        title: 'Carpentry',
        subServices: [
          { id: 14, title: 'Furniture Assembly', description: 'Assemble new furniture.', price: '₹1200' },
          { id: 15, title: 'Cabinet Installation and Repair', description: 'Install or repair cabinets.', price: '₹2000' },
          { id: 16, title: 'Door and Window Frame Installation', description: 'Install doors and windows.', price: '₹3500' },
          { id: 17, title: 'Furniture Repair and Refinishing', description: 'Repair and refinish wooden furniture.', price: '₹1800' },
          { id: 18, title: 'Closet Organization Systems', description: 'Install closet organization systems.', price: '₹2500' },
        ],
      },
      {
        id: 4,
        title: 'Electronic Repairs',
        subServices: [
          { id: 19, title: 'TV Repair', description: 'Repair issues related to television.', price: '₹1200' },
          { id: 20, title: 'Microwave and Small Appliance Repair', description: 'Fix household electronic appliances.', price: '₹900' },
          { id: 21, title: 'Audio System Repair', description: 'Repair your home audio system.', price: '₹1500' },
        ],
      },
      {
        id: 5,
        title: 'AC Installation and Repair', // New AC service section
        subServices: [
          { id: 22, title: 'AC Installation', description: 'Install new air conditioning units.', price: '₹3500' },
          { id: 23, title: 'AC Repair', description: 'Repair malfunctioning AC units.', price: '₹2000' },
          { id: 24, title: 'AC Maintenance', description: 'Regular AC maintenance services.', price: '₹1500' },
        ],
      },
    ];
    setServices(dummyServices);
  }, []);

  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleHomeClick = () => {
    navigate('/customer-home'); // Change to the path of your CustomerHome component
  };

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to home on logout
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBookProfessional = async (subService) => {
    try {
      const bookingData = {
        serviceId: selectedServiceId,
        subServiceId: subService.id,
        serviceTitle: services.find(service => service.id === selectedServiceId).title,
        subServiceTitle: subService.title,
        timestamp: new Date(),
      };

      await addDoc(collection(db, 'bookings'), bookingData);
      console.log("Booking successful!", bookingData);

      navigate('/book-professional', {
        state: {
          selectedService: subService,
          mainService: { title: bookingData.serviceTitle },
        }
      });
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };


  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/'); // Redirect to LandingPage after successful logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };
  
  return (
    <div className="customer-dashboard">
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

      {/* Service Selection */}
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

      {/* Subservices Display */}
      {selectedServiceId && (
        <div className="sub-services-list">
          <h3>Available services :</h3>
          {services
            .find(service => service.id === selectedServiceId)
            .subServices.map(subService => (
              <div key={subService.id} className="sub-service-card">
                <div className="sub-service-info">
                  <h4>{subService.title}</h4>
                  <p>{subService.description}</p>
                  <p className="price">Price: {subService.price}</p> {/* Display the price */}
                </div>
                {/* Container for the button to align it properly */}
                <div className="button-container">
                <button 
                className="book-professional-button" 
                onClick={() => handleBookProfessional(subService)} // Pass sub-service object
                >
                Find Professional
                </button>

                </div>
              </div>
            ))}
        </div>
      )}

<footer className="footer">
            <div className="footer-links">
                <Link to="/FAQsCustomers">FAQs for Customers</Link>
                <Link to="/FAQsProviders">FAQs for Providers</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            </footer>
    </div>
  );
};

export default CustomerDashboard;