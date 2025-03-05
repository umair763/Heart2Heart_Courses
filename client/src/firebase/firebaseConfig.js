import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDCx-6-ePvaajHxqpci12NivlegOwPdBxw",
    authDomain: "heart-2-heart-cc6cb.firebaseapp.com",
    projectId: "heart-2-heart-cc6cb",
    storageBucket: "heart-2-heart-cc6cb.appspot.com", // Fixing typo in storageBucket
    messagingSenderId: "1015057003593",
    appId: "1:1015057003593:web:8407b4f5fd418e2781fb98",
    measurementId: "G-FSGD6KJ3PS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Firestore instance
