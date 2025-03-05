import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCourses = async () => {
   const querySnapshot = await getDocs(collection(db, "courses"));
   const courses = [];
   querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
   });
   return courses;
};
