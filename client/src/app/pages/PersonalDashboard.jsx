import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
import PurchasedCourseCard from '../../components/common/PurchasedCourseCard';

function PersonalDashboard() {
   const navigate = useNavigate();
   const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
   const [courses, setCourses] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (!isAuthenticated) {
         navigate('/signin', { replace: true });
      }
   }, [isAuthenticated, navigate]);

   useEffect(() => {
      const fetchCourses = async () => {
         try {
            console.log('Fetching courses...');
            setTimeout(async () => {
               const coursesCollection = collection(db, 'courses');
               const snapshot = await getDocs(coursesCollection);

               if (snapshot.empty) {
                  throw new Error('No courses found in Firestore.');
               }

               const coursesList = snapshot.docs.map((doc) => {
                  const data = doc.data();
                  return {
                     id: doc.id,
                     title: data.title || 'Title',
                     description: data.description || 'No Description',
                     instructor: data.instructor || 'Unknown Instructor',
                     price: data.price || 'Not Available',
                     imageURL: data.imageURL || 'https://via.placeholder.com/150',
                     content: data.content || [],
                  };
               });

               setCourses(coursesList);
               setLoading(false);
            }, 1000);
         } catch (err) {
            console.error('Error fetching courses:', err);
            setError(err.message);
            setLoading(false);
         }
      };

      fetchCourses();
   }, []);

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
            <h1 className="text-4xl font-serif font-bold text-[#8a552d] mb-6">Your Library</h1>

            {/* Purchased Course Cards */}
            <div className="space-y-6">
               <PurchasedCourseCard
                  courseTitle="Conflict Resolution"
                  courseHeading="Turning Conflict Into Connection"
                  courseDescription="Learn what really causes fighting and disconnection, and how to reconcile in the long-term."
                  courseImage="https://storage.googleapis.com/a1aa/image/E-RyVED8kZ7N--pWBZpKFp3ctS7MFYDI_RRGO1y6Zes.jpg"
                  progress={100}
                  reviewLink="/TurningConflitsIntoConnection"
                  courseLabel="CONFLICT RESOLUTION"
               />

               <PurchasedCourseCard
                  courseTitle="Conflict Resolution"
                  courseHeading="Turning Conflict Into Connection"
                  courseDescription="What happens when you and a partner are in disagreement? Does it bring you closer together or further apart? In this self-paced course you’ll learn what really causes fighting and disconnection, and how to reconcile in the long-term."
                  courseImage="https://storage.googleapis.com/a1aa/image/E-RyVED8kZ7N--pWBZpKFp3ctS7MFYDI_RRGO1y6Zes.jpg"
                  progress={100}
                  reviewLink="/TurningConflitsIntoConnection"
                  courseLabel="CONFLICT RESOLUTION"
               />
            </div>

            <h2 className="text-2xl font-bold text-[#8a552d] mt-8">More Courses Available</h2>

            {/* First Course Grid (Left-aligned) */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
               {courses.length > 0 ? (
                  courses.map((course) => (
                     <div
                        key={course.id}
                        className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                     >
                        <img
                           src={course.imageURL}
                           alt={course.title}
                           className="w-full h-48 object-cover rounded-lg"
                        />
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

            {/* Second Course Grid (Centered) */}
            <div className="flex justify-center">
               <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-6xl w-full">
                  {courses.length > 0 ? (
                     courses.map((course) => (
                        <div
                           key={course.id}
                           className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                           <img
                              src={course.imageURL}
                              alt={course.title}
                              className="w-full h-48 object-cover rounded-lg"
                           />
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
            </div>

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