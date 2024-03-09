// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU0HODUOORNBuE2kgP4p_DdBiZthDyUD4",
    authDomain: "prueba-bemaster-8e40c.firebaseapp.com",
    projectId: "prueba-bemaster-8e40c",
    storageBucket: "prueba-bemaster-8e40c.appspot.com",
    messagingSenderId: "816090809221",
    appId: "1:816090809221:web:f10590ad1857ba6167faec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const auth = getAuth(app)

export { firestore, auth }