import React from 'react';

const CoursePage = () => {
   return (
      <div className="course-content">
         <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
         <div className="course-list">
            <div className="course-card p-4 mb-4 bg-white rounded shadow">
               <h3 className="text-xl font-semibold">Introduction to Counseling</h3>
               <p className="text-gray-600 mt-2">Learn the fundamentals of professional counseling techniques...</p>
            </div>
            {/* Add more course cards */}
         </div>
      </div>
   );
};

export default CoursePage;
