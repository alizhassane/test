// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA4zB-8JomQvdWIa55Rr-_6dKlqp_4iV3E",
  authDomain: "test-5fcbc.firebaseapp.com",
  projectId: "test-5fcbc",
  storageBucket: "test-5fcbc.appspot.com",
  messagingSenderId: "1025940587598",
  appId: "1:1025940587598:web:4c8c8fed25cd288b3baf1f",
  measurementId: "G-X1PCZB2638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export default getFirestore(app);

