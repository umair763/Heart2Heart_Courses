import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TurningConflitsIntoConnectionContent() {
   // State to manage the displayed content
   const [activeContent, setActiveContent] = useState('welcome'); // Default to 'welcome'
   const [loading, setLoading] = useState(false); // State to track loading status
   
   // Constant video URL instead of fetching from Firestore
   const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

   // Hook for navigation
   const navigate = useNavigate();

   // Simulate brief loading when switching to howToUse
   useEffect(() => {
      if (activeContent === 'howToUse') {
         setLoading(true);
         const timer = setTimeout(() => {
            setLoading(false);
         }, 800);
         return () => clearTimeout(timer);
      }
   }, [activeContent]);

   // Function to handle the "COMPLETE" button click
   const handleCompleteClick = () => {
      navigate('/TurningConflitsIntoConnection'); // Navigate to the desired page
   };

   return (
      <>
         <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <div className="flex flex-col items-center py-8 px-4">
               {/* Header Section */}
               <div className="w-full max-w-6xl p-4">
                  <div className="flex justify-between items-center">
                     <h1 className="text-3xl font-bold text-blue-900">Turning Conflicts Into Connection</h1>
                  </div>
               </div>

               {/* Main Content Section */}
               <div className="w-full max-w-6xl mt-4">
                  <div className="flex flex-col md:flex-row gap-6">
                     {/* Main Content Area */}
                     <div className="w-full md:w-3/4 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                        {activeContent === 'welcome' && (
                           <div className="space-y-6">
                              <h2 className="text-3xl font-bold text-blue-900 border-b pb-3 border-blue-100">Welcome!</h2>
                              <div className="flex justify-center mb-6">
                                 <img 
                                    src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg" 
                                    alt="Welcome" 
                                    className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-100"
                                 />
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                 We are thrilled to have you here. This course is designed to help you
                                 master the art of conflict resolution and turn conflicts into meaningful
                                 connections. Let's get started on this journey together!
                              </p>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                 Take your time to explore the course materials and don't hesitate to
                                 reach out if you have any questions.
                              </p>
                              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                 <p className="text-blue-800 italic">
                                    "The greatest glory in living lies not in never falling, but in rising every time we fall." — Nelson Mandela
                                 </p>
                              </div>
                           </div>
                        )}

                        {activeContent === 'howToUse' && (
                           <div className="space-y-6">
                              <h2 className="text-3xl font-bold text-blue-900 border-b pb-3 border-blue-100">How To Use This Course</h2>
                              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                                 {loading ? (
                                    <div className="flex justify-center items-center h-80 bg-gray-50">
                                       <div className="relative w-16 h-16">
                                          <div className="absolute w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                       </div>
                                    </div>
                                 ) : (
                                    <>
                                       <video
                                          className="w-full rounded-lg"
                                          height="400"
                                          width="100%"
                                          controls
                                          poster="https://storage.googleapis.com/a1aa/image/qpe52gnmWGl0XNpAWjFie1TwMUWdc64zfoo_PBqTQYw.jpg"
                                       >
                                          <source
                                             src={videoUrl}
                                             type="video/mp4"
                                          />
                                          Your browser does not support the video tag.
                                       </video>
                                       <div className="absolute bottom-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                                          <span>1:14</span>
                                       </div>
                                    </>
                                 )}
                              </div>
                              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
                                 <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Takeaways:</h3>
                                 <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Navigate through the course modules using the sidebar</li>
                                    <li>Watch all video lessons completely for best understanding</li>
                                    <li>Complete the exercises to reinforce your learning</li>
                                    <li>Feel free to revisit any lesson at any time</li>
                                 </ul>
                              </div>
                           </div>
                        )}

                        {activeContent === 'setUpForSuccess' && (
                           <div className="space-y-6">
                              <h2 className="text-3xl font-bold text-blue-900 border-b pb-3 border-blue-100">Set Yourself Up For Success</h2>
                              <div className="flex justify-center mb-6">
                                 <img 
                                    src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg" 
                                    alt="Success" 
                                    className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-100"
                                 />
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                 Success starts with preparation. Here are some tips to help you get the
                                 most out of this course:
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Time Management</h3>
                                    <p className="text-gray-700">Set aside dedicated time for learning without distractions.</p>
                                 </div>
                                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Active Learning</h3>
                                    <p className="text-gray-700">Take notes and reflect on the lessons to enhance retention.</p>
                                 </div>
                                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-md">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Community</h3>
                                    <p className="text-gray-700">Engage with the community and ask questions when you need clarification.</p>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>

                     {/* Sidebar Section */}
                     <div className="w-full md:w-1/4">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                           <h2 className="text-xl font-bold mb-2 border-b border-blue-700 pb-2">Module 0: Shall We Begin?</h2>
                           <span className="text-sm text-blue-200 font-medium">3 Lessons</span>
                           <div className="mt-6 space-y-3">
                              {/* Lesson 1: Welcome */}
                              <div
                                 className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                    activeContent === 'welcome' 
                                    ? 'bg-white text-blue-900 shadow-md' 
                                    : 'bg-blue-800 bg-opacity-50 hover:bg-opacity-70'
                                 }`}
                                 onClick={() => setActiveContent('welcome')}
                              >
                                 <img
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border-2 border-blue-200"
                                    height="50"
                                    src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                    width="50"
                                 />
                                 <span className="ml-3 font-medium">Welcome</span>
                                 <i className="fas fa-check ml-auto text-green-400"></i>
                              </div>

                              {/* Lesson 2: How To Use This Course */}
                              <div
                                 className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                    activeContent === 'howToUse' 
                                    ? 'bg-white text-blue-900 shadow-md' 
                                    : 'bg-blue-800 bg-opacity-50 hover:bg-opacity-70'
                                 }`}
                                 onClick={() => setActiveContent('howToUse')}
                              >
                                 <img
                                    alt="Course thumbnail"
                                    className="w-10 h-10 rounded-full border-2 border-blue-200"
                                    height="50"
                                    src="https://storage.googleapis.com/a1aa/image/qpe52gnmWGl0XNpAWjFie1TwMUWdc64zfoo_PBqTQYw.jpg"
                                    width="50"
                                 />
                                 <span className="ml-3 font-medium">How To Use This Course</span>
                                 <i className="fas fa-play ml-auto text-blue-300"></i>
                              </div>

                              {/* Lesson 3: Set Yourself Up For Success */}
                              <div
                                 className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                    activeContent === 'setUpForSuccess' 
                                    ? 'bg-white text-blue-900 shadow-md' 
                                    : 'bg-blue-800 bg-opacity-50 hover:bg-opacity-70'
                                 }`}
                                 onClick={() => setActiveContent('setUpForSuccess')}
                              >
                                 <img
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border-2 border-blue-200"
                                    height="50"
                                    src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                    width="50"
                                 />
                                 <span className="ml-3 font-medium">Set Yourself Up For Success</span>
                                 <i className="fas fa-check ml-auto text-green-400"></i>
                              </div>
                           </div>
                           
                           <div className="mt-8 pt-4 border-t border-blue-700">
                              <div className="text-blue-200 text-sm">
                                 <p>Your progress: <span className="font-bold">2/3 completed</span></p>
                                 <div className="w-full bg-blue-700 rounded-full h-2 mt-2">
                                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '66%' }}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="mt-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100">
                           <h3 className="text-lg font-bold text-blue-900 mb-3">Need Help?</h3>
                           <p className="text-gray-700 text-sm">If you have any questions or need assistance, don't hesitate to contact our support team.</p>
                           <button className="mt-3 w-full bg-blue-100 text-blue-900 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-300">
                              Contact Support
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Footer Section */}
               <div className="w-full max-w-6xl mt-8">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex justify-between items-center">
                     <div className="text-left hidden md:block">
                        <p className="text-sm text-blue-200">Next up: Module 1 - Understanding Conflict</p>
                        <p className="text-xs text-blue-300 mt-1">Continue your journey to better relationships</p>
                     </div>
                     <button
                        onClick={handleCompleteClick}
                        className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                     >
                        COMPLETE & CONTINUE
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default TurningConflitsIntoConnectionContent;