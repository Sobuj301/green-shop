// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8I6aPesAnMkQFjSw4bxw2mYEkW8l1AQ",
  authDomain: "green-shop-ae610.firebaseapp.com",
  projectId: "green-shop-ae610",
  storageBucket: "green-shop-ae610.appspot.com",
  messagingSenderId: "498062776378",
  appId: "1:498062776378:web:bd98ee363418308f1dfd03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);