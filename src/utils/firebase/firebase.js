import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  // apiKey: "AIzaSyDTzig7iRcyjqkNpF4ihuD4igCxrOQhXPA",
  // authDomain: "fan-crowd-81a6a.firebaseapp.com",
  // projectId: "fan-crowd-81a6a",
  // storageBucket: "fan-crowd-81a6a.appspot.com",
  // messagingSenderId: "391936695307",
  // appId: "1:391936695307:web:f6bbe938df909730513b0e",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
export default firebase;
export const firebaseRef = firebase;
export const auth = firebase.auth;
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();
