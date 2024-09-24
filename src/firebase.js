// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHwj-hE1fqfMItiH3qRiwZjT6Q8Xmggs",
  authDomain: "homerevive1-fd6b0.firebaseapp.com",
  projectId: "homerevive1-fd6b0",
  storageBucket: "homerevive1-fd6b0.appspot.com",
  messagingSenderId: "422470296416",
  appId: "1:422470296416:web:49cb8396754a00fa65b405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the auth object
export { auth };