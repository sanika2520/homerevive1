// import React, { useEffect, useState, useRef } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { getAuth, signOut } from "firebase/auth";
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pincode, service, providers = [] } = location.state || {};
//     const [showDropdown, setShowDropdown] = useState(false);
//     const dropdownRef = useRef(null);

//     console.log("Pincode:", pincode);
//     console.log("Service:", service);

//     const toggleProfileDropdown = () => {
//         setShowDropdown((prev) => !prev);
//     };

//     const handleLogoutClick = () => {
//         const auth = getAuth();
//         signOut(auth)
//             .then(() => {
//                 navigate('/'); // Redirect to home after successful logout
//             })
//             .catch((error) => {
//                 console.error("Error logging out: ", error);
//             });
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setShowDropdown(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleBooking = (provider) => {
//         // Navigate to the Appointment Confirmation page with provider details
//         navigate('/appointment-confirmation', { state: { provider } });
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="logo-container">
//                     <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//                     <span className="logo-text">Home Revive</span>
//                 </div>
//                 <div className="nav">
//                     <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//                     <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//                     <div className="profile" onClick={toggleProfileDropdown}>
//                         <img src={userProfile} alt="Profile" />
//                         <span className="profile-name">My Profile</span>
//                     </div>
//                     {showDropdown && (
//                         <div className="profile-dropdown active" ref={dropdownRef}>
//                             <ul>
//                                 <li>View Profile</li>
//                                 <li>Account Settings</li>
//                                 <li onClick={handleLogoutClick}>Logout</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </header>
//             <div className="providers-container">
//                 <h2>Available Providers</h2>
//                 <div className="info-header">
//                     <h3>Service: {service}</h3>
//                     <h3>Pincode: {pincode}</h3>
//                 </div>
//                 {providers.length > 0 ? (
//                     providers.map((provider) => (
//                         <div key={provider.id} className="provider-card">
//                             <h3>{provider.name}</h3>
//                             <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
//                             <p><strong>Contact:</strong> {provider.phone}</p>
//                             <p><strong>Location:</strong> {provider.area}</p>
//                             <button onClick={() => handleBooking(provider)}>
//                                 Book Professional
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No providers found for the entered pincode and selected service.</p>
//                 )}
//             </div>
//             <footer className="footer">
//                 <div className="footer-links">
//                     <Link to="/FAQsCustomers">FAQs for Customers</Link>
//                     <Link to="/FAQsProviders">FAQs for Providers</Link>
//                     <Link to="/terms">Terms of Service</Link>
//                     <Link to="/privacy">Privacy Policy</Link>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default AvailableProviders;


// import React, { useEffect, useState, useRef } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { getAuth, signOut } from "firebase/auth";
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pincode, service, providers = [], bookingDate, bookingTime } = location.state || {};
//     const [showDropdown, setShowDropdown] = useState(false);
//     const dropdownRef = useRef(null);

//     console.log("Pincode:", pincode);
//     console.log("Service:", service);

//     const toggleProfileDropdown = () => {
//         setShowDropdown((prev) => !prev);
//     };

//     const handleLogoutClick = () => {
//         const auth = getAuth();
//         signOut(auth)
//             .then(() => {
//                 navigate('/'); // Redirect to home after successful logout
//             })
//             .catch((error) => {
//                 console.error("Error logging out: ", error);
//             });
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setShowDropdown(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleBooking = (provider) => {
//         // Navigate to the Appointment Confirmation page with provider details and booking info
//         navigate('/appointment-confirmation', { state: { provider, bookingDate, bookingTime } });
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="logo-container">
//                     <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//                     <span className="logo-text">Home Revive</span>
//                 </div>
//                 <div className="nav">
//                     <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//                     <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//                     <div className="profile" onClick={toggleProfileDropdown}>
//                         <img src={userProfile} alt="Profile" />
//                         <span className="profile-name">My Profile</span>
//                     </div>
//                     {showDropdown && (
//                         <div className="profile-dropdown active" ref={dropdownRef}>
//                             <ul>
//                                 <li>View Profile</li>
//                                 <li>Account Settings</li>
//                                 <li onClick={handleLogoutClick}>Logout</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </header>
//             <div className="providers-container">
//                 <h2>Available Providers</h2>
//                 <div className="info-header">
//                     <h3>Service: {service}</h3>
//                     <h3>Pincode: {pincode}</h3>
//                 </div>
//                 {providers.length > 0 ? (
//                     providers.map((provider) => (
//                         <div key={provider.id} className="provider-card">
//                             <h3>{provider.name}</h3>
//                             <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
//                             <p><strong>Contact:</strong> {provider.phone}</p>
//                             <p><strong>Location:</strong> {provider.area}</p>
//                             <button onClick={() => handleBooking(provider)}>
//                                 Book Professional
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No providers found for the entered pincode and selected service.</p>
//                 )}
//             </div>
//             <footer className="footer">
//                 <div className="footer-links">
//                     <Link to="/FAQsCustomers">FAQs for Customers</Link>
//                     <Link to="/FAQsProviders">FAQs for Providers</Link>
//                     <Link to="/terms">Terms of Service</Link>
//                     <Link to="/privacy">Privacy Policy</Link>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default AvailableProviders;


import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './AvailableProviders.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';

const AvailableProviders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pincode, service, providers = [], bookingDate, bookingTime } = location.state || {};

    // Logging the received values for debugging
    console.log("Pincode:", pincode);
    console.log("Service:", service);
    console.log("Booking Date:", bookingDate);
    console.log("Booking Time:", bookingTime);

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleProfileDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleLogoutClick = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigate('/'); // Redirect to home after successful logout
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
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

    const handleBooking = (provider) => {
        navigate('/appointment-confirmation', { state: { provider, bookingDate, bookingTime } });
    };

    return (
        <>
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
            <div className="providers-container">
                <h2>Available Providers</h2>
                <div className="info-header">
                    <h3>Service: {service}</h3>
                    <h3>Pincode: {pincode}</h3>
                </div>
                {providers.length > 0 ? (
                    providers.map((provider) => (
                        <div key={provider.id} className="provider-card">
                            <h3>{provider.name}</h3>
                            <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
                            <p><strong>Contact:</strong> {provider.phone}</p>
                            <p><strong>Location:</strong> {provider.area}</p>
                            <button onClick={() => handleBooking(provider)}>
                                Book Professional
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No providers found for the entered pincode and selected service.</p>
                )}
            </div>
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/FAQsCustomers">FAQs for Customers</Link>
                    <Link to="/FAQsProviders">FAQs for Providers</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </footer>
        </>
    );
};

export default AvailableProviders;
