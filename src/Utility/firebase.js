// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxrjARAxCKwA-ZMsAt5_ZIvMoEIa4LQI",
  authDomain: "project-2e537.firebaseapp.com",
  projectId: "project-2e537",
  storageBucket: "project-2e537.firebasestorage.app",
  messagingSenderId: "287995675628",
  appId: "1:287995675628:web:f173e8ffba989f390476c9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
