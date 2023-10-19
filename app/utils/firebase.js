// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Firebase,
  authDomain: "blog-401714.firebaseapp.com",
  projectId: "blog-401714",
  storageBucket: "blog-401714.appspot.com",
  messagingSenderId: "1083079725886",
  appId: "1:1083079725886:web:25b9db207bba2a90b1d26f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
