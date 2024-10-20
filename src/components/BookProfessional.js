// // src/components/BookProfessional.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import './BookingPage.css';
// import { db, auth } from '../firebaseConfig'; 
// import { collection, getDocs, query, where, doc, getDoc,addDoc} from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth'; 


// const BookProfessional = () => {
//     const location = useLocation();
//     const { selectedService, mainService } = location.state || {
//         selectedService: { title: 'Default Sub-Service' },
//         mainService: { title: 'Default Main-Service' }
//     };

//     const [bookingDate, setBookingDate] = useState('');
//     const [bookingTime, setBookingTime] = useState('');
//     const [user, setUser] = useState(null);  // To hold logged-in user details
//     const [customerArea, setCustomerArea] = useState('');  // To hold customer area
//     const [showDropdown, setShowDropdown] = useState(false);
//     const navigate = useNavigate();  // To navigate after booking


//   const handleBooking = (e) => {
//     e.preventDefault();
//     console.log(`Booked ${selectedService.title} on ${bookingDate} at ${bookingTime}`);
//   };

//   const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
//   const handleLogoutClick = () => {
//     navigate('/'); // Navigate to home on logout
//   };

//   const generateTimeOptions = () => {
//     const options = [];
//     for (let hour = 8; hour <= 22; hour++) {
//       const time = `${hour.toString().padStart(2, '0')}:00`;
//       options.push(<option key={time} value={time}>{time}</option>);
//     }
//     return options;
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item" onClick={() => navigate('/customer-home')}>Home</div>
//           <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//           <div className="profile" onClick={toggleProfileDropdown}>
//             <img src={userProfile} alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown active">
//               <ul>
//                 <li>View Profile</li>
//                 <li>Account Settings</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       <div className="booking-container">
//         <main className="booking-content">
//           <h1>Book a Professional</h1>
//           <h3>{mainService.title} - {selectedService.title}</h3>
//           <form onSubmit={handleBooking} className="booking-form">
//             <div className="form-group">
//               <label htmlFor="date">Select Date:</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={bookingDate}
//                 onChange={(e) => setBookingDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="time">Select Time:</label>
//               <select
//                 id="time"
//                 value={bookingTime}
//                 onChange={(e) => setBookingTime(e.target.value)}
//                 required
//               >
//                 <option value="">Select a time</option>
//                 {generateTimeOptions()}
//               </select>
//             </div>
//             <button type="submit" className="btn">Find Professional</button>
//           </form>
//         </main>

//         <footer className="footer">
//           {/* Footer content, if applicable */}
//         </footer>
//       </div>
//     </>
//   );
// };

// export default BookProfessional;

// src/components/BookProfessional.js
// src/components/BookProfessional.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import './BookingPage.css';
import { auth } from '../firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth'; 

const BookProfessional = () => {
    const location = useLocation();
    const { selectedService, mainService } = location.state || {
        selectedService: { title: 'Default Sub-Service' },
        mainService: { title: 'Default Main-Service' }
    };

    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();
        // Navigate to ProvidersList component with the mainService
        navigate('/providers-list', { state: { service: mainService.title } });
    };

    const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
    const handleLogoutClick = () => {
        navigate('/'); // Navigate to home on logout
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 22; hour++) {
            const time = `${hour.toString().padStart(2, '0')}:00`;
            options.push(<option key={time} value={time}>{time}</option>);
        }
        return options;
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
                        <div className="profile-dropdown active">
                            <ul>
                                <li>View Profile</li>
                                <li>Account Settings</li>
                                <li onClick={handleLogoutClick}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            <div className="booking-container">
                <main className="booking-content">
                    <h1>Book a Professional</h1>
                    <h3>{mainService.title} - {selectedService.title}</h3>
                    <form onSubmit={handleBooking} className="booking-form">
                        <div className="form-group">
                            <label htmlFor="date">Select Date:</label>
                            <input
                                type="date"
                                id="date"
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Select Time:</label>
                            <select
                                id="time"
                                value={bookingTime}
                                onChange={(e) => setBookingTime(e.target.value)}
                                required
                            >
                                <option value="">Select a time</option>
                                {generateTimeOptions()}
                            </select>
                        </div>
                        <button type="submit" className="btn">Find Professional</button>
                    </form>
                </main>

                <footer className="footer">
                    {/* Footer content, if applicable */}
                </footer>
            </div>
        </>
    );
};

export default BookProfessional;
