import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PersonalDashboard = () => {
   const { user } = useContext(AuthContext);

   return (
      <div>
         <h1>Welcome, {user?.username}</h1>
         <h2>Your Enrolled Courses</h2>
         <ul>{user?.courses && user?.courses.map((course, index) => <li key={index}>{course}</li>)}</ul>
      </div>
   );
};

export default PersonalDashboard;
