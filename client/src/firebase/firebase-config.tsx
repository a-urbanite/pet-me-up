
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import env from 'react-dotenv'


const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pet-me-up.firebaseapp.com",
  projectId: "pet-me-up",
  storageBucket: "pet-me-up.appspot.com",
  messagingSenderId: "907869999421",
  appId: env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-BK22DDSGTX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)