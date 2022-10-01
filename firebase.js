// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHExg_5kDux70vHDnRbi6A3PawXzfmoeY",
  authDomain: "linkedin-clone-65bc6.firebaseapp.com",
  projectId: "linkedin-clone-65bc6",
  storageBucket: "linkedin-clone-65bc6.appspot.com",
  messagingSenderId: "191122316198",
  appId: "1:191122316198:web:31451464acc2ecead48d67",
  measurementId: "G-HMTTT9QTZD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};

export const logOut = () => {
  signOut(auth);
};
