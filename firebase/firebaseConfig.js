import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd-vdnlayT07xYmexmCVlEBVqRadswJQ4",
  authDomain: "final-project-8217c.firebaseapp.com",
  projectId: "final-project-8217c",
  storageBucket: "final-project-8217c.appspot.com",
  messagingSenderId: "852349577052",
  appId: "1:852349577052:web:2ec9477061dec9ce754399",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
