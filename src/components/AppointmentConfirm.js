import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AppointmentConfirmation.css';

const AppointmentConfirmation = () => {
    const location = useLocation();
    const { provider } = location.state || {};

    return (
        <div className="confirmation-container">
            <header className="header">
                <h1>Appointment Confirmed!</h1>
            </header>
            <div className="confirmation-content">
                <p className="confirmation-message">
                    You have successfully booked an appointment with {provider.name}.
                </p>
                <div className="details">
                    <p><strong>Service:</strong> {Array.isArray(provider.services) ? provider.services.join(', ') : provider.services}</p>
                    <p><strong>Contact:</strong> {provider.phone}</p>
                    <p><strong>Location:</strong> {provider.area}</p>
                </div>
                <Link to="/customer-home">
                    <button className="return-button">Return to Home</button>
                </Link>
            </div>
            <footer className="footer">
                {/* Add footer links here if needed */}
            </footer>
        </div>
    );
};

export default AppointmentConfirmation;