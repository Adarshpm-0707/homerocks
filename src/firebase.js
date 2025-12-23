// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config (from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDDyjivw0cVd-qYwMYKTb3-8eMY48XAk1U",
  authDomain: "homerocks-b747b.firebaseapp.com",
  projectId: "homerocks-b747b",
  storageBucket: "homerocks-b747b.appspot.com",
  messagingSenderId: "904735743842",
  appId: "1:904735743842:web:344173bee58d9b7accd63b",
  measurementId: "G-TEHR1CYSX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export app (important)
export { app };
