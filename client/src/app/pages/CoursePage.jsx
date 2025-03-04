import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
   const navigate = useNavigate();

   return (
      <div>
         <h2>Course Title</h2>
         <p>Course Description</p>
         <button onClick={() => navigate('/')}>Go Home</button> {/* Test navigation */}
      </div>
   );
};

export default CoursePage;
