import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeTForZUXl5vreYNbj7YKfF1-2juu8Yoo",
  authDomain: "where-s-waldo-c2d16.firebaseapp.com",
  projectId: "where-s-waldo-c2d16",
  storageBucket: "where-s-waldo-c2d16.appspot.com",
  messagingSenderId: "189633869967",
  appId: "1:189633869967:web:e8bb51296458319b8798fa",
  measurementId: "G-S2FD0N16K8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;