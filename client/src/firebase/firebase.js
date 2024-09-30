import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-authenticator-a2934.firebaseapp.com",
  projectId: "web-authenticator-a2934",
  storageBucket: "web-authenticator-a2934.appspot.com",
  messagingSenderId: "589544194521",
  appId: "1:589544194521:web:d7305e9ed714045d4799c8",
  measurementId: "G-0Z5D0VZL0P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);