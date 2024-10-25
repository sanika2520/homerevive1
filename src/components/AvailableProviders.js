// src/components/AvailableProviders.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './AvailableProviders.css';

const AvailableProviders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pincode } = location.state;
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const fetchProviders = async () => {
            const providerRef = collection(db, 'providers');
            const providerQuery = query(providerRef, where('pincode', '==', pincode));
            const providerSnapshot = await getDocs(providerQuery);
            const providersData = providerSnapshot.docs.map(doc => doc.data());
            setProviders(providersData);
        };

        fetchProviders();
    }, [pincode]);

    return (
        <div className="providers-container">
            <h2>Available Providers</h2>
            {providers.length > 0 ? (
                providers.map((provider, index) => (
                    <div key={index} className="provider-card">
                        <h3>{provider.name}</h3>
                        <p><strong>Service:</strong> <div>{Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</div>
</p>
                        <p><strong>Contact:</strong> {provider.phone}</p>
                        <p><strong>Location:</strong> {provider.area}</p>
                        <button onClick={() => navigate(`/provider-details`, { state: { provider } })}>
                            View Details
                        </button>
                    </div>
                ))
            ) : (
                <p>No providers found for the entered pincode.</p>
            )}
        </div>
    );
};

export default AvailableProviders;
