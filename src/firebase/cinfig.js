import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdL2q6zhXobsd7FIKH08btAwHKbwIuNPA",
  authDomain: "shopit-758e5.firebaseapp.com",
  projectId: "shopit-758e5",
  storageBucket: "shopit-758e5.appspot.com",
  messagingSenderId: "566822302602",
  appId: "1:566822302602:web:25981cf5827a6a78a30e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)