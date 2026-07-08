// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNhRNhhBjJzjWs5VkwsOAQguVVEo046F0",
  authDomain: "flora-form.firebaseapp.com",
  projectId: "flora-form",
  storageBucket: "flora-form.firebasestorage.app",
  messagingSenderId: "18897898006",
  appId: "1:18897898006:web:820e424d6180f593fdc337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
