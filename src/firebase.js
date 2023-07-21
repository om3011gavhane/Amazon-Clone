import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCF9eVnj9xiJmjDdGeT7jkn2-ereBBB0nI",
  authDomain: "clone-6ddb3.firebaseapp.com",
  projectId: "clone-6ddb3",
  storageBucket: "clone-6ddb3.appspot.com",
  messagingSenderId: "993021087852",
  appId: "1:993021087852:web:2f16c81d60a7d5a37b4849",
  measurementId: "G-QDRNJ0LD2Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };