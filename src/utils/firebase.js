// src/utils/firebase.js
// Firebase 설정
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS2cdIvwE8RuZXdAgCL-QE6tAYobYeixw",
  authDomain: "word-practice-app.firebaseapp.com",
  projectId: "word-practice-app",
  storageBucket: "word-practice-app.firebasestorage.app",
  messagingSenderId: "489669791875",
  appId: "1:489669791875:web:45291b0005ac5913068bb6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
