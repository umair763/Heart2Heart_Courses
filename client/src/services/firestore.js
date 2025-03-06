// services/firestore.js
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Make sure the correct path is used

export const getAllCourses = async () => {
   try {
      console.log('Fetching all courses...');
      const coursesCollectionRef = collection(db, 'courses'); // Reference to courses collection

      // Create a query ordered by the 'title' field
      const q = query(coursesCollectionRef, orderBy('title'));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
         // Map the data from documents and return them
         const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id, // Include the document ID
            ...doc.data(), // Include the document data
         }));
         console.log('Fetched courses:', courses); // Log the courses to verify
         return courses;
      } else {
         console.log('No courses found.');
         return [];
      }
   } catch (error) {
      console.error('Error fetching courses:', error);
      return []; // Return an empty array in case of error
   }
};
