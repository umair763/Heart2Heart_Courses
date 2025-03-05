import { db } from "../firebase/firebaseConfig";; // Use alias // Ensure correct import path
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getUserPurchasedCourses = async (userId) => {
    try {
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            return userDocSnap.data().purchasedCourses || [];
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching purchased courses:", error);
        return [];
    }
};
