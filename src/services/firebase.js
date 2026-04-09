import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import {} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXzTnYSb5OlTvB-Bu4w0ix-DWd3Q8bkgs",
  authDomain: "proyectoreact-1468a.firebaseapp.com",
  projectId: "proyectoreact-1468a",
  storageBucket: "proyectoreact-1468a.firebasestorage.app",
  messagingSenderId: "779237748",
  appId: "1:779237748:web:cc0bb1fa2843f61ada1421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);