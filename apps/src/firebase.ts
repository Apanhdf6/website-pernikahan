import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCnjzvdj6kTx_udkEoBVdzF6oRVV0j5p_U",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "undangan1-18c0f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "undangan1-18c0f",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "undangan1-18c0f.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "581590527015",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:581590527015:web:b238c2def693cc97de7202",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-3YGV2DEM52",
};

// Check if we have at least projectId to initialize firebase
const isFirebaseConfigured = !!firebaseConfig.projectId;

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
const db = app ? getFirestore(app) : null;

export { db, isFirebaseConfigured };

