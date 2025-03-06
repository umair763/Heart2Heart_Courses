import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function TurningConflitsIntoConnectionContent() {
   // State to manage the displayed content
   const [activeContent, setActiveContent] = useState('welcome'); // Default to 'welcome'

   // Hook for navigation
   const navigate = useNavigate();

   // Function to handle the "COMPLETE" button click
   const handleCompleteClick = () => {
      navigate('/TurningConflitsIntoConnection'); // Navigate to the desired page
   };

   return (
      <>
         <div className="bg-[#f5f5f5] min-h-screen">
            <div className="flex flex-col items-center py-8">
               {/* Header Section */}
               <div className="w-full max-w-6xl bg-[#f5f5f5] p-4">
                  <div className="flex justify-between items-center">
                     {/* Add any header content here if needed */}
                  </div>
               </div>

               {/* Main Content Section */}
               <div className="w-full max-w-6xl bg-[#f5f5f5] mt-4">
                  <div className="flex flex-col md:flex-row gap-6">
                     {/* Main Content Area */}
                     <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {activeContent === 'welcome' && (
                           <div className="space-y-4">
                              <h2 className="text-2xl font-bold text-blue-900">Welcome!</h2>
                              <p className="text-gray-700">
                                 We are thrilled to have you here. This course is designed to help you
                                 master the art of conflict resolution and turn conflicts into meaningful
                                 connections. Let's get started on this journey together!
                              </p>
                              <p className="text-gray-700">
                                 Take your time to explore the course materials and don't hesitate to
                                 reach out if you have any questions.
                              </p>
                           </div>
                        )}

                        {activeContent === 'howToUse' && (
                           <div className="relative">
                              <video
                                 alt="Video"
                                 className="w-full rounded-lg"
                                 height="300"
                                 width="600"
                                 controls
                              >
                                 <source
                                    src="https://storage.googleapis.com/a1aa/image/example_video.gif"
                                    type="video/gif"
                                 />
                                 Your browser does not support the video tag.
                              </video>
                              <div className="absolute bottom-2 left-2 bg-blue-900 text-white px-3 py-1 rounded-tr-lg text-sm">
                                 <span>1:14</span>
                              </div>
                           </div>
                        )}

                        {activeContent === 'setUpForSuccess' && (
                           <div className="space-y-4">
                              <h2 className="text-2xl font-bold text-blue-900">Set Yourself Up For Success</h2>
                              <p className="text-gray-700">
                                 Success starts with preparation. Here are some tips to help you get the
                                 most out of this course:
                              </p>
                              <ul className="list-disc list-inside text-gray-700">
                                 <li>Set aside dedicated time for learning.</li>
                                 <li>Take notes and reflect on the lessons.</li>
                                 <li>Engage with the community and ask questions.</li>
                              </ul>
                           </div>
                        )}
                     </div>

                     {/* Sidebar Section */}
                     <div className="w-full md:w-1/4 bg-blue-900 text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4">Module 0: Shall We Begin?</h2>
                        <span className="text-sm text-gray-300">3 Lessons</span>
                        <div className="mt-6 space-y-4">
                           {/* Lesson 1: Welcome */}
                           <div
                              className="flex items-center bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                              onClick={() => setActiveContent('welcome')}
                           >
                              <img
                                 alt="Instructor"
                                 className="w-10 h-10 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                 width="50"
                              />
                              <span className="ml-3 text-sm">Welcome</span>
                              <i className="fas fa-check ml-auto text-green-400"></i>
                           </div>

                           {/* Lesson 2: How To Use This Course */}
                           <div
                              className="flex items-center bg-white text-black p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                              onClick={() => setActiveContent('howToUse')}
                           >
                              <img
                                 alt="Course thumbnail"
                                 className="w-10 h-10 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/qpe52gnmWGl0XNpAWjFie1TwMUWdc64zfoo_PBqTQYw.jpg"
                                 width="50"
                              />
                              <span className="ml-3 text-sm">How To Use This Course</span>
                              <i className="fas fa-play ml-auto text-blue-900"></i>
                           </div>

                           {/* Lesson 3: Set Yourself Up For Success */}
                           <div
                              className="flex items-center bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                              onClick={() => setActiveContent('setUpForSuccess')}
                           >
                              <img
                                 alt="Instructor"
                                 className="w-10 h-10 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                 width="50"
                              />
                              <span className="ml-3 text-sm">Set Yourself Up For Success</span>
                              <i className="fas fa-check ml-auto text-green-400"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Footer Section */}
               <div className="w-full max-w-6xl bg-[#f5f5f5] mt-6">
                  <div className="bg-blue-900 text-white text-center py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <button
                        onClick={handleCompleteClick} // Add the click handler
                        className="bg-white text-blue-900 px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                     >
                        COMPLETE
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default TurningConflitsIntoConnectionContent;