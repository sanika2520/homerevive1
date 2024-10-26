// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebaseConfig'; 
// import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import './BookingPage.css';

// const BookProfessional = () => {
//     const location = useLocation();
//     const { selectedService, mainService } = location.state || {
//         selectedService: { title: 'Default Sub-Service' },
//         mainService: { title: 'Default Main-Service' }
//     };

//     const [bookingDate, setBookingDate] = useState('');
//     const [bookingTime, setBookingTime] = useState('');
//     const [pincode, setPincode] = useState('');
//     const [userUid, setUserUid] = useState('');
//     const [professionals, setProfessionals] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [userData, setUserData] = useState(null); // Assuming you want to store user data
//     const navigate = useNavigate();

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUserUid(user.uid);
//                 // Fetch user data logic here, e.g., from Firestore
//                 fetchUserData(user.uid);
//             }
//         });
//         return () => unsubscribe();
//     }, []);

//     const fetchUserData = async (uid) => {
//         // Implement user data fetching from Firestore if needed
//         // setUserData(fetchedData);
//     };

    
//     const handleBooking = async (e) => {
//         e.preventDefault();
//         try {
//             const professionalsRef = collection(db, 'providers');
//             const q = query(
//                 professionalsRef,
//                 where('services', '==', mainService.title), // Match the service title
//                 where('pincode', '==', pincode) // Add pincode filter
//             );
//             const querySnapshot = await getDocs(q);
//             const fetchedProfessionals = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
    
//             if (fetchedProfessionals.length === 0) {
//                 alert('No providers found for the entered pincode and selected service.');
//             } else {
//                 setProfessionals(fetchedProfessionals);
//                 navigate('/available-providers', { state: { pincode, professionals: fetchedProfessionals } });
//             }
//         } catch (error) {
//             console.error("Error fetching professionals: ", error);
//         }
//     };
    
//     const handleBookProfessional = async (subService) => {
//         try {
//             const bookingData = {
//                 serviceId: selectedService.id, // Use the correct selectedService object
//                 subServiceId: subService.id,
//                 serviceTitle: mainService.title,
//                 subServiceTitle: subService.title,
//                 userPincode: pincode, // Use the entered pincode
//                 timestamp: new Date(),
//             };

//             await addDoc(collection(db, 'bookings'), bookingData);
//             console.log("Booking successful!", bookingData);

//             navigate('/book-professional', {
//                 state: {
//                     selectedService: subService,
//                     mainService: { title: mainService.title },
//                     pincode, // Use the entered pincode
//                 }
//             });
//         } catch (error) {
//             console.error("Error adding booking: ", error);
//         }
//     };

//     const generateTimeOptions = () => {
//         const options = [];
//         for (let hour = 8; hour <= 22; hour++) {
//             const time = `${hour.toString().padStart(2, '0')}:00`;
//             options.push(<option key={time} value={time}>{time}</option>);
//         }
//         return options;
//     };

//     const toggleProfileDropdown = () => setShowDropdown(prev => !prev);
//     const handleLogoutClick = () => navigate('/'); 

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
//                         <div className="profile-dropdown active">
//                             <ul>
//                                 <li>View Profile</li>
//                                 <li>Account Settings</li>
//                                 <li onClick={handleLogoutClick}>Logout</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </header>

//             <div className="booking-container">
//                 <main className="booking-content">
//                     <h1>Book a Professional</h1>
//                     <h3>{mainService.title} - {selectedService.title}</h3>
//                     <form onSubmit={handleBooking} className="booking-form">
//                         <div className="form-group">
//                             <label htmlFor="date">Select Date:</label>
//                             <input
//                                 type="date"
//                                 id="date"
//                                 value={bookingDate}
//                                 onChange={(e) => setBookingDate(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="time">Select Time:</label>
//                             <select
//                                 id="time"
//                                 value={bookingTime}
//                                 onChange={(e) => setBookingTime(e.target.value)}
//                                 required
//                             >
//                                 <option value="">Select a time</option>
//                                 {generateTimeOptions()}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="pincode">Enter Pincode:</label>
//                             <input
//                                 type="text"
//                                 id="pincode"
//                                 value={pincode}
//                                 onChange={(e) => setPincode(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn">Find Professional</button>
//                     </form>
//                 </main>
//             </div>
//         </>
//     );
// };

// export default BookProfessional;



// // src/components/BookProfessional.js
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebaseConfig'; 
// import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import './BookingPage.css';
// import { Link } from 'react-router-dom';

// const BookProfessional = () => {
//     const location = useLocation();
//     const { selectedService, mainService } = location.state || {
//         selectedService: { title: 'Default Sub-Service' },
//         mainService: { title: 'Default Main-Service' }
//     };

//     const [bookingDate, setBookingDate] = useState('');
//     const [bookingTime, setBookingTime] = useState('');
//     const [pincode, setPincode] = useState(''); // New state for pincode
//     const [userUid, setUserUid] = useState(''); // New state for user UID
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [professionals, setProfessionals] = useState([]);

//     const navigate = useNavigate();

//     useEffect(() => {
//         // Get current user UID
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUserUid(user.uid);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

    

//     const handleBooking = async (e) => {
//         e.preventDefault();
//         try {
//             const professionalsRef = collection(db, 'providers');
//             const q = query(
//                 professionalsRef,
//                 where('service', '==', mainService.title), // Match the service title
//                 where('pincode', '==', pincode) // Add pincode filter
//             );
//             const querySnapshot = await getDocs(q);
//             const fetchedProfessionals = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
    
//             if (fetchedProfessionals.length === 0) {
//                 alert('No providers found for the entered pincode and selected service.');
//             } else {
//                 setProfessionals(fetchedProfessionals);
//                 navigate('/available-providers', { state: { pincode, service: mainService.title } }); // Ensure service is passed
//             }
//         } catch (error) {
//             console.error("Error fetching professionals: ", error);
//         }
//     };
    
    
//     const generateTimeOptions = () => {
//         const options = [];
//         for (let hour = 8; hour <= 22; hour++) {
//             const time = `${hour.toString().padStart(2, '0')}:00`;
//             options.push(<option key={time} value={time}>{time}</option>);
//         }
//         return options;
//     };

//     const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
//     const handleLogoutClick = () => {
//         navigate('/'); // Navigate to home on logout
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
//                         <div className="profile-dropdown active">
//                             <ul>
//                                 <li>View Profile</li>
//                                 <li>Account Settings</li>
//                                 <li onClick={handleLogoutClick}>Logout</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </header>

//             <div className="booking-container">
//                 <main className="booking-content">
//                     <h1>Book a Professional</h1>
//                     <h3>{mainService.title} - {selectedService.title}</h3>
//                     <form onSubmit={handleBooking} className="booking-form">
//                         <div className="form-group">
//                             <label htmlFor="date">Select Date:</label>
//                             <input
//                                 type="date"
//                                 id="date"
//                                 value={bookingDate}
//                                 onChange={(e) => setBookingDate(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="time">Select Time:</label>
//                             <select
//                                 id="time"
//                                 value={bookingTime}
//                                 onChange={(e) => setBookingTime(e.target.value)}
//                                 required
//                             >
//                                 <option value="">Select a time</option>
//                                 {generateTimeOptions()}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="pincode">Enter Pincode:</label>
//                             <input
//                                 type="text"
//                                 id="pincode"
//                                 value={pincode}
//                                 onChange={(e) => setPincode(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn">Find Professional</button>
//                     </form>
//                 </main>
//             </div>
//             <footer className="footer">
//             <div className="footer-links">
//                 <Link to="/FAQsCustomers">FAQs for Customers</Link>
//                 <Link to="/FAQsProviders">FAQs for Providers</Link>
//                 <Link to="/terms">Terms of Service</Link>
//                 <Link to="/privacy">Privacy Policy</Link>
//             </div>
//             </footer>
//         </>
//     );
// };

// export default BookProfessional;


// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebaseConfig'; 
// import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import './BookingPage.css';
// import { Link } from 'react-router-dom';

// const BookProfessional = () => {
//     const location = useLocation();
//     const { selectedService, mainService } = location.state || {
//         selectedService: { title: 'Default Sub-Service' },
//         mainService: { title: 'Default Main-Service' }
//     };

//     const [bookingDate, setBookingDate] = useState('');
//     const [bookingTime, setBookingTime] = useState('');
//     const [pincode, setPincode] = useState(''); // New state for pincode
//     const [userUid, setUserUid] = useState(''); // New state for user UID
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [professionals, setProfessionals] = useState([]);

//     const navigate = useNavigate();

