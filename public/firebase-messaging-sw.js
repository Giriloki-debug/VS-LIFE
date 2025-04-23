// public/firebase-messaging-sw.js

// Import Firebase SDK for the service worker (Use Firebase v9.6.1 for compatibility)
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Initialize Firebase in the service worker with your Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCYDwCDpYoFSt3a5GGHwDkEAHgw_B0VB14",
  authDomain: "fir-f7ef1.firebaseapp.com",
  projectId: "fir-f7ef1",
  storageBucket: "fir-f7ef1.appspot.com",
  messagingSenderId: "246429334563",
  appId: "1:246429334563:web:f12bbbf8b19e72f46f8596",
  measurementId: "G-H5NPHMZ86Z"
});

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
