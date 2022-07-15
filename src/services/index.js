import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1E7mZYbyxLeU9I5LRbSb42_g6HalBR9E",
  authDomain: "todosemilla.firebaseapp.com",
  projectId: "todosemilla",
  storageBucket: "todosemilla.appspot.com",
  messagingSenderId: "848926102298",
  appId: "1:848926102298:web:5a6972da50832ffe0a12a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)