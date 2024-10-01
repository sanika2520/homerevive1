// src/AddData.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'users'), { name, email });
      console.log('Document written with ID: ', name);
      setName('');
      setEmail('');
    } catch (e) {
      setError('Error adding document: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddData;
