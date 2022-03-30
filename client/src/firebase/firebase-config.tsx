// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxcKFVK2_cos2kTQv3g4i_Z1i03VSEmOM",
  authDomain: "pet-me-up.firebaseapp.com",
  projectId: "pet-me-up",
  storageBucket: "pet-me-up.appspot.com",
  messagingSenderId: "907869999421",
  appId: "1:907869999421:web:bdb4ede5c9e2602d503554",
  measurementId: "G-BK22DDSGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)