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
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import Firebase auth
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import './BookingPage.css';

const BookProfessional = () => {
    const location = useLocation();
    const { selectedService, mainService } = location.state || {
        selectedService: { title: 'Default Sub-Service' },
        mainService: { title: 'Default Main-Service' }
    };

    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [pincode, setPincode] = useState(''); // New state for pincode
    const [userUid, setUserUid] = useState(''); // New state for user UID
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Get current user UID
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();
        console.log(`Finding professionals in pincode ${pincode}`);
    
        // Navigate to AvailableProviders component, passing the pincode as state
        navigate('/available-providers', { state: { pincode } });
    };
    
    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 22; hour++) {
            const time = `${hour.toString().padStart(2, '0')}:00`;
            options.push(<option key={time} value={time}>{time}</option>);
        }
        return options;
    };

    const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
    const handleLogoutClick = () => {
        navigate('/'); // Navigate to home on logout
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
                        <div className="form-group">
                            <label htmlFor="pincode">Enter Pincode:</label>
                            <input
                                type="text"
                                id="pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn">Find Professional</button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default BookProfessional;


// // src/components/BookProfessional.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { db, auth } from '../firebaseConfig'; 
// import { collection, getDocs, query, where, doc, getDoc,addDoc} from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth'; 
// import './BookingPage.css';

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
//     const [provider, setProvider] = useState(null);  // State to hold the assigned provider
//     const navigate = useNavigate();  // To navigate after booking

//     // Fetch customer details from 'users' collection
//     const fetchCustomerDetails = async (userId) => {
//         const customerRef = doc(db, 'users', userId);  // 'users' collection holds customer data
//         const customerDoc = await getDoc(customerRef);
        
//         if (customerDoc.exists()) {
//             const customerData = customerDoc.data();
//             console.log("Customer details fetched:", customerData);

//             // Check if the 'area' field exists in the customer data
//             if (customerData.area) {
//                 setCustomerArea(customerData.area);  // Set customer area
//                 setUser((prevUser) => ({
//                     ...prevUser,
//                     ...customerData,  // Merge the customer data with the existing user data
//                 }));
//             } else {
//                 // If area is missing, log and alert
//                 console.log("Customer area is missing!");
//                 alert("Customer's area is missing. Please update your details.");
//             }
//         } else {
//             console.log("No such customer!");
//         }
//     };

//     // Fetch logged-in user's details on authentication change
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             if (currentUser) {
//                 console.log("User is logged in:", currentUser);
//                 fetchCustomerDetails(currentUser.uid);  // Fetch customer details based on user UID
//             } else {
//                 console.log("No user logged in.");
//             }
//         });
//         return () => unsubscribe(); 
//     }, []);

//     // Function to manually assign a provider based on selected service and customer area
//     const assignProvider = async () => {
//         if (!customerArea) {
//             alert('Customer area is missing. Cannot assign provider.');
//             return;
//         }

//         // Query providers based on the customer's area and the selected service
//         const providerQuery = query(
//             collection(db, 'providers'),
//             where('services', '==', selectedService.title),  // Match providers based on the service
//             where('area', '==', customerArea)  // Match providers based on the customer's area
//         );

//         const providerSnapshot = await getDocs(providerQuery);

//         if (!providerSnapshot.empty) {
//             const assignedProvider = providerSnapshot.docs[0].data();
//             setProvider(assignedProvider);  // Set the assigned provider

//             // Create an appointment with the selected provider
//             const appointmentRef = collection(db, 'appointments');
//             await addDoc(appointmentRef, {
//                 serviceTitle: selectedService.title,
//                 mainServiceTitle: mainService.title,
//                 bookingDate,
//                 bookingTime,
//                 customerId: user.uid,  // The logged-in user
//                 providerId: assignedProvider.aadhar,  // Provider ID (using 'aadhar' as the unique identifier)
//             });

//             // Navigate to the provider details page and pass the provider data
//             navigate('/provider-details', {
//                 state: { provider: assignedProvider }
//             });
//         } else {
//             alert('No providers available for the selected service in your area.');
//         }
//     };

//     // Function to handle the booking
//     const handleBooking = async (e) => {
//         e.preventDefault();
//         if (!user) {
//             alert('You must be logged in to book a service.');
//             return;
//         }

//         try {
//             // If a provider is manually assigned based on the customer area
//             await assignProvider();

//         } catch (error) {
//             console.error('Error booking appointment:', error);
//             alert('Failed to book appointment. Please try again.');
//         }
//     };

//     return (
//         <div className="booking-page">
//             <h2>Book Professional</h2>
//             <h3>{mainService.title} - {selectedService.title}</h3>
//             <form onSubmit={handleBooking}>
//                 <div>
//                     <label>Date:</label>
//                     <input
//                         type="date"
//                         value={bookingDate}
//                         onChange={(e) => setBookingDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Time:</label>
//                     <input
//                         type="time"
//                         value={bookingTime}
//                         onChange={(e) => setBookingTime(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Confirm Booking</button>
//             </form>

//             {provider && (
//                 <div className="provider-details">
//                     <h3>Assigned Provider Details</h3>
//                     <p><strong>Name:</strong> {provider.name} {provider.surname}</p>
//                     <p><strong>Email:</strong> {provider.email}</p>
//                     <p><strong>Phone:</strong> {provider.phone}</p>
//                     <p><strong>Service Offered:</strong> {provider.services}</p>
//                     <p><strong>Area:</strong> {provider.area}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookProfessional;