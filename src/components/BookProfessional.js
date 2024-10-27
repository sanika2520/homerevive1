
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
//     const { selectedService, mainService, customerId } = location.state || {
//         selectedService: { title: 'Default Sub-Service' },
//         mainService: { title: 'Default Main-Service' },
//         customerId: 'DefaultCustomerId' // Default in case not passed
//     };

//     const [bookingDate, setBookingDate] = useState('');
//     const [bookingTime, setBookingTime] = useState('');
//     const [pincode, setPincode] = useState(''); 
//     const [userUid, setUserUid] = useState('');
//     const [showDropdown, setShowDropdown] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUserUid(user.uid);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleBooking = async (e) => {
//         e.preventDefault();
//         console.log("Booking form submitted");
//         console.log("Selected service:", mainService.title);
//         console.log("Entered pincode:", pincode);

//         try {
//             // Fetch professionals based on the service and pincode
//             const professionalsRef = collection(db, 'providers');
//             const q = query(
//                 professionalsRef,
//                 where('services', '==', mainService.title),
//                 where('pincode', '==', pincode)
//             );

//             const querySnapshot = await getDocs(q);
//             const fetchedProfessionals = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));

//             console.log("Fetched professionals:", fetchedProfessionals);

//             // Create the booking data
//             const bookingData = {
//                 customerId, // Customer ID from state
//                 serviceId: selectedService.id, // Assuming you have an ID for the sub-service
//                 subServiceId: selectedService.id,
//                 serviceTitle: mainService.title,
//                 subServiceTitle: selectedService.title,
//                 date: bookingDate,
//                 time: bookingTime,
//                 pincode: pincode,
//                 timestamp: new Date(), // Timestamp for the booking
//             };

//             // Add the booking to the Firestore collection
//             await addDoc(collection(db, 'bookings'), bookingData);
//             console.log("Booking successful!", bookingData);

//             // Navigate to the available providers
//             navigate('/available-providers', { 
//                 state: { 
//                     pincode, 
//                     service: mainService.title, 
//                     providers: fetchedProfessionals // Pass the providers array
//                 } 
//             });
//             console.log("Navigating to available providers");

//         } catch (error) {
//             console.error("Error fetching professionals: ", error);
//         }
//     };

//     const generateTimeOptions = () => {
//         const options = [];
//         for (let hour = 8; hour <= 22; hour++) {
            // const time = `${hour.toString().padStart(2, '0')}:00`;
//             options.push(<option key={time} value={time}>{time}</option>);
//         }
//         return options;
//     };

//     const toggleProfileDropdown = () => setShowDropdown((prev) => !prev);
//     const handleLogoutClick = () => {
//         navigate('/'); 
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
        console.log("Booking form submitted");
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

            console.log("Fetched professionals:", fetchedProfessionals);

            // Navigate regardless of the results
            navigate('/available-providers', { 
                state: { 
                    pincode, 
                    service: mainService.title, 
                    providers: fetchedProfessionals // Pass the providers array
                } 
            });
            console.log("Navigating to available providers");

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