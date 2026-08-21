import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User as FirebaseUser 
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAl5fOBUtU07n7E72MOIyCva0VPnvJk1Nw",
  authDomain: "vginsights-bed28.firebaseapp.com",
  projectId: "vginsights-bed28",
  storageBucket: "vginsights-bed28.firebasestorage.app",
  messagingSenderId: "585927930818",
  appId: "1:585927930818:web:d808a407264b512853dc5b",
  measurementId: "G-Q05M87PQ1B"
};

// Initialize Firebase App
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firebase Auth & Providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Firestore Database
export const db = getFirestore(app);

export {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type FirebaseUser,
  doc,
  setDoc,
  getDoc
};
