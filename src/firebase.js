// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyChc9CM4unpaEKdO5HzIHyvzj4ab6NctXc",
    authDomain: "fb-clone-97503.firebaseapp.com",
    projectId: "fb-clone-97503",
    storageBucket: "fb-clone-97503.appspot.com",
    messagingSenderId: "392798593251",
    appId: "1:392798593251:web:0cdf3a9513de2e982d25d6",
    measurementId: "G-Z791C8KY2V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;