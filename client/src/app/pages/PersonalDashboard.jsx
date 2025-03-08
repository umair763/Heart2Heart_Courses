import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { db } from '../../firebase/firebaseConfig';
import {
   collection,
   getDocs,
   doc,
   getDoc,
   query,
   where,
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
import PurchasedCourseCard from '../../components/common/PurchasedCourseCard';

function PersonalDashboard() {
   const navigate = useNavigate();
   const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
   const [courses, setCourses] = useState([]);
   const [purchasedCourses, setPurchasedCourses] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   // Ensure we navigate only once when the user is not authenticated
   useEffect(() => {
      if (!isAuthenticated) {
         navigate('/signin', { replace: true });
      }
   }, [isAuthenticated, navigate]);

   // Fetch regular courses from Firestore
   useEffect(() => {
      const fetchCourses = async () => {
         try {
            console.log('Fetching regular courses...');
            setLoading(true);
            const coursesCollection = collection(db, 'courses');
            const snapshot = await getDocs(coursesCollection);

            if (snapshot.empty) {
               throw new Error('No courses found in Firestore.');
            }

            const coursesList = snapshot.docs.map((doc) => {
               const data = doc.data();
               return {
                  id: doc.id,
                  title: data.title || 'Phyco Relationship',
                  description: data.description || 'No Description',
                  instructor: data.instructor || 'Unknown Instructor',
                  price: data.price || 'Not Available',
                  imageURL: data.imageURL || 'https://via.placeholder.com/150',
                  content: data.content || [],
               };
            });

            setCourses(coursesList);
            console.log('Fetched regular courses...');
         } catch (err) {
            console.error('Error fetching regular courses:', err);
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCourses();
   }, []);

   // Fetch purchased courses from Firestore
   useEffect(() => {
      const fetchPurchasedCourses = async () => {
         if (!user) {
            setLoading(false);
            return;
         }

         try {
            setLoading(true);
            console.log('Current user:', user);

            // Step 1: Get the user document using ManualUserID if it exists
            let userDoc;
            let enrolledCourses = [];

            if (user.ManualUserID) {
               console.log('Fetching user document with ManualUserID:', user.ManualUserID);
               const userDocRef = doc(db, 'users', user.ManualUserID);
               const userSnapshot = await getDoc(userDocRef);

               if (userSnapshot.exists()) {
                  userDoc = userSnapshot.data();
                  enrolledCourses = userDoc.coursesEnrolled || [];
                  console.log('Found user document with enrolledCourses:', enrolledCourses);
               } else {
                  console.error('User document not found with ManualUserID:', user.ManualUserID);
               }
            } else if (user.coursesEnrolled) {
               // Use coursesEnrolled from the AuthContext if available
               enrolledCourses = user.coursesEnrolled;
               console.log('Using coursesEnrolled from context:', enrolledCourses);
            } else {
               // Try to find the user by email
               console.log('Trying to find user by email:', user.email);
               const usersCollection = collection(db, 'users');
               const q = query(usersCollection, where('userEmail', '==', user.email));
               const userSnapshot = await getDocs(q);

               if (!userSnapshot.empty) {
                  userDoc = userSnapshot.docs[0].data();
                  enrolledCourses = userDoc.coursesEnrolled || [];
                  console.log('Found user by email with enrolledCourses:', enrolledCourses);
               } else {
                  console.error('User not found by email:', user.email);
               }
            }

            if (enrolledCourses.length === 0) {
               console.log('No enrolled courses found for user');
               setPurchasedCourses([]);
               setLoading(false);
               return;
            }

            console.log('Found enrolled courses:', enrolledCourses);

            // Step 2: Fetch all documents from PurchasedCourseCard (we'll filter manually)
            // This avoids having to do individual fetches for each course
            const purchasedCoursesCollection = collection(db, 'PurchasedCourseCard');
            const purchasedCoursesSnapshot = await getDocs(purchasedCoursesCollection);

            const purchasedCoursesList = [];

            // Step 3: Filter out only the courses that match the IDs in enrolledCourses
            purchasedCoursesSnapshot.forEach((doc) => {
               if (enrolledCourses.includes(doc.id)) {
                  const courseData = doc.data();
                  purchasedCoursesList.push({
                     id: doc.id,
                     title: courseData.title || 'Unknown Course',
                     description: courseData.description || 'No description available',
                     imageURL: courseData.imageURL || 'https://via.placeholder.com/150',
                     redHighlight: courseData.redHighlight || '',
                  });
                  console.log(`Found matching course: ${doc.id}`, courseData);
               }
            });

            // If we didn't find any matches in PurchasedCourseCard, try the main courses collection
            if (purchasedCoursesList.length === 0) {
               console.log('No matches found in PurchasedCourseCard, trying courses collection');
               const coursesCollection = collection(db, 'courses');
               const coursesSnapshot = await getDocs(coursesCollection);

               coursesSnapshot.forEach((doc) => {
                  if (enrolledCourses.includes(doc.id)) {
                     const courseData = doc.data();
                     purchasedCoursesList.push({
                        id: doc.id,
                        title: courseData.title || 'Unknown Course',
                        description: courseData.description || 'No description available',
                        imageURL: courseData.imageURL || 'https://via.placeholder.com/150',
                        redHighlight: courseData.category || '',
                     });
                     console.log(`Found matching course in courses collection: ${doc.id}`, courseData);
                  }
               });
            }

            setPurchasedCourses(purchasedCoursesList);
            console.log('Final purchased courses list:', purchasedCoursesList);
         } catch (err) {
            setError('Failed to fetch purchased courses');
            console.error('Error fetching purchased courses:', err);
         } finally {
            setLoading(false);
         }
      };

      fetchPurchasedCourses();
   }, [user]);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="relative w-24 h-24">
               <div className="absolute w-24 h-24 border-8 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
               <div className="absolute w-8 h-8 bg-blue-600 rounded-full top-8 left-8 animate-bounce"></div>
            </div>
         </div>
      );
   }

   if (error) {
      return <div className="text-center text-red-500 font-semibold text-lg">Error: {error}</div>;
   }

   const handleLogout = () => {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      setUser(null);
      navigate('/signin');
   };

   return (
      <>
         <div className="flex items-center justify-center p-6">
            <div className="text-center">
               <h2 className="text-3xl font-bold text-[#8a552d]">Dashboard</h2>
               <p className="mt-2 text-lg text-gray-700">Welcome, {user?.email ? user.email : 'Guest'}!</p>
            </div>
         </div>

         <div className="p-6 bg-[#c59c7cb0] rounded-lg shadow-lg max-w-6xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-[#120A16] mb-6">Your Library</h1>

            {/* Purchased Course Cards */}
            {purchasedCourses.length > 0 ? (
               purchasedCourses.map((course) => (
                  <PurchasedCourseCard
                     key={course.id}
                     courseTitle={course.title}
                     courseHeading={course.title}
                     courseDescription={course.description}
                     courseImage={course.imageURL}
                     progress={100}
                     reviewLink={`/course/${course.id}`}
                     courseLabel={course.redHighlight}
                  />
               ))
            ) : (
               <p className="text-gray-600 mt-2">No purchased courses available.</p>
            )}

            <h2 className="text-2xl font-bold text-[#120A16] mt-8">More Courses Available</h2>

            {/* Regular Course Grid (Left-aligned) */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
               {courses.length > 0 ? (
                  courses.map((course) => (
                     <div
                        key={course.id}
                        className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                        onClick={() => navigate(`/course/${course.id}`)}
                        style={{ cursor: 'pointer' }}
                     >
                        <img src={course.imageURL} alt={course.title} className="w-full h-48 object-cover rounded-lg" />
                        <h4 className="text-xl font-semibold mt-3 text-gray-800">{course.title}</h4>
                        <p className="text-gray-700 mt-1">{course.description}</p>
                        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                        <p className="font-semibold mt-2 text-gray-800">Price: ${course.price}</p>
                     </div>
                  ))
               ) : (
                  <p className="text-gray-600 mt-2">No courses available.</p>
               )}
            </div>

            {/* Second Course Grid (Centered) - Removed to avoid duplication */}

            {/* Logout Button */}
            <button
               onClick={handleLogout}
               className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg mx-auto block transition-all duration-300"
            >
               Logout
            </button>
         </div>
      </>
   );
}

export default PersonalDashboard;
