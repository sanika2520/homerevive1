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
    for (let hour = 8; hour <= 22; hour++) {
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