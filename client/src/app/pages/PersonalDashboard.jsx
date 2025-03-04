import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function PersonalDashboard() {
   const navigate = useNavigate();
   const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(AuthContext);

   // Check if the user is authenticated
   if (!isAuthenticated) {
      return <Navigate to="/Signin" replace />;
   }

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
            <ul>
               <li>Course 1</li>
               <li>Course 2</li>
            </ul>
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
