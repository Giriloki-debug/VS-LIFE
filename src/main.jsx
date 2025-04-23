// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken } from 'firebase/messaging';

// // Firebase configuration (use your own Firebase project credentials)
// const firebaseConfig = {
//   apiKey: "AIzaSyCYDwCDpYoFSt3a5GGHwDkEAHgw_B0VB14",
//   authDomain: "fir-f7ef1.firebaseapp.com",
//   projectId: "fir-f7ef1",
//   storageBucket: "fir-f7ef1.appspot.com",
//   messagingSenderId: "246429334563",
//   appId: "1:246429334563:web:f12bbbf8b19e72f46f8596",
//   measurementId: "G-H5NPHMZ86Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// // Register the service worker for Firebase messaging
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/firebase-messaging-sw.js')  // Ensure this path is correct
//     .then(function (registration) {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch(function (err) {
//       console.log('Service Worker registration failed:', err);
//     });
// }

// // Request notification permission and get FCM token
// const requestNotificationPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       const currentToken = await getToken(messaging, {
//         vapidKey: 'BE6NFm3dTE-HAINjn1lwEgj3IxW4nVoZYLR41I-zMw-P9RKuAnuqx4A7_Hm-kzrccqX8SMB6eRcUyViqjRwxwcc'  // Replace with your VAPID key
//       });

//       if (currentToken) {
//         console.log('FCM Token:', currentToken);
//         // Send the token to your server for later use
//       } else {
//         console.log('No registration token available.');
//       }
//     } else {
//       console.log('Notification permission denied');
//     }
//   } catch (error) {
//     console.error('Error getting permission or token:', error);
//   }
// };

// // Request permission when a user clicks a button
// const handleRequestPermission = () => {
//   requestNotificationPermission();
// };

// Render the App and include a button for requesting permission
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
