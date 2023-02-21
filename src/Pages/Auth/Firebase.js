import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// my firebase key config
const firebaseConfig = {
    apiKey: "AIzaSyBb0z2Z0QBbbQUGRzkCANlF4nqg_Byux30",
    authDomain: "fixhub-fe852.firebaseapp.com",
    databaseURL: "https://fixhub-fe852-default-rtdb.firebaseio.com",
    projectId: "fixhub-fe852",
    storageBucket: "fixhub-fe852.appspot.com",
    messagingSenderId: "425718696459",
    appId: "1:425718696459:web:e51d7d1e6afdbda5ced50e",
    measurementId: "G-GGKMB826K1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

const user = auth.currentUser;




export {auth, db, user };
