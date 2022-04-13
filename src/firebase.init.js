// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMLQTYAtf0HcWl09rmTq-qBtfoAQq__s",
  authDomain: "genius-car-services-2a573.firebaseapp.com",
  projectId: "genius-car-services-2a573",
  storageBucket: "genius-car-services-2a573.appspot.com",
  messagingSenderId: "1002189674049",
  appId: "1:1002189674049:web:d251a932a6d9c5b01258c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;