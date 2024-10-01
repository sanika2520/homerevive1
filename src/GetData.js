// src/GetData.js
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const GetData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(usersArray);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetData;
