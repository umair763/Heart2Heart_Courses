import { Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserPurchasedCourses } from "../../services/firestore";// Import Firestore function
import AuthContext from '../context/AuthContext';

function PersonalDashboard() {
   const navigate = useNavigate();
   const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(AuthContext);
   const [purchasedCourses, setPurchasedCourses] = useState([]);

   // Redirect if not authenticated
   if (!isAuthenticated) {
      return <Navigate to="/Signin" replace />;
   }

   // Fetch user's purchased courses
   useEffect(() => {
      const fetchCourses = async () => {
         if (user) {
            const courses = await getUserPurchasedCourses(user.uid);
            setPurchasedCourses(courses);
         }
      };
      fetchCourses();
   }, [user]);

   const handleLogout = () => {
      localStorage.removeItem('user'); // Clear user data
      setIsAuthenticated(false);
      setUser(null);
      navigate('/signin');
   };

   return (
      <div className="p-6 bg-white rounded shadow">
         <h2 className="text-2xl font-bold">Dashboard</h2>
         <p>Manage your personal courses and settings here.</p>

         <div className="mt-4">
            <p>Welcome, {user?.email || "User"}!</p>
         </div>

         <div className="mt-6">
            <h3 className="text-lg font-semibold">Enrolled Courses</h3>
            {purchasedCourses.length > 0 ? (
               <ul>
                  {purchasedCourses.map((course) => (
                     <li key={course.id} className="mt-2 p-3 bg-gray-100 rounded">
                        <h4 className="font-bold">{course.title}</h4>
                        <p>{course.content}</p>
                     </li>
                  ))}
               </ul>
            ) : (
               <p>You haven't enrolled in any courses yet.</p>
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
