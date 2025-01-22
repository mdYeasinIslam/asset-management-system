// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjz_jHhTaCXTc4B2jStB9lVxr4jtVZNJU",
  authDomain: "asset-management-system-8b8e1.firebaseapp.com",
  projectId: "asset-management-system-8b8e1",
  storageBucket: "asset-management-system-8b8e1.firebasestorage.app",
  messagingSenderId: "449647343468",
  appId: "1:449647343468:web:174e7b8833fdca21bfe549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth