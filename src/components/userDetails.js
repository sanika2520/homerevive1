// UserDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUserDetails = async () => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        setError('No user found!');
      }
    } catch (err) {
      setError('Error fetching user details: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading user details...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        user && (
          <div>
            <h2>User Details</h2>
            <p>Name: {user.name} {user.surname}</p>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Address: {user.address}</p>
            <p>Area: {user.area}</p>
            <p>City: {user.city}</p>
            <p>Pincode: {user.pincode}</p>
            <p>State: {user.state}</p>
            <p>Joined: {user.createdAt.toDate().toString()}</p>
          </div>
        )
      )}
    </div>
  );
};

export default UserDetails;
