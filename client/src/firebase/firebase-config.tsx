// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import env from 'react-dotenv'

// env.config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// console.log(env.REACT_APP_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pet-me-up.firebaseapp.com",
  projectId: "pet-me-up",
  storageBucket: "pet-me-up.appspot.com",
  messagingSenderId: "907869999421",
  appId: env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-BK22DDSGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)