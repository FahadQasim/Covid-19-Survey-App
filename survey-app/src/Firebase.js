// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiVxhv3cwehAeFHwePLH2Z9ulycqeH_kU",
  authDomain: "survey-app-cd822.firebaseapp.com",
  projectId: "survey-app-cd822",
  storageBucket: "survey-app-cd822.appspot.com",
  messagingSenderId: "671844486757",
  appId: "1:671844486757:web:ff031eca3d9c7d307a808c",
  measurementId: "G-WPS58QZXQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();