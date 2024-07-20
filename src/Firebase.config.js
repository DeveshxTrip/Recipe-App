
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBn7pi5IcuUz89b1kCKH7MAxhGLY-_Do6g",
  authDomain: "recipe-app-4aa9e.firebaseapp.com",
  projectId: "recipe-app-4aa9e",
  storageBucket: "recipe-app-4aa9e.appspot.com",
  messagingSenderId: "210975366457",
  appId: "1:210975366457:web:f5190cd295a82265b41ce8",
  measurementId: "G-81YYVXJ14S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export
export const auth = getAuth();
export const db = getFirestore(app);
export const database = getDatabase(app);
export default app;

