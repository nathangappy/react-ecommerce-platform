import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDoULRoylC9E1voJfDRYzo_NdRqTv79Lzc",
  authDomain: "react-ecommerce-platform.firebaseapp.com",
  databaseURL: "https://react-ecommerce-platform.firebaseio.com",
  projectId: "react-ecommerce-platform",
  storageBucket: "",
  messagingSenderId: "464195436844",
  appId: "1:464195436844:web:6a2786dc447273e5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;