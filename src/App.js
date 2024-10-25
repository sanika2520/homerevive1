// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoleSelection from './components/RoleSelection';
import CustomerLoginSignup from './components/CustomerLoginSignup';
import ProviderLoginSignup from './components/ProviderLoginSignup';
import AddData from './AddData';
import GetData from './GetData';
import UserDetails from './components/UserDetails'; 
import ProviderDetails from './components/ProviderDetails'; 
import CustomerHomePage from './components/CustomerHomePage';
import CustomerDashboard from './components/CustomerDashboard';
import BookProfessional from './components/BookProfessional';
import ProvidersList from './components/ProvidersList'; // Import the new component
import ServiceProviderDashboard from './components/ServiceProviderDashboard';
import FAQsCustomers from './components/FAQsCustomers';
import FAQsProviders from './components/FAQsProviders';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import BookingSummary from './components/BookingSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-signup" element={<RoleSelection />} />
        <Route path="/customer-login-signup" element={<CustomerLoginSignup />} />
        <Route path="/provider-login-signup" element={<ProviderLoginSignup />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/provider/:providerId" element={<ProviderDetails />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/get-data" element={<GetData />} />
        <Route path="/customer-home" element={<CustomerHomePage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/book-professional" element={<BookProfessional />} />
        <Route path="/providers-list" element={<ProvidersList />} /> {/* New route for ProvidersList */}
        <Route path="/serviceprovider-dashboard" element={<ServiceProviderDashboard />} />
        <Route path="/FAQsCustomers" element={<FAQsCustomers />} />
        <Route path="/FAQsProviders" element={<FAQsProviders />} />
        <Route path="/Terms" element={<TermsOfService />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
      </Routes>
    </Router>
  );
}

export default App;

