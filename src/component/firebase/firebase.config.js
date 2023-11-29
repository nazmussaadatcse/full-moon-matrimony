// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAmJG6U-6iADOcutIdst-c4kPYVvPDcTs4",
  // authDomain: "full-moon-matrimony.firebaseapp.com",
  // projectId: "full-moon-matrimony",
  // storageBucket: "full-moon-matrimony.appspot.com",
  // messagingSenderId: "925226634581",
  // appId: "1:925226634581:web:8f0fa2394e3a6c391d33dc"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);