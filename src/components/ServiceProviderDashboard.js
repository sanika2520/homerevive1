// //src/components/ServiceProviderDashboard.js
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { db, auth } from '../firebaseConfig'; // Import Firebase auth and db
// import './ServiceProviderDashboard.css';
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';
// import userProfile from '../assets/user-placeholder.png.webp';
// import { doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore'; // Firestore imports

// const ServiceProviderDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [accountHolder, setAccountHolder] = useState(null);
//   const [services, setServices] = useState([]);
//   const [selectedServiceId, setSelectedServiceId] = useState(null);
//   const [professionals, setProfessionals] = useState([]);
//   const [showFindButton, setShowFindButton] = useState(false);
//   const [editWorkingHours, setEditWorkingHours] = useState(false);
//   const [specificAvailability, setSpecificAvailability] = useState({});
//   const [selectedDate, setSelectedDate] = useState(''); // Track date for specific availability

//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const providerID = auth.currentUser ? auth.currentUser.uid : null; // Get the logged-in user's provider ID

//   // Default working hours (9:00 AM to 8:00 PM)
//   const defaultWorkingHours = {
//     start: '09:00',
//     end: '20:00',
//   };

//   // Fetch the account holder's profile details and default availability when the component mounts
//   useEffect(() => {
//     if (providerID) {
//       const fetchAccountHolderDetails = async () => {
//         try {
//           const providerDocRef = doc(db, 'providers', providerID);
//           const docSnap = await getDoc(providerDocRef);

//           if (docSnap.exists()) {
//             const providerData = docSnap.data();
//             setAccountHolder(providerData);

//             // Check if the working hours are already set, if not, set default hours
//             if (!providerData.workingHours) {
//               // Set default working hours in Firestore
//               await setDoc(providerDocRef, { workingHours: defaultWorkingHours }, { merge: true });
//               console.log("Default working hours set.");
//             }
//           } else {
//             console.error('No such document!');
//           }

//           // Check if the default availability already exists
//           const availabilityDocRef = doc(db, 'availability', providerID);
//           const availabilityDocSnap = await getDoc(availabilityDocRef);

//           if (!availabilityDocSnap.exists()) {
//             // If no availability exists, set the default working hours
//             await setDoc(availabilityDocRef, {
//               defaultAvailability: {
//                 start: '09:00',
//                 end: '20:00',
//               }
//             });
//           }
//         } catch (error) {
//           console.error('Error fetching account holder details:', error);
//         }
//       };

//       fetchAccountHolderDetails();
//     }
//   }, [providerID]); // Run this useEffect when providerID changes

//   // Dummy services for testing
//   useEffect(() => {
//     const dummyServices = [
//       { id: 1, title: 'Earnings', subServices: [] },
//       { id: 2, title: 'Past-Work', subServices: [] },
//       { id: 3, title: 'Upcoming-Work', subServices: [] },
//       { id: 4, title: 'New Request', subServices: [] },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const toggleProfileDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleJobClick = (serviceId) => {
//     setSelectedServiceId(serviceId);
//     setShowFindButton(true);
//   };

//   const handleViewJobDetails = async () => {
//     try {
//       const professionalsQuery = query(collection(db, 'providers'));
//       const querySnapshot = await getDocs(professionalsQuery);

//       const fetchedProfessionals = [];
//       querySnapshot.forEach((doc) => {
//         fetchedProfessionals.push(doc.data());
//       });

//       setProfessionals(fetchedProfessionals);
//     } catch (error) {
//       console.error('Error fetching professionals:', error);
//     }
//   };

//   const handleViewProfile = () => {
//     setShowProfile(true); // Show account holder's profile
//     setShowDropdown(false); // Close dropdown after clicking
//   };

//   const handleEditProfile = () => {
//     navigate('/provider-login-signup'); // Navigate to LoginSignup.js for editing
//   };

//   const handleLogoutClick = () => {
//     navigate('/'); // Navigate to home on logout
//   };

//   const handleEditWorkingHoursClick = () => {
//     setEditWorkingHours(true);
//     setShowDropdown(false);
//   };

