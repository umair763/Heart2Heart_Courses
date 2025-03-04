import { Navigate } from 'react-router-dom';
import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function PersonalDashboard() {
   const navigate = useNavigate();
   const { setIsAuthenticated, setUser } = useContext(AuthContext);

   // Check if the user is authenticated
   if (!setIsAuthenticated) {
      // If not authenticated, redirect to the sign-in page
      return <Navigate to="/signin" replace />;
   }

   const handleLogout = () => {
      localStorage.removeItem('user'); // Clear user data
      setIsAuthenticated(false);
      setUser(null);
      navigate('/signin');
   };

   // If authenticated, render the dashboard content
   return (
      <div className="p-6 bg-white rounded shadow">
         <h2 className="text-2xl font-bold">Dashboard</h2>
         <p>Manage your personal courses and settings here.</p>

         {/* Display user-specific information (optional) */}

         <div className="mt-4">
            <p>Welcome, Mr X</p>
            {/* Display other user details */}
         </div>

         {/* Add more dashboard content here */}
         {/* Example: List of enrolled courses */}
         <div className="mt-6">
            <h3 className="text-lg font-semibold">Enrolled Courses</h3>
            <ul>
               <li>Course 1</li>
               <li>Course 2</li>
               {/* Add dynamic course list here */}
            </ul>
         </div>
         {/* Example: Profile settings */}
         <div className="mt-6">
            <h3 className="text-lg font-semibold">Settings</h3>
            <p>Change Profile information here</p>
            {/*add profile settings here*/}
         </div>
         {/* Logout button */}
         <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
         >
            Logout
         </button>
      </div>
   );
}

export default PersonalDashboard;
