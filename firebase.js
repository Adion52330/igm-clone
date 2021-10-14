import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4ffcGrP44rp0sTJbW73Inh2JBFEiVkE",
  authDomain: "igm-clone.firebaseapp.com",
  projectId: "igm-clone",
  storageBucket: "igm-clone.appspot.com",
  messagingSenderId: "998020493747",
  appId: "1:998020493747:web:962f55ed665e509ea05bc6",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
export { firebase, db };
