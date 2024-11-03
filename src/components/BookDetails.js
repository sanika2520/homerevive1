// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const BookDetails = ({ bookingId }) => {
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const bookingDocRef = doc(db, 'bookings', bookingId);
        const bookingSnap = await getDoc(bookingDocRef);

        if (bookingSnap.exists()) {
          setBooking(bookingSnap.data());
          
          // Use the name from the booking to find the user document
          const userDocRef = doc(db, 'users', bookingSnap.data().userUid);
          const userSnap = await getDoc(userDocRef);
          
          if (userSnap.exists()) {
            setUser(userSnap.data());
          } else {
            setError('User not found.');
          }
        } else {
          setError('Booking not found.');
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        setError('Error fetching details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [bookingId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Booking ID:</strong> {booking.id}</p>
      <p><strong>Service:</strong> {booking.serviceTitle}</p>
      <p><strong>Date:</strong> {booking.bookingDate}</p>
      <h3>Customer Details</h3>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </>
      ) : (
        <p>No customer data available.</p>
      )}
    </div>
  );
};

export default BookDetails;