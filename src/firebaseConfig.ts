// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmJUNPt3Nnzk4x70rMZLnEyJLAWGbiSeM",
  authDomain: "hackerplus-auth.firebaseapp.com",
  projectId: "hackerplus-auth",
  storageBucket: "hackerplus-auth.appspot.com",
  messagingSenderId: "531041657913",
  appId: "1:531041657913:web:97bf9f170e1eddc495d9e8",
  measurementId: "G-VJH69BC9LC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
