// firebaseConfig.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import {
   getFirestore,
   doc,
   setDoc,
   collection,
   getDocs,
   query,
   orderBy,
   limit, // Add this import to include 'limit'
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js'; // Added limit here
import {
   getAuth,
   setPersistence,
   browserLocalPersistence,
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'; // Firebase Auth
import { getStorage } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-storage.js';

const firebaseConfig = {
   apiKey: 'AIzaSyDCx-6-ePvaajHxqpci12NivlegOwPdBxw',
   authDomain: 'heart-2-heart-cc6cb.firebaseapp.com',
   projectId: 'heart-2-heart-cc6cb',
   storageBucket: 'heart-2-heart-cc6cb.appspot.com',
   messagingSenderId: '1015057003593',
   appId: '1:1015057003593:web:8407b4f5fd418e2781fb98',
   measurementId: 'G-FSGD6KJ3PS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Authentication
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Set persistence to LOCAL (this ensures the user stays logged in)
setPersistence(auth, browserLocalPersistence).catch((error) => {
   console.error('Error setting auth persistence:', error);
});

// Export Firestore, Auth, Storage, doc, setDoc, collection, getDocs, query, orderBy, and limit functions
export { db, auth, storage, doc, setDoc, collection, getDocs, query, orderBy, limit }; // Add 'limit' here
