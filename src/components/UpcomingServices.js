// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebaseConfig';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import './UpcomingServices.css'; // Import your CSS file

// const UpcomingServices = () => {
//   const [upcomingServices, setUpcomingServices] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUpcomingServices = async () => {
//       const userId = auth.currentUser ? auth.currentUser.uid : null;
//       if (!userId) {
//         setError('You must be logged in to view your upcoming services.');
//         return;
//       }

//       try {
//         const bookingsQuery = query(
//           collection(db, 'bookings'),
//           where('userUid', '==', userId)
//         );

//         const querySnapshot = await getDocs(bookingsQuery);
//         const services = [];
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const bookingDate = new Date(data.bookingDate);
//           const today = new Date();
//           if (bookingDate >= today) {
//             services.push({ id: doc.id, ...data });
//           }
//         });
//         setUpcomingServices(services);
//       } catch (err) {
//         console.error('Error fetching your upcoming services:', err);
//         setError('Error fetching your upcoming services.');
//       }
//     };

//     fetchUpcomingServices();
//   }, []);

//   return (
//     <div className="upcoming-services">
//       <h2>Upcoming Services</h2>
//       {error && <p className="error-message">{error}</p>}
//       {upcomingServices.length > 0 ? (
//         <ul>
//           {upcomingServices.map((service) => (
//             <li key={service.id}>
//               <p className="service-title">{service.serviceTitle}</p>
//               <p className="service-detail"><strong>Booking Date:</strong> {service.bookingDate}</p>
//               <p className="service-detail"><strong>Booking Time:</strong> {service.bookingTime}</p>
//               <p className="service-detail"><strong>Service:</strong> {service.subServiceTitle}</p>
//               <p className="service-detail"><strong>Provider:</strong> {service.providerName}</p>
              
//               {/* Add any other relevant details */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="no-services">No upcoming services found.</p>
//       )}
//     </div>
//   );
// };

// export default UpcomingServices;



// src/components/UpcomingServices.js
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import './UpcomingServices.css';

const UpcomingServices = () => {
  const [upcomingServices, setUpcomingServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUpcomingServices = async () => {
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (!userId) {
        setError('You must be logged in to view your upcoming services.');
        return;
      }

      try {
        // Fetch upcoming services
        const bookingsQuery = query(
          collection(db, 'bookings'),
          where('userUid', '==', userId)
        );

        const querySnapshot = await getDocs(bookingsQuery);
        const services = [];
        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          const bookingDate = new Date(data.bookingDate);
          const today = new Date();
          if (bookingDate >= today) {
            services.push({ id: doc.id, ...data });
          }
        }

        setUpcomingServices(services);

      } catch (err) {
        console.error('Error fetching your upcoming services:', err);
        setError('Error fetching your upcoming services.');
      }
    };

    fetchUpcomingServices();
  }, []);

  return (
    <div className="upcoming-services">
      <h2>Upcoming Services</h2>
      {error && <p className="error-message">{error}</p>}
      {upcomingServices.length > 0 ? (
        <ul>
          {upcomingServices.map((service) => (
            <li key={service.id} className="service-card">
              <p className="service-title">{service.serviceTitle}</p>
              <p className="service-detail"><strong>Booking Date:</strong> {service.bookingDate}</p>
              <p className="service-detail"><strong>Booking Time:</strong> {service.bookingTime}</p>
              <p className="service-detail"><strong>Service:</strong> {service.subServiceTitle}</p>
              <p className="service-detail"><strong>Professional:</strong> {service.providerName}</p>
              {/* Fetch provider details using providerName */}
              <ProviderDetails providerName={service.providerName} />
              
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-services">No upcoming services found.</p>
      )}
    </div>
  );
};

// New component to fetch provider details
const ProviderDetails = ({ providerName }) => {
  const [providerDetails, setProviderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProviderDetails = async () => {
      try {
        const providerQuery = query(collection(db, 'providers'), where('name', '==', providerName));
        const querySnapshot = await getDocs(providerQuery);
        if (!querySnapshot.empty) {
          const providerDoc = querySnapshot.docs[0];
          setProviderDetails(providerDoc.data());
        } else {
          setError('Provider not found.');
        }
      } catch (err) {
        console.error('Error fetching provider details:', err);
        setError('Error fetching provider details.');
      }
      setLoading(false);
    };

    fetchProviderDetails();
  }, [providerName]);

  if (loading) return <p>Loading provider details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {providerDetails && (
        <p className="service-detail"><strong>Phone No.:</strong> {providerDetails.phone}</p>
      )}
    </div>
  );
};

export default UpcomingServices;
