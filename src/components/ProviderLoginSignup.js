// import React, { useState } from 'react';
// import { auth, db } from '../firebaseConfig'; // Adjust the import path if necessary
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';
// import './LoginSignup.css';

// const ProviderLoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [area, setArea] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [state, setState] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [services, setServices] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const toggleForm = () => setIsLogin(!isLogin);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     if (isLogin) {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         // Handle successful login (e.g., redirect)
//       } catch (error) {
//         setError('Error logging in: ' + error.message);
//       }
//     } else {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         await setDoc(doc(db, 'providers', user.uid), {
//           name,
//           surname,
//           email,
//           phone,
//           area,
//           city,
//           pincode,
//           state,
//           aadhar,
//           services,
//           createdAt: new Date(),
//         });

//         console.log('Provider signed up and data saved:', user.uid);
//         // Reset form
//         setName('');
//         setSurname('');
//         setEmail('');
//         setPassword('');
//         setPhone('');
//         setArea('');
//         setCity('');
//         setPincode('');
//         setState('');
//         setAadhar('');
//         setServices('');
//       } catch (error) {
//         setError('Error signing up: ' + error.message);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="form-container">
//       <h1>{isLogin ? "Provider Login" : "Provider Signup"}</h1>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//             <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
//           </>
//         )}
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
//         {!isLogin && (
//           <>
//             <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
//             <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
//             <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
//             <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder="Aadhar Card Number" required />
//             <select value={services} onChange={(e) => setServices(e.target.value)} required>
//               <option value="">Select Services</option>
//               <option value="plumbing">Plumbing</option>
//               <option value="electrician">Electrician</option>
//               <option value="electronicRepair">Electronic Repair</option>
//               <option value="carpentry">Carpentry</option>
//             </select>
//           </>
//         )}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Processing...' : (isLogin ? "Login" : "Signup")}
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button onClick={toggleForm}>
//         {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
//       </button>
//     </div>
//   );
// };

// export default ProviderLoginSignup;

// import React, { useState } from 'react';
// import { auth, db } from '../firebaseConfig'; // Adjust the import path if necessary
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';
// import './LoginSignup.css';

// const ProviderLoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState(''); // Keep the phone state
//   const [area, setArea] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [state, setState] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [services, setServices] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const toggleForm = () => setIsLogin(!isLogin);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     if (isLogin) {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         // Handle successful login (e.g., redirect)
//       } catch (error) {
//         setError('Error logging in: ' + error.message);
//       }
//     } else {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         await setDoc(doc(db, 'providers', user.uid), {
//           name,
//           surname,
//           email,
//           phone, // Include phone in signup
//           area,
//           city,
//           pincode,
//           state,
//           aadhar,
//           services,
//           createdAt: new Date(),
//         });

//         console.log('Provider signed up and data saved:', user.uid);
//         // Reset form
//         setName('');
//         setSurname('');
//         setEmail('');
//         setPassword('');
//         setPhone(''); // Reset phone
//         setArea('');
//         setCity('');
//         setPincode('');
//         setState('');
//         setAadhar('');
//         setServices('');
//       } catch (error) {
//         setError('Error signing up: ' + error.message);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="form-container">
//       <h1>{isLogin ? "Provider Login" : "Provider Signup"}</h1>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//             <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required /> {/* Render phone input only for signup */}
//           </>
//         )}
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         {!isLogin && (
//           <>
//             <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
//             <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
//             <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
//             <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder="Aadhar Card Number" required />
//             <select value={services} onChange={(e) => setServices(e.target.value)} required>
//               <option value="">Select Services</option>
//               <option value="plumbing">Plumbing</option>
//               <option value="electrician">Electrician</option>
//               <option value="electronicRepair">Electronic Repair</option>
//               <option value="carpentry">Carpentry</option>
//             </select>
//           </>
//         )}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Processing...' : (isLogin ? "Login" : "Signup")}
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button onClick={toggleForm}>
//         {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
//       </button>
//     </div>
//   );
// };

// export default ProviderLoginSignup;

// src/components/ProviderLoginSignup.js
import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Adjust the import path if necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

const ProviderLoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [services, setServices] = useState('');
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

        // Redirect to provider details page
        navigate(`/provider/${userId}`);
      } catch (error) {
        setError('Error logging in: ' + error.message);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'providers', user.uid), {
          name,
          surname,
          email,
          phone,
          area,
          city,
          pincode,
          state,
          aadhar,
          services,
          createdAt: new Date(),
        });

        console.log('Provider signed up and data saved:', user.uid);
        // Reset form
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setPhone('');
        setArea('');
        setCity('');
        setPincode('');
        setState('');
        setAadhar('');
        setServices('');
      } catch (error) {
        setError('Error signing up: ' + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Provider Login" : "Provider Signup"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
          </>
        )}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {!isLogin && (
          <>
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" required />
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
            <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder="Aadhar Card Number" required />
            <select value={services} onChange={(e) => setServices(e.target.value)} required>
              <option value="">Select Services</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrician">Electrician</option>
              <option value="electronicRepair">Electronic Repair</option>
              <option value="carpentry">Carpentry</option>
            </select>
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

export default ProviderLoginSignup;
