import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAN9mPrRpd218EzUrqQj1dShkJ4zdjxC9Q",
  authDomain: "missmore-24dbd.firebaseapp.com",
  projectId: "missmore-24dbd",
  storageBucket: "missmore-24dbd.firebasestorage.app",
  messagingSenderId: "598961455523",
  appId: "1:598961455523:web:37e204dae2a54c8d2c5a16",
  measurementId: "G-LXZ5B05VTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth (THIS IS WHAT YOU NEED)
export const auth = getAuth(app);

// Analytics (optional)
const analytics = getAnalytics(app);