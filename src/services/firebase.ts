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
  apiKey: "AIzaSyDIUbbPizPlV-u7FDJuEs1uIBKBQxY6zu4",
  authDomain: "elated-acronym-8gtt6.firebaseapp.com",
  projectId: "elated-acronym-8gtt6",
  storageBucket: "elated-acronym-8gtt6.firebasestorage.app",
  messagingSenderId: "535700227761",
  appId: "1:535700227761:web:b5d38089083925f5d9c490"
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
export const db = getFirestore(app, "ai-studio-vgneetlibrary-3b00fd74-c6ce-405a-a558-93f8081595a7");

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
