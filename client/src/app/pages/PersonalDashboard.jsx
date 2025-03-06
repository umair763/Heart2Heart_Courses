import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

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
            const coursesCollection = collection(db, 'courses');
            const snapshot = await getDocs(coursesCollection);

            if (snapshot.empty) {
               throw new Error('No courses found in Firestore.');
            }

            const coursesList = snapshot.docs.map((doc) => {
               const data = doc.data();
               return {
                  id: doc.id,
                  title: data.title || 'No Title',
                  description: data.description || 'No Description',
                  instructor: data.instructor || 'Unknown Instructor',
                  price: data.price || 'Not Available',
                  imageURL: data.imageURL || 'https://via.placeholder.com/150',
                  content: data.content || [], // This is an array
               };
            });

            setCourses(coursesList);
            setLoading(false);
         } catch (err) {
            console.error('Error fetching courses:', err);
            setError(err.message);
            setLoading(false);
         }
      };

      fetchCourses();
   }, []);

   if (loading) {
      return <div>Loading courses...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   const handleLogout = () => {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      setUser(null);
      navigate('/signin');
   };

   return (
      <div className="p-6 bg-white rounded shadow">
         <h2 className="text-2xl font-bold">Dashboard</h2>
         <p>Manage your personal courses and settings here.</p>

         <div className="mt-4">
            <p>Welcome, {user?.email ? user.email : 'Guest'}!</p>
         </div>

         <div className="mt-6">
            <h3 className="text-lg font-semibold">Available Courses</h3>
            {courses.length > 0 ? (
               <ul>
                  {courses.map((course) => (
                     <li key={course.id} className="mt-2 p-2 border rounded">
                        <h4 className="font-semibold">{course.title}</h4>
                        <p>{course.description}</p>
                        <p>Instructor: {course.instructor}</p>
                        <p>Price: ${course.price}</p>

                        {/* Display course content as modules */}
                        <div>
                           <h5 className="font-semibold">Course Content:</h5>
                           {course.content && course.content.length > 0 ? (
                              <ul>
                                 {course.content.map((module, index) => (
                                    <li key={index}>
                                       {index % 2 === 0 ? (
                                          <strong>{module}</strong> // Display Module Name
                                       ) : (
                                          <video controls width="100%">
                                             <source src={module} type="video/mp4" />
                                             Your browser does not support the video tag.
                                          </video> // Display video if it's a URL
                                       )}
                                    </li>
                                 ))}
                              </ul>
                           ) : (
                              <p>No content available for this course.</p>
                           )}
                        </div>

                        <div>
                           <img src={course.imageURL} alt={course.title} className="w-full h-48 object-cover mt-2" />
                        </div>
                     </li>
                  ))}
               </ul>
            ) : (
               <p>No courses available.</p>
            )}
         </div>

         <div className="mt-6">
            <h3 className="text-lg font-semibold">Settings</h3>
            <p>Change Profile information here</p>
         </div>

         <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
         >
            Logout
         </button>
      </div>
   );
}

export default PersonalDashboard;
