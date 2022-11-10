// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo0SNee89qs8VHFiEByN5vuWVx1qV5CCk",
    authDomain: "lunch-zone-cad89.firebaseapp.com",
    projectId: "lunch-zone-cad89",
    storageBucket: "lunch-zone-cad89.appspot.com",
    messagingSenderId: "728993401805",
    appId: "1:728993401805:web:7bd2a35619416b1c1cd284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;