//     useEffect(() => {
//         // Get current user UID
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUserUid(user.uid);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleBooking = async (e) => {
//         e.preventDefault();
//         try {
//             const professionalsRef = collection(db, 'providers');
//             const q = query(
//                 professionalsRef,
//                 where('service', '==', mainService.title), // Match the service title
//                 where('pincode', '==', pincode) // Add pincode filter
//             );
//             const querySnapshot = await getDocs(q);
//             const fetchedProfessionals = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));

//             if (fetchedProfessionals.length === 0) {
//                 alert('No providers found for the entered pincode and selected service.');
//             } else {
//                 setProfessionals(fetchedProfessionals);
//                 navigate('/available-providers', { state: { pincode, service: mainService.title } }); // Ensure service is passed
//             }
//         } catch (error) {
//             console.error("Error fetching professionals: ", error);
//         }
//     };
    
//     const generateTimeOptions = () => {
//         const options = [];
//         for (let hour = 8; hour <= 22; hour++) {
//             const time = `${hour.toString().padStart(2, '0')}:00`;
//             options.push(<option key={time} value={time}>{time}</option>);
//         }
//         return options;
//     };

//     const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
//     const handleLogoutClick = () => {
//         navigate('/'); // Navigate to home on logout
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
//                         <div className="profile-dropdown active">
//                             <ul>
//                                 <li>View Profile</li>
//                                 <li>Account Settings</li>
//                                 <li onClick={handleLogoutClick}>Logout</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </header>

//             <div className="booking-container">
//                 <main className="booking-content">
//                     <h1>Book a Professional</h1>
//                     <h3>{mainService.title} - {selectedService.title}</h3>
                    
//                     {/* Display service name and pincode */}
//                     <div className="info-display">
//                         <p><strong>Service:</strong> {mainService.title}</p>
//                         <p><strong>Pincode:</strong> {pincode}</p>
//                     </div>

//                     <form onSubmit={handleBooking} className="booking-form">
//                         <div className="form-group">
//                             <label htmlFor="date">Select Date:</label>
//                             <input
//                                 type="date"
//                                 id="date"
//                                 value={bookingDate}
//                                 onChange={(e) => setBookingDate(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="time">Select Time:</label>
//                             <select
//                                 id="time"
//                                 value={bookingTime}
//                                 onChange={(e) => setBookingTime(e.target.value)}
//                                 required
//                             >
//                                 <option value="">Select a time</option>
//                                 {generateTimeOptions()}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="pincode">Enter Pincode:</label>
//                             <input
//                                 type="text"
//                                 id="pincode"
//                                 value={pincode}
//                                 onChange={(e) => setPincode(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn">Find Professional</button>
//                     </form>
//                 </main>
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

// export default BookProfessional;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig'; 
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import './BookingPage.css';
import { Link } from 'react-router-dom';

const BookProfessional = () => {
    const location = useLocation();
    const { selectedService, mainService } = location.state || {
        selectedService: { title: 'Default Sub-Service' },
        mainService: { title: 'Default Main-Service' }
    };

    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [pincode, setPincode] = useState(''); 
    const [userUid, setUserUid] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [professionals, setProfessionals] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleBooking = async (e) => {
        e.preventDefault();
        console.log("Booking form submitted"); // Debugging log
        console.log("Selected service:", mainService.title);
        console.log("Entered pincode:", pincode);

        try {
            const professionalsRef = collection(db, 'providers');
            const q = query(
                professionalsRef,
                where('services', '==', mainService.title),
                where('pincode', '==', pincode)
            );

            const querySnapshot = await getDocs(q);
            const fetchedProfessionals = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log("Fetched professionals:", fetchedProfessionals); // Debugging log

            if (fetchedProfessionals.length === 0) {
                alert('No providers found for the entered pincode and selected service.');
            } else {
                setProfessionals(fetchedProfessionals);
                navigate('/available-providers', { state: { pincode, service: mainService.title } });
                console.log("Navigating to available providers"); // Debugging log
            }
        } catch (error) {
            console.error("Error fetching professionals: ", error);
        }
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
        navigate('/'); 
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
                    
                    <div className="info-display">
                        <p><strong>Service:</strong> {mainService.title}</p>
                        <p><strong>Pincode:</strong> {pincode}</p>
                    </div>

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

export default BookProfessional;
