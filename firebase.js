import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBNKF3KXE9YEd3d9NJ_Qa7mbWg1J_ZbqEY",
  authDomain: "clone-9f4bb.firebaseapp.com",
  databaseURL: "https://clone-9f4bb.firebaseio.com",
  projectId: "clone-9f4bb",
  storageBucket: "clone-9f4bb.appspot.com",
  messagingSenderId: "88478460563",
  appId: "1:88478460563:web:69a1d1a0ed326bc65fbb66",
  measurementId: "G-2DXHQYRSV3"
});


const auth = firebase.auth();

export {auth};