//   // Handle specific availability for a date
//   const handleSpecificAvailabilityChange = (field, value) => {
//     setSpecificAvailability((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSpecificAvailabilitySubmit = async () => {
//     if (!providerID) {
//       alert('Provider ID not found.');
//       return;
//     }

//     try {
//       // Update specific date availability
//       if (selectedDate) {
//         const specificAvailabilityRef = doc(db, 'availability', providerID, 'specificDates', selectedDate);
//         await setDoc(specificAvailabilityRef, { specificAvailability }, { merge: true });
//         alert('Specific availability updated successfully!');
//       } else {
//         alert('Please select a date.');
//       }

//       setEditWorkingHours(false);
//     } catch (error) {
//       console.error('Error updating specific availability:', error);
//       alert('Failed to update specific availability.');
//     }
//   };

//   return (
//     <div className="service-provider-dashboard">
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item" onClick={() => navigate('/serviceprovider-dashboard')}>Home</div>
//           <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
//           <div className="profile" onClick={toggleProfileDropdown}>
//           <img src={userProfile} alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown active" ref={dropdownRef}>
//               <ul>
//                 <li onClick={handleViewProfile}>View Profile</li>
//                 <li>Account Settings</li>
//                 <li onClick={handleEditWorkingHoursClick}>Edit Specific Availability</li>
//                 <li onClick={handleLogoutClick}>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       <div className="service-selection-buttons">
//         <h2>Your Jobs</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`}
//                 onClick={() => handleJobClick(service.id)}
//               >
//                 {service.title}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {editWorkingHours && (
//         <div className="specific-availability-form">
//           <h3>Edit Specific Availability for a Date</h3>

//           {/* Date input for specific availability */}
//           <div className="specific-availability">
//             <h4>Select Date:</h4>
//             <input
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//             />
//             <label>Start Time:</label>
//             <input
//               type="time"
//               value={specificAvailability.start}
//               onChange={(e) => handleSpecificAvailabilityChange('start', e.target.value)}
//             />
//             <label>End Time:</label>
//             <input
//               type="time"
//               value={specificAvailability.end}
//               onChange={(e) => handleSpecificAvailabilityChange('end', e.target.value)}
//             />
//           </div>

//           <button onClick={handleSpecificAvailabilitySubmit} className="submit-button">
//             Save Availability
//           </button>
//         </div>
//       )}

//       {selectedServiceId && (
//         <div className="sub-services-list">
//           <h3>Available Information:</h3>
//           {services
//             .find(service => service.id === selectedServiceId)
//             .subServices.map(subService => (
//               <div key={subService.id} className="sub-service-card">
//                 <h4>{subService.title}</h4>
//               </div>
//             ))}
//         </div>
//       )}

//       {showFindButton && (
//         <div className="View Details">
//           <button onClick={handleViewJobDetails} className="View-Details">View Details</button>
//         </div>
//       )}

//       {showProfile && accountHolder && (
//         <div className="profile-details">
//           <h3>Account Holder Details:</h3>
//           <p>Name: {accountHolder.name}</p>
//           <p>Email: {accountHolder.email}</p>
//           <button onClick={handleEditProfile} className="edit-profile-button">Edit Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceProviderDashboard;


