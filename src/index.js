import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5kLNPK2BPAVQIhC9K0CKnIfuR-Bwqm0g",
  authDomain: "coolcriminal-9b003.firebaseapp.com",
  projectId: "coolcriminal-9b003",
  storageBucket: "coolcriminal-9b003.firebasestorage.app",
  messagingSenderId: "1031125615221",
  appId: "1:1031125615221:web:9f20f45b050b5ca730ae3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

