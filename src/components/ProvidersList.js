// src/components/ProvidersList.js
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebaseConfig'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useLocation } from 'react-router-dom'; 
import { onAuthStateChanged } from 'firebase/auth';

const ProvidersList = () => {
    const location = useLocation();
    const { service } = location.state || { service: 'Default Service' }; // Get the service from location state
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userArea, setUserArea] = useState('');
    const [userUid, setUserUid] = useState('');  // State to hold the UID of the user

    useEffect(() => {
        const fetchUserArea = async (userId) => {
            console.log("Fetching user area for UID:", userId);  // Debug log for UID
            try {
                const userDoc = await getDocs(query(collection(db, 'users'), where('uid', '==', userId)));
                if (!userDoc.empty) {
                    const userData = userDoc.docs[0].data();
                    console.log("User data from Firestore:", userData);  // Debug log for Firestore data
                    setUserArea(userData.area); // Set the user's area
                    setUserUid(userId); // Set the user's UID
                } else {
                    console.log("No user found in Firestore with the UID:", userId);  // Debug log if no user found
                }
            } catch (error) {
                console.error("Error fetching user area from Firestore:", error);  // Debug log for error
            }
        };

        const fetchProviders = async () => {
            setLoading(true);
            try {
                // Fetch logged-in user details
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        console.log("User logged in with UID:", user.uid);  // Debug log for logged-in user UID
                        // Get user's area and UID
                        await fetchUserArea(user.uid);
                        
                        // Check if userArea is set before fetching providers
                        if (userArea) {
                            console.log("Querying providers with service:", service, "and area:", userArea);  // Debug log for querying providers
                            // Query to get providers with the specified service and area
                            const providersQuery = query(
                                collection(db, 'providers'),
                                where('services', '==', service), // Match the service as a string
                                where('area', '==', userArea) // Match the user's area
                            );
                            const querySnapshot = await getDocs(providersQuery);
                            const providerList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                            setProviders(providerList);
                        } else {
                            console.log("User area not set, skipping provider query.");  // Debug log if user area is not set
                        }
                    } else {
                        console.log("No user logged in.");  // Debug log if no user is logged in
                    }
                });

                return () => unsubscribe(); // Cleanup subscription on unmount
            } catch (error) {
                console.error("Error fetching providers: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, [service, userArea]); // Added userArea to the dependency array

    // Debugging output
    console.log("User UID:", userUid);  // Log the user's UID
    console.log("User Area:", userArea);
    console.log("Selected Service:", service);

    if (loading) {
        return <div>Loading providers...</div>;
    }

    return (
        <div>
            <h2>Providers for "{service}"</h2>
            <p>User UID: {userUid}</p>  {/* Display the user's UID */}
            <p>User Area: {userArea}</p> {/* Display the user's area */}
            <p>Querying for providers in the area: {userArea}</p> {/* Show the queried area */}
            <ul>
                {providers.length === 0 ? (
                    <li>No providers found for this service in your area.</li>
                ) : (
                    providers.map(provider => (
                        <li key={provider.id}>
                            {provider.name} - Area: {provider.area} {/* Display the area of each provider */}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ProvidersList;

