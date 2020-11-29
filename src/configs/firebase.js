import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBr5Y_pu0_Mg7fYIgqpJIH6YePbOJDnoSM",
  authDomain: "whatsapp-react-364ac.firebaseapp.com",
  databaseURL: "https://whatsapp-react-364ac.firebaseio.com",
  projectId: "whatsapp-react-364ac",
  storageBucket: "whatsapp-react-364ac.appspot.com",
  messagingSenderId: "361058846726",
  appId: "1:361058846726:web:20c88c236b87ee5df45b87",
  measurementId: "G-4NZG2DFLNP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
