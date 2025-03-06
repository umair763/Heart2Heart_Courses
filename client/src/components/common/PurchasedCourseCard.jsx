import React from 'react';

function PurchasedCourseCard({
   courseTitle = 'Conflict Resolution',
   courseHeading = 'Turning Conflict Into Connection',
   courseDescription = 'What happens when you and a partner are in disagreement? Does it bring you closer together or further apart? In this self-paced course you’ll learn what really causes fighting and disconnection, and how to reconcile in the long-term.',
   courseImage = 'https://storage.googleapis.com/a1aa/image/E-RyVED8kZ7N--pWBZpKFp3ctS7MFYDI_RRGO1y6Zes.jpg',
   progress = 100, // Represented as percentage (0-100)
   reviewLink = '#',
   courseLabel = 'CONFLICT RESOLUTION',
}) {
   return (
      <div className=" font-roboto">
         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10">
            <div className="md:flex">
               <div className="md:w-1/2">
                  <img
                     alt={courseTitle}
                     className="w-full h-full object-cover"
                     height="400"
                     src={courseImage}
                     width="600"
                  />
               </div>
               <div className="md:w-1/2 p-8">
                  <div className="text-sm text-white bg-red-600 inline-block px-3 py-1 rounded-full mb-4">
                     {courseLabel}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{courseHeading}</h2>
                  <p className="text-gray-700 mb-6">{courseDescription}</p>
                  <div className="flex items-center mb-4">
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                     </div>
                     <span className="ml-3 text-sm text-gray-600">{progress}% Completed</span>
                  </div>
                  <a href={reviewLink} className="bg-blue-900 text-white px-6 py-2 rounded-full">
                     REVIEW LESSON
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PurchasedCourseCard;
