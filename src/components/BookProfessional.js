// import React, { useState } from 'react';
// import './BookingPage.css'; // Assuming you have a separate CSS file for styling

// const BookingPage = ({ selectedService }) => { // Accept selectedService as a prop
//   const [preferredTime, setPreferredTime] = useState('');
//   const [message, setMessage] = useState('');

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     // Check if the preferred time is selected
//     if (!preferredTime) {
//       setMessage('Please select a preferred time.');
//       return;
//     }

//     // Auto-assign a professional based on the selected service and time (dummy logic)
//     const assignedProfessional = await autoAssignProfessional(selectedService, preferredTime);
    
//     // Display confirmation message
//     if (assignedProfessional) {
//       setMessage(`Booking successful! Professional ${assignedProfessional.name} has been assigned to your booking.`);
//     } else {
//       setMessage('No available professionals at the selected time. Please try again later.');
//     }
//   };

//   const autoAssignProfessional = (service, time) => {
//     // Dummy professional assignment logic (in a real app, this would query your database)
//     const professionals = [
//       { id: 1, name: 'John Doe', available: true },
//       { id: 2, name: 'Jane Smith', available: true },
//       { id: 3, name: 'Alice Johnson', available: false }, // Not available
//     ];

//     // Find an available professional for the selected service
//     const assigned = professionals.find((prof) => prof.available);
//     return assigned || null; // Return assigned professional or null if none are available
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book a Service</h1>
//       <p><strong>Selected Service:</strong> {selectedService}</p> {/* Display the selected service */}
      
//       <form onSubmit={handleBooking}>
//         <div className="form-group">
//           <label htmlFor="preferredTime">Preferred Time:</label>
//           <input
//             type="datetime-local"
//             id="preferredTime"
//             value={preferredTime}
//             onChange={(e) => setPreferredTime(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="btn">Book Now</button>
//       </form>

//       {message && <p className="booking-message">{message}</p>}
//     </div>
//   );
// };

// export default BookingPage;


// src/components/BookProfessional.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css'; // Import specific styles if needed

// const BookProfessional = () => {
//   const location = useLocation();
//   const { selectedService } = location.state || { selectedService: 'Default Service' };
  
//   const [bookingDate, setBookingDate] = useState('');
//   const [bookingTime, setBookingTime] = useState('');

//   const handleBooking = (e) => {
//     e.preventDefault();
//     // Handle booking logic here (e.g., send booking request to the server)
//     console.log(`Booked ${selectedService} on ${bookingDate} at ${bookingTime}`);
//   };

//   return (
//     <div className="booking-container">
//       <header className="header">
//         <h1>Book a Professional</h1>
//       </header>

//       <main className="booking-content">
//         <h2>Service Selected: {selectedService}</h2>
//         <form onSubmit={handleBooking} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="date">Select Date:</label>
//             <input
//               type="date"
//               id="date"
//               value={bookingDate}
//               onChange={(e) => setBookingDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Select Time:</label>
//             <input
//               type="time"
//               id="time"
//               value={bookingTime}
//               onChange={(e) => setBookingTime(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">Confirm Booking</button>
//         </form>
//       </main>

//       <footer className="footer">
//         {/* Footer content, if applicable */}
//       </footer>
//     </div>
//   );
// };

// export default BookProfessional;



// src/components/BookProfessional.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css'; // Import specific styles if needed

// const BookProfessional = () => {
//   const location = useLocation();
//   const { selectedService } = location.state || { selectedService: 'Default Service' };
  
//   const [bookingDate, setBookingDate] = useState('');
//   const [bookingTime, setBookingTime] = useState('');

//   const handleBooking = (e) => {
//     e.preventDefault();
//     // Handle booking logic here (e.g., send booking request to the server)
//     console.log(`Booked ${selectedService} on ${bookingDate} at ${bookingTime}`);
//   };

//   return (
//     <div className="booking-container">
//       <header className="header">
//         <h1>Book a Professional</h1>
//       </header>

//       <main className="booking-content">
//         <h2>Service Selected: {selectedService}</h2>
//         <form onSubmit={handleBooking} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="date">Select Date:</label>
//             <input
//               type="date"
//               id="date"
//               value={bookingDate}
//               onChange={(e) => setBookingDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Select Time:</label>
//             <input
//               type="time"
//               id="time"
//               value={bookingTime}
//               onChange={(e) => setBookingTime(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">Confirm Booking</button>
//         </form>
//       </main>

//       <footer className="footer">
//         {/* Footer content, if applicable */}
//       </footer>
//     </div>
//   );
// };

// export default BookProfessional;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css'; // Import specific styles if needed

// const BookProfessional = () => {
//   const location = useLocation();
//   const { selectedService } = location.state || { selectedService: { title: 'Default Service' } }; // Default to prevent errors if no state

//   const [bookingDate, setBookingDate] = useState('');
//   const [bookingTime, setBookingTime] = useState('');

//   const handleBooking = (e) => {
//     e.preventDefault();
//     // Handle booking logic here (e.g., send booking request to the server)
//     console.log(`Booked ${selectedService.title} on ${bookingDate} at ${bookingTime}`);
//   };

//   return (
//     <div className="booking-container">
//       <header className="header">
//         <h1>Book a Professional</h1>
//       </header>

//       <main className="booking-content">
//         <h2>Service Selected: {selectedService.title}</h2> {/* Display the selected service */}
//         <form onSubmit={handleBooking} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="date">Select Date:</label>
//             <input
//               type="date"
//               id="date"
//               value={bookingDate}
//               onChange={(e) => setBookingDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Select Time:</label>
//             <input
//               type="time"
//               id="time"
//               value={bookingTime}
//               onChange={(e) => setBookingTime(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">Confirm Booking</button>
//         </form>
//       </main>

//       <footer className="footer">
//         {/* Footer content, if applicable */}
//       </footer>
//     </div>
//   );
// };

// export default BookProfessional;



//src/components/BookProfessional.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css'; // Import specific styles if needed

const BookProfessional = () => {
  const location = useLocation();
  const { selectedService } = location.state || { selectedService: { title: 'Default Service' } }; // Default to prevent errors if no state

  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., send booking request to the server)
    console.log(`Booked ${selectedService.title} on ${bookingDate} at ${bookingTime}`);
  };

  // Function to generate time slots with 1-hour intervals
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour <= 23; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      options.push(<option key={time} value={time}>{time}</option>);
    }
    return options;
  };

  return (
    <div className="booking-container">
      <header className="header">
        <h1>Book a Professional</h1>
      </header>

      <main className="booking-content">
        <h2>Service Selected: {selectedService.title}</h2> {/* Display the selected service */}
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
              {generateTimeOptions()} {/* Generate time options with 1-hour intervals */}
            </select>
          </div>
          <button type="submit" className="btn">Confirm Booking</button>
        </form>
      </main>

      <footer className="footer">
        {/* Footer content, if applicable */}
      </footer>
    </div>
  );
};

export default BookProfessional;
