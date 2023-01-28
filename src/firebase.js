// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7wAo49I-UJtDYmJ3L2Wx07TtvE0IsaA",
  authDomain: "todo-firebase-4414a.firebaseapp.com",
  databaseURL: "https://todo-firebase-4414a-default-rtdb.firebaseio.com",
  projectId: "todo-firebase-4414a",
  storageBucket: "todo-firebase-4414a.appspot.com",
  messagingSenderId: "366339299625",
  appId: "1:366339299625:web:34cc095a3e9a6e6f6dbf38",
  measurementId: "G-YEXVFSNPBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
//const analytics = getAnalytics(app);