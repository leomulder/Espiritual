// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo0i5DZH7UQDdOwOd7xtp5KQaFXOYNVlw",
  authDomain: "studio-1670078699-f8d58.firebaseapp.com",
  projectId: "studio-1670078699-f8d58",
  storageBucket: "studio-1670078699-f8d58.firebasestorage.app",
  messagingSenderId: "651270935467",
  appId: "1:651270935467:web:b0f5fa086f78067b8938ee"
};

// Evita inicializar duas vezes
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
