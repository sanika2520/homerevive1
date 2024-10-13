// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); 
//   const [selectedServiceId, setSelectedServiceId] = useState(null); 
//   const [professionals, setProfessionals] = useState([]);
//   const [showFindButton, setShowFindButton] = useState(false); // State for controlling button visibility
//   const dropdownRef = useRef(null); 

//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     setSelectedServiceId(serviceId);
//     setShowFindButton(true); // Show the find professionals button when a service is selected
//   };

//   const handleFindProfessionals = () => {
//     // Mock API call to fetch professionals
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
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
//         <h3>Available services :</h3>
//           {services
//             .find(service => service.id === selectedServiceId)
//             .subServices.map(subService => (
//               <div key={subService.id} className="sub-service-card">
//                 <h4>{subService.title}</h4>
//               </div>
//           ))}
//         </div>
//       )}

//       {/* Find Professionals Button */}
//       {showFindButton && (
//         <div className="fixed-find-professionals">
//           <button onClick={handleFindProfessionals} className="find-professionals-button">Book Professional</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;



// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); 
//   const [selectedServiceId, setSelectedServiceId] = useState(null); 
//   const [professionals, setProfessionals] = useState([]);
//   const [showFindButton, setShowFindButton] = useState(false); 
//   const dropdownRef = useRef(null); 

//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     setSelectedServiceId(serviceId);
//     setShowFindButton(true); 
//   };

//   const handleFindProfessionals = () => {
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
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
//                 <h4>{subService.title}</h4>
//                 {/* Book Professional button for each sub-service */}
//                 <button className="book-professional-button" onClick={() => alert(`Booking professional for ${subService.title}`)}>
//                   Book Professional
//                 </button>
//               </div>
//           ))}
//         </div>
//       )}

//       {/* Find Professionals Button */}
//       {showFindButton && (
//         <div className="fixed-find-professionals">
//           <button onClick={handleFindProfessionals} className="find-professionals-button">Find Professionals</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;


// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); 
//   const [selectedServiceId, setSelectedServiceId] = useState(null); 
//   const [professionals, setProfessionals] = useState([]); 
//   const dropdownRef = useRef(null); 

//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
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

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
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
//                 <h4>{subService.title}</h4>
//                 {/* Book Professional button for each sub-service */}
//                 <button className="book-professional-button" onClick={() => alert(`Booking professional for ${subService.title}`)}>
//                   Book Professional
//                 </button>
//               </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;

//src/components/CustomerDashboard.js
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

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
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair', description: 'Fix leaking or damaged taps.' },
//           { id: 2, title: 'Tap Installation/Replacement', description: 'Install or replace new taps.' },
//           { id: 3, title: 'Pipe Leak Repair', description: 'Repair leaking or damaged pipes.' },
//           { id: 4, title: 'Toilet Repair', description: 'Fix issues related to toilets.' },
//           { id: 5, title: 'Toilet Installation', description: 'Install a new toilet system.' },
//           { id: 6, title: 'Drain Cleaning', description: 'Unclog and clean your drains.' },
//           { id: 7, title: 'Basin Installation/Repair', description: 'Repair or install bathroom basins.' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring', description: 'Install new wiring or rewire old systems.' },
//           { id: 9, title: 'Light Fixture Installation', description: 'Install new light fixtures in your home.' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair', description: 'Repair or install ceiling fans.' },
//           { id: 11, title: 'Electrical Panel Upgrades', description: 'Upgrade your home’s electrical panel.' },
//           { id: 12, title: 'Appliance Wiring and Installation', description: 'Install and wire home appliances.' },
//           { id: 13, title: 'Outdoor Lighting Installation', description: 'Install outdoor lighting for security and aesthetics.' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly', description: 'Assemble new furniture.' },
//           { id: 15, title: 'Cabinet Installation and Repair', description: 'Install or repair cabinets.' },
//           { id: 16, title: 'Door and Window Frame Installation', description: 'Install doors and windows.' },
//           { id: 17, title: 'Furniture Repair and Refinishing', description: 'Repair and refinish wooden furniture.' },
//           { id: 18, title: 'Closet Organization Systems', description: 'Install closet organization systems.' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair', description: 'Repair issues related to television.' },
//           { id: 20, title: 'Microwave and Small Appliance Repair', description: 'Fix household electronic appliances.' },
//           { id: 21, title: 'Audio System Repair', description: 'Repair your home audio system.' },
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

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Update onClick event to navigate to "Book Professional" page
//   const handleBookProfessional = (subServiceId) => {
//     navigate(`/book-professional/${subServiceId}`); // Redirect to Book Professional page with sub-service ID
//   };

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
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
//                 </div>
//                 {/* Container for the button to align it properly */}
//                 <div className="button-container">
//                   <button 
//                     className="book-professional-button" 
//                     onClick={() => handleBookProfessional(subService.id)} // Redirect on click
//                   >
//                     Book Professional
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;


// src/components/CustomerDashboard.js
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

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
//         title: 'Plumbing Service',
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

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Update onClick event to navigate to "Book Professional" page
//   const handleBookProfessional = (subServiceId) => {
//     navigate(`/book-professional/${subServiceId}`); // Redirect to Book Professional page with sub-service ID
//   };

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
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
//                   <button 
//                     className="book-professional-button" 
//                     onClick={() => handleBookProfessional(subService.id)} // Redirect on click
//                   >
//                     Book Professional
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CustomerDashboard.css'; 
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

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
        title: 'Plumbing Service',
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBookProfessional = (subService) => {
    navigate('/book-professional', { state: { selectedService: subService } }); // Pass the sub-service data via the 'state'
  };
  
  return (
    <div className="customer-dashboard">
      {/* Header */}
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
            <div className="profile-dropdown" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Account Settings</li>
                <li>Logout</li>
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
                Book Professional
                </button>

                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
