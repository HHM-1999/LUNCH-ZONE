// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuR_SS-I53JFyMKzlR8sVkF2uIZg-kMbk",
    authDomain: "lunch-zone.firebaseapp.com",
    projectId: "lunch-zone",
    storageBucket: "lunch-zone.appspot.com",
    messagingSenderId: "734834532463",
    appId: "1:734834532463:web:d23666042f9e93d2122d9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;