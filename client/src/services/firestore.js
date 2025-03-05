import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getAllCourses = async () => {
    try {
        console.log("Fetching all courses...");
        const coursesCollectionRef = collection(db, "courses");
        const q = query(coursesCollectionRef, orderBy("title")); // Order by title (or any field)
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const courses = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("Fetched courses:", courses);
            return courses;
        } else {
            console.log("No courses found.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};
