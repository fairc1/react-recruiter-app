import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAMYx1hTdHD7MSRvtxKjL7IDSgaUjK-yFI",
  authDomain: "jsr-914.firebaseapp.com",
  projectId: "jsr-914",
  storageBucket: "jsr-914.appspot.com",
  messagingSenderId: "9858326444",
  appId: "1:9858326444:web:8523767e4202b1b0dde409"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;