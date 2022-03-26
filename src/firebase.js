import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmmDKuZ-EWmLqe4zox_QZLCsXLwhCV1RM",
  authDomain: "tinder-clone-24e3e.firebaseapp.com",
  projectId: "tinder-clone-24e3e",
  storageBucket: "tinder-clone-24e3e.appspot.com",
  messagingSenderId: "1049712823475",
  appId: "1:1049712823475:web:039418e9d2c5c799c4f4c6",
  measurementId: "G-V9SL4VWZYJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