// src/components/ServiceProviderDashboard.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebaseConfig';
import './ServiceProviderDashboard.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';
import { doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore';

const ServiceProviderDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [accountHolder, setAccountHolder] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [showFindButton, setShowFindButton] = useState(false);
  const [editWorkingHours, setEditWorkingHours] = useState(false);
  const [specificAvailability, setSpecificAvailability] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const providerID = auth.currentUser ? auth.currentUser.uid : null;

  const defaultWorkingHours = {
    start: '09:00',
    end: '20:00',
  };

  useEffect(() => {
    if (providerID) {
      const fetchAccountHolderDetails = async () => {
        setLoading(true);
        try {
          const providerDocRef = doc(db, 'providers', providerID);
          const docSnap = await getDoc(providerDocRef);

          if (docSnap.exists()) {
            const providerData = docSnap.data();
            setAccountHolder(providerData);

            if (!providerData.workingHours) {
              await setDoc(providerDocRef, { workingHours: defaultWorkingHours }, { merge: true });
            }
          } else {
            setError('No such document!');
          }

          const availabilityDocRef = doc(db, 'availability', providerID);
          const availabilityDocSnap = await getDoc(availabilityDocRef);

          if (!availabilityDocSnap.exists()) {
            await setDoc(availabilityDocRef, { defaultAvailability: defaultWorkingHours });
          }
        } catch (error) {
          setError('Error fetching account holder details.');
        } finally {
          setLoading(false);
        }
      };

      fetchAccountHolderDetails();
    }
  }, [providerID]);

  useEffect(() => {
    const dummyServices = [
      { id: 1, title: 'Earnings', subServices: [] },
      { id: 2, title: 'Past Work', subServices: [] },
      { id: 3, title: 'Upcoming Work', subServices: [] },
      { id: 4, title: 'New Request', subServices: [] },
    ];
    setServices(dummyServices);
  }, []);

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleJobClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowFindButton(true);
  };

  const handleViewJobDetails = async () => {
    try {
      const professionalsQuery = query(collection(db, 'providers'));
      const querySnapshot = await getDocs(professionalsQuery);
      const fetchedProfessionals = [];
      querySnapshot.forEach((doc) => {
        fetchedProfessionals.push(doc.data());
      });
      setProfessionals(fetchedProfessionals);
    } catch (error) {
      setError('Error fetching professionals.');
    }
  };

  const handleViewProfile = () => {
    setShowProfile(true);
    setShowDropdown(false);
  };

  const handleLogoutClick = () => {
    navigate('/'); 
  };

  const handleEditWorkingHoursClick = () => {
    setEditWorkingHours(true);
    setShowDropdown(false);
  };

  const handleSpecificAvailabilityChange = (field, value) => {
    setSpecificAvailability((prev) => ({ ...prev, [field]: value }));
  };

  const handleSpecificAvailabilitySubmit = async () => {
    if (!providerID) {
      alert('Provider ID not found.');
      return;
    }

    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }

    try {
      const specificAvailabilityRef = doc(db, 'availability', providerID, 'specificDates', selectedDate);
      await setDoc(specificAvailabilityRef, { specificAvailability }, { merge: true });
      alert('Specific availability updated successfully!');
      setEditWorkingHours(false);
    } catch (error) {
      alert('Failed to update specific availability.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="service-provider-dashboard">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/serviceprovider-dashboard')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={toggleProfileDropdown}>
            <img src={userProfile} alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li onClick={handleViewProfile}>View Profile</li>
                <li>Account Settings</li>
                <li onClick={handleEditWorkingHoursClick}>Edit Specific Availability</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="service-selection-buttons">
        <h2>Your Jobs {providerID && ` (User ID: ${providerID}, Area: ${accountHolder?.area || 'N/A'})`}</h2>
        <div className="services-buttons">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <button
                className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`}
                onClick={() => handleJobClick(service.id)}
              >
                {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {editWorkingHours && (
        <div className="specific-availability-form">
          <h3>Edit Specific Availability for a Date</h3>
          <div className="specific-availability">
            <h4>Select Date:</h4>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <label>Start Time:</label>
            <input
              type="time"
              value={specificAvailability.start}
              onChange={(e) => handleSpecificAvailabilityChange('start', e.target.value)}
            />
            <label>End Time:</label>
            <input
              type="time"
              value={specificAvailability.end}
              onChange={(e) => handleSpecificAvailabilityChange('end', e.target.value)}
            />
          </div>
          <button onClick={handleSpecificAvailabilitySubmit} className="submit-button">
            Save Availability
          </button>
        </div>
      )}

      {selectedServiceId && (
        <div className="sub-services-list">
          <h3>Available Information:</h3>
          {services.find(service => service.id === selectedServiceId).subServices.map(subService => (
            <div key={subService.id} className="sub-service-card">
              <h4>{subService.title}</h4>
            </div>
          ))}
        </div>
      )}

      {showFindButton && (
        <div className="View Details">
          <button onClick={handleViewJobDetails} className="View-Details">View Details</button>
        </div>
      )}

      {showProfile && accountHolder && (
        <div className="profile-details">
          <h3>Account Holder Details:</h3>
          <p>Name: {accountHolder.name}</p>
          <p>Email: {accountHolder.email}</p>
          <p>Area: {accountHolder.area || 'N/A'}</p>
          <button>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderDashboard;
