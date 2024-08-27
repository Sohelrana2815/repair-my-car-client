import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIkzNwAbbOtoCteAzyfs6aX0f6X4ZIDok",
  authDomain: "repair-my-car-980d8.firebaseapp.com",
  projectId: "repair-my-car-980d8",
  storageBucket: "repair-my-car-980d8.appspot.com",
  messagingSenderId: "382795563838",
  appId: "1:382795563838:web:41e001123d3bbcc0e9626f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
