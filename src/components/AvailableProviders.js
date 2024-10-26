// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const { pincode, serviceTitle } = location.state || {}; // Get pincode and service title from state
//     const [providers, setProviders] = useState([]);
//     const [error, setError] = useState(null); // State for error handling

//     useEffect(() => {
//         const fetchProviders = async () => {
//             try {
//                 console.log("Fetching providers for pincode:", pincode, "and service:", serviceTitle);
//                 const providerRef = collection(db, 'providers');
//                 const providerQuery = query(
//                     providerRef,
//                     where('pincode', '==', pincode),
//                     where('services', '==', serviceTitle) // Filter by service title
//                 );
//                 const providerSnapshot = await getDocs(providerQuery);

//                 const providersData = providerSnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data(),
//                 }));

//                 console.log("Fetched Providers Data:", providersData);

//                 setProviders(providersData);
//                 console.log("Filtered Providers:", providersData);
//             } catch (error) {
//                 console.error("Error fetching providers: ", error);
//                 setError("Error fetching providers. Please try again.");
//             }
//         };

//         if (pincode && serviceTitle) {
//             fetchProviders();
//         }
//     }, [pincode, serviceTitle]);

//     return (
//         <div className="providers-container">
//             <h2>Available Providers</h2>
//             {error && <p className="error">{error}</p>}
//             {providers.length > 0 ? (
//                 providers.map((provider) => (
//                     <div key={provider.id} className="provider-card">
//                         <h3>{provider.name}</h3>
//                         <p><strong>Service:</strong> {provider.services}</p>
//                         <p><strong>Contact:</strong> {provider.phone}</p>
//                         <p><strong>Location:</strong> {provider.area}</p>
//                         <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
//                             View Details
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No providers found for the entered pincode and selected service.</p>
//             )}
//         </div>
//     );
// };

// export default AvailableProviders;


// // src/components/AvailableProviders.js
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pincode } = location.state;
//     const [providers, setProviders] = useState([]);

//     useEffect(() => {
//         const fetchProviders = async () => {
//             const providerRef = collection(db, 'providers');
//             const providerQuery = query(providerRef, where('pincode', '==', pincode));
//             const providerSnapshot = await getDocs(providerQuery);
//             const providersData = providerSnapshot.docs.map(doc => doc.data());
//             setProviders(providersData);
//         };

//         fetchProviders();
//     }, [pincode]);

//     return (
//         <div className="providers-container">
//             <h2>Available Providers</h2>
//             {providers.length > 0 ? (
//                 providers.map((provider, index) => (
//                     <div key={index} className="provider-card">
//                         <h3>{provider.name}</h3>
//                         <p><strong>Service:</strong> <div>{Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</div>
// </p>
//                         <p><strong>Contact:</strong> {provider.phone}</p>
//                         <p><strong>Location:</strong> {provider.area}</p>
//                         <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
//                             View Details
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No providers found for the entered pincode.</p>
//             )}
//         </div>
//     );
// };

// export default AvailableProviders;



// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pincode, service } = location.state; // Destructure service
//     const [providers, setProviders] = useState([]);

//     useEffect(() => {
//         const fetchProviders = async () => {
//             const providerRef = collection(db, 'providers');
//             // Update the query to include the service filter
//             const providerQuery = query(
//                 providerRef,
//                 where('pincode', '==', pincode),
//                 where('services', '==', service) // Add service filter
//             );

//             const providerSnapshot = await getDocs(providerQuery);
//             const providersData = providerSnapshot.docs.map(doc => doc.data());
//             setProviders(providersData);
//         };

//         fetchProviders();
//     }, [pincode, service]); // Add service to the dependency array

//     return (
//         <div className="providers-container">
//             <h2>Available Providers</h2>
//             {providers.length > 0 ? (
//                 providers.map((provider, index) => (
//                     <div key={index} className="provider-card">
//                         <h3>{provider.name}</h3>
//                         <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
//                         <p><strong>Contact:</strong> {provider.phone}</p>
//                         <p><strong>Location:</strong> {provider.area}</p>
//                         <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
//                             View Details
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No providers found for the entered pincode and selected service.</p>
//             )}
//         </div>
//     );
// };

// export default AvailableProviders;


// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import './AvailableProviders.css';

// const AvailableProviders = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pincode, service } = location.state || {}; // Add fallback
//     const [providers, setProviders] = useState([]);

//     // Debugging logs
//     console.log("Pincode:", pincode);
//     console.log("Service:", service);

//     useEffect(() => {
//         if (!pincode || !service) {
//             console.error("Missing pincode or service in state");
//             return; // Exit if any are missing
//         }

//         const fetchProviders = async () => {
//             const providerRef = collection(db, 'providers');
//             const providerQuery = query(
//                 providerRef,
//                 where('pincode', '==', pincode),
//                 where('services', '==', service) // Add service filter
//             );

//             try {
//                 const providerSnapshot = await getDocs(providerQuery);
//                 const providersData = providerSnapshot.docs.map(doc => doc.data());
//                 setProviders(providersData);
//             } catch (error) {
//                 console.error("Error fetching providers:", error);
//             }
//         };

//         fetchProviders();
//     }, [pincode, service]); // Add service to the dependency array

//     return (
//         <div className="providers-container">
//             <h2>Available Providers</h2>
//             {providers.length > 0 ? (
//                 providers.map((provider, index) => (
//                     <div key={index} className="provider-card">
//                         <h3>{provider.name}</h3>
//                         <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
//                         <p><strong>Contact:</strong> {provider.phone}</p>
//                         <p><strong>Location:</strong> {provider.area}</p>
//                         <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
//                             View Details
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No providers found for the entered pincode and selected service.</p>
//             )}
//         </div>
//     );
// };

// export default AvailableProviders;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './AvailableProviders.css';

const AvailableProviders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pincode, service } = location.state || {}; // Add fallback
    const [providers, setProviders] = useState([]);

    // Debugging logs
    console.log("Pincode:", pincode);
    console.log("Service:", service);

    useEffect(() => {
        if (!pincode || !service) {
            console.error("Missing pincode or service in state");
            return; // Exit if any are missing
        }

        const fetchProviders = async () => {
            const providerRef = collection(db, 'providers');
            const providerQuery = query(
                providerRef,
                where('pincode', '==', pincode),
                where('services', '==', service) // Add service filter
            );

            try {
                const providerSnapshot = await getDocs(providerQuery);
                const providersData = providerSnapshot.docs.map(doc => doc.data());
                setProviders(providersData);
            } catch (error) {
                console.error("Error fetching providers:", error);
            }
        };

        fetchProviders();
    }, [pincode, service]); // Add service to the dependency array

    return (
        <div className="providers-container">
            <h2>Available Providers</h2>
            {/* Display service and pincode */}
            <div className="info-header">
                <h3>Service: {service}</h3>
                <h3>Pincode: {pincode}</h3>
            </div>
            {providers.length > 0 ? (
                providers.map((provider, index) => (
                    <div key={index} className="provider-card">
                        <h3>{provider.name}</h3>
                        <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
                        <p><strong>Contact:</strong> {provider.phone}</p>
                        <p><strong>Location:</strong> {provider.area}</p>
                        <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
                            View Details
                        </button>
                    </div>
                ))
            ) : (
                <p>No providers found for the entered pincode and selected service.</p>
            )}
        </div>
    );
};

export default AvailableProviders;
