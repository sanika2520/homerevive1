// src/components/ProviderDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ProviderDetails = () => {
  const { providerId } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProviderDetails = async () => {
    try {
      const docRef = doc(db, 'providers', providerId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProvider(docSnap.data());
      } else {
        setError('No provider found!');
      }
    } catch (err) {
      setError('Error fetching provider details: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviderDetails();
  }, [providerId]);

  return (
    <div>
      {loading ? (
        <p>Loading provider details...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        provider && (
          <div>
            <h2>Provider Details</h2>
            <p>Name: {provider.name} {provider.surname}</p>
            <p>Email: {provider.email}</p>
            <p>Phone: {provider.phone}</p>
            <p>Area: {provider.area}</p>
            <p>City: {provider.city}</p>
            <p>Pincode: {provider.pincode}</p>
            <p>State: {provider.state}</p>
            <p>Aadhar: {provider.aadhar}</p>
            <p>Services Offered: {provider.services}</p>
            <p>Joined: {provider.createdAt.toDate().toString()}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ProviderDetails;
