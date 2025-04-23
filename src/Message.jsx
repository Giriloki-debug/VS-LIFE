// src/App.jsx
import React, { useEffect, useState } from 'react';
import { messaging, getToken, onMessage } from './Firebase';

function Message() {
  const [message, setMessage] = useState(null);

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const currentToken = await getToken(messaging, {
          vapidKey: 'BE6NFm3dTE-HAINjn1lwEgj3IxW4nVoZYLR41I-zMw-P9RKuAnuqx4A7_Hm-kzrccqX8SMB6eRcUyViqjRwxwcc' // Replace with your VAPID key
        });
  
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          // Send the token to your server
        } else {
          console.log('No registration token available.');
        }
      } else {
        console.log('Notification permission denied');
      }
    } catch (error) {
      console.error('Error getting permission or token:', error);
    }
  };
  

  // Handle incoming messages
  useEffect(() => {
    // Request permission on mount
    requestNotificationPermission();

    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground:', payload);
      setMessage(payload.notification);
    });
  }, []);

  return (
    <div>
      <h1>React Firebase Cloud Messaging</h1>
      {message && (
        <div>
          <h3>{message.title}</h3>
          <p>{message.body}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
