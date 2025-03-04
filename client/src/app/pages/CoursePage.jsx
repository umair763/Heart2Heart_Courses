// CoursePage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CoursePage = ({ courseId }) => {


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
