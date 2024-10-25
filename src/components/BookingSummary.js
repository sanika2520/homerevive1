// // src/components/BookingSummary.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// //import './BookingSummary.css'; // Create this CSS file for styling if needed

// const BookingSummary = () => {
//     const location = useLocation();
//     const { userUid, pincode } = location.state || { userUid: 'No UID', pincode: 'No Pincode' };

//     return (
//         <div className="booking-summary">
//             <header className="header">
//                 <div className="logo-container">
//                     <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//                     <span className="logo-text">Home Revive</span>
//                 </div>
//             </header>

//             <main>
//                 <h1>Booking Summary</h1>
//                 <p><strong>User UID:</strong> {userUid}</p>
//                 <p><strong>Pincode:</strong> {pincode}</p>
//             </main>

//             <footer className="footer">
//                 {/* Footer content, if applicable */}
//             </footer>
//         </div>
//     );
// };

// export default BookingSummary;


// src/components/BookingSummary.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Make sure to import your Firestore configuration
import { collection, query, where, getDocs } from 'firebase/firestore';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
//import './BookingSummary.css'; // Create this CSS file for styling if needed

const BookingSummary = () => {
    const location = useLocation();
    const { userUid, pincode } = location.state || { userUid: 'No UID', pincode: 'No Pincode' };
    const [providers, setProviders] = useState([]); // State to hold provider data
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const q = query(collection(db, 'providers'), where('pincode', '==', pincode));
                const querySnapshot = await getDocs(q);
                const providersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProviders(providersList);
            } catch (error) {
                console.error("Error fetching providers: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (pincode) {
            fetchProviders();
        }
    }, [pincode]);

    return (
        <div className="booking-summary">
            <header className="header">
                <div className="logo-container">
                    <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
                    <span className="logo-text">Home Revive</span>
                </div>
            </header>

            <main>
                <h1>Booking Summary</h1>
                <p><strong>User UID:</strong> {userUid}</p>
                <p><strong>Pincode:</strong> {pincode}</p>

                {loading ? (
                    <p>Loading providers...</p>
                ) : (
                    <div>
                        <h2>Providers:</h2>
                        {providers.length > 0 ? (
                            <ul>
                                {providers.map(provider => (
                                    <li key={provider.id}>{provider.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No providers found for this pincode.</p>
                        )}
                    </div>
                )}
            </main>

            <footer className="footer">
                {/* Footer content, if applicable */}
            </footer>
        </div>
    );
};

export default BookingSummary;
