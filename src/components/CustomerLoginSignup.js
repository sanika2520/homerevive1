// src/components/CustomerLoginSignup.js
/*
import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Adjust the import path if necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

const CustomerLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Redirect to user details page
        navigate(`/user/${userId}`);
      } catch (error) {
        setError('Error logging in: ' + error.message);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          name,
          surname,
          email,
          mobile,
          address,
          area,
          city,
          pincode,
          state,
          createdAt: new Date(),
        });

        console.log('User signed up and data saved:', user.uid);
        // Reset form
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setMobile('');
        setAddress('');
        setArea('');
        setCity('');
        setPincode('');
        setState('');
      } catch (error) {
        setError('Error signing up: ' + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Customer Login" : "Customer Signup"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
          </>
        )}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" required />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
          </>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : (isLogin ? "Login" : "Signup")}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default CustomerLoginSignup;
*/

// src/components/CustomerLoginSignup.js

import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const CustomerLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Redirect to the customer dashboard after successful login
        navigate('/customer-dashboard');
      } catch (error) {
        setError('Error logging in: ' + error.message);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          name,
          surname,
          email,
          mobile,
          address,
          area,
          city,
          pincode,
          state,
          createdAt: new Date(),
        });

        // Reset form and navigate to the dashboard
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setMobile('');
        setAddress('');
        setArea('');
        setCity('');
        setPincode('');
        setState('');
        navigate('/customer-dashboard'); // Redirect to the customer dashboard
      } catch (error) {
        setError('Error signing up: ' + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Customer Login" : "Customer Signup"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
          </>
        )}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" required />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
          </>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : (isLogin ? "Login" : "Signup")}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default CustomerLoginSignup;
