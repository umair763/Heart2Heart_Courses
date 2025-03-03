// CoursePage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CoursePage = ({ courseId }) => {
   const { isAuthenticated } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleEnroll = () => {
      if (isAuthenticated) {
         // After payment, redirect to the dashboard
         navigate('/dashboard');
      } else {
         // Redirect to Signin page after enrollment
         navigate('/Signin');
      }
   };

   return (
      <div>
         <h2>Course Title</h2>
         <p>Course Description</p>
         {/* Display course details */}
         <button onClick={handleEnroll}>Enroll</button>
      </div>
   );
};

export default CoursePage;
