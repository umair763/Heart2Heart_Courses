import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TurningConflitsIntoConnectionContent() {
   // State to manage the displayed content
   const [activeContent, setActiveContent] = useState('welcome'); // Default to 'welcome'
   const [loading, setLoading] = useState(false); // State to track loading status

   // Constant video URL instead of fetching from Firestore
   const videoUrl1 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
   const videoUrl2 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
   const videoUrl3 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

   // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"

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
         <div className="bg-gradient-to-b bg-[#C0C0C0] min-h-screen">
            <div className="flex flex-col items-center py-8 px-4">
               {/* Header Section */}
               <div className="w-full max-w-6xl p-2 mt-2 mb-2">
                  <div className="flex justify-between items-center">
                     {/* <h1 className="text-sm font-bold text-gray-500">Turning Conflicts Into Connection</h1> */}
                  </div>
                  <nav aria-label="Breadcrumbs">
                     <ul class="flex list-none p-0 space-x-1">
                        <li>
                           <a href="/TurningConflitsIntoConnection" class="text-gray-600 hover:underline">
                              Transforming Disagreements into Harmony
                           </a>
                        </li>
                        <li>
                           <span class="text-gray-600">/</span>
                        </li>
                        <li>
                           <a href="/TurningConflitsIntoConnection" class="text-gray-600 hover:underline">
                              Modules
                           </a>
                        </li>
                        <li>
                           <span class="text-gray-600">/</span>
                        </li>
                        <li aria-current={activeContent} class="text-gray-800">
                           {activeContent}
                        </li>
                     </ul>
                  </nav>
               </div>

               {/* Main Content Section */}
               <div className="w-full max-w-6xl mt-4">
                  <div className="flex flex-col md:flex-row ">
                     {/* Main Content Area */}
                     <div className="w-full md:w-3/4 bg-white p-0 rounded-l-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-50">
                        {activeContent === 'welcome' && (
                           <div className="space-y-6">
                              <div className="relative rounded-l-xl overflow-hidden shadow-2xl border border-transparent ">
                                 {loading ? (
                                    <div className="flex justify-center items-center h-80 bg-gray-50">
                                       <div className="relative w-16 h-16">
                                          <div className="absolute w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                       </div>
                                    </div>
                                 ) : (
                                    <>
                                       <div className="w-full h-[440px] overflow-hidden">
                                          {/* Set height to 200px */}
                                          <video
                                             className="w-full h-full object-cover" // This ensures that the video fills the container
                                             controls
                                             poster="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
                                          >
                                             <source src={videoUrl1} type="video/mp4" />
                                             Your browser does not support the video tag.
                                          </video>
                                       </div>
                                    </>
                                 )}
                              </div>
                              <div className="p-8 mb-10">
                                 <div class="bg-white text-gray-900 font-sans">
                                    <div class="max-w-2xl pl-3 ">
                                       <h1 class="text-2xl font-bold mb-5 -ml-6 font-serif">
                                          Module o: Let’s Get Started!
                                       </h1>
                                       <h1 class="mb-4 -ml-6 font-bold">Welcome</h1>
                                       <p class="mb-4 -ml-6 font-bold">
                                          I’m thrilled to have you with me on this journey in the course, Turning
                                          Conflict Into Connection.
                                       </p>
                                       <p class="mb-4 -ml-6 ">
                                          Before diving in, I suggest taking a moment to honestly assess where you’re
                                          beginning. While this step is optional, it’ll give you a clearer view of areas
                                          where you can grow and improve throughout the course.
                                       </p>
                                       <p class="mb-4 mt-6 -ml-6 ">
                                          This reflection will also guide you in considering:
                                       </p>
                                       <ul class="list-disc pl-5 space-y-4">
                                          <li>What’s already going well?</li>
                                          <li>
                                             What changes do you hope to see by shifting your approach to conflict?
                                          </li>
                                          <li>
                                             What are the personal areas you feel you can work on to handle conflicts
                                             better?
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}

                        {activeContent === 'howToUse' && (
                           <div className="space-y-6">
                              <div className="relative rounded-l-xl overflow-hidden shadow-2xl border border-transparent ">
                                 {loading ? (
                                    <div className="flex justify-center items-center h-80 bg-gray-50">
                                       <div className="relative w-16 h-16">
                                          <div className="absolute w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                       </div>
                                    </div>
                                 ) : (
                                    <>
                                       <div className="w-full h-[440px] overflow-hidden">
                                          {/* Set height to 200px */}
                                          <video
                                             className="w-full h-full object-cover" // This ensures that the video fills the container
                                             controls
                                             poster="https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp"
                                          >
                                             <source src={videoUrl2} type="video/mp4" />
                                             Your browser does not support the video tag.
                                          </video>
                                       </div>
                                    </>
                                 )}
                              </div>
                              <div className="p-8">
                                 <div class="bg-white text-gray-900 font-sans">
                                    <div class="max-w-2xl pl-3 ">
                                       <h1 class="text-2xl font-bold mb-5 -ml-6 font-serif">
                                          Module o: Let’s Get Started!
                                       </h1>
                                       <h1 class="text-lg font-bold mb-4 -ml-6">Navigating Through This Course.</h1>
                                       <ul class="list-disc pl-5 space-y-5 ">
                                          <li>
                                             Start by downloading your course workbook. This is where you’ll keep track
                                             of your self-reflection, exercises, and key insights.
                                          </li>
                                          <li>
                                             Each lesson builds on the previous one, so we recommend focusing on one
                                             module at a time. Complete the related exercises in your workbook before
                                             moving on to the next lesson.
                                          </li>
                                          <li>
                                             If you’re taking this course with a partner:
                                             <ul class="list-disc pl-6 space-y-2 mt-2">
                                                <li>
                                                   make some time to process the content individually, away from one
                                                   another. We’ll provide resources to guide you in this process.
                                                </li>
                                                <li>
                                                   Come together to share your insights and complete the exercises
                                                   together.
                                                </li>
                                                <li>
                                                   It’s a good idea for both of you to download the workbook and fill
                                                   out your own versions.
                                                </li>
                                             </ul>
                                          </li>
                                          <li>
                                             If you’re taking this course solo:
                                             <ul class="list-disc pl-6 space-y-2 mt-2">
                                                <li>
                                                   While you can’t control your partner’s actions, you have the power to
                                                   change how you respond. This course will help you identify areas you
                                                   can adjust, whether you’re on your own or with a partner..
                                                </li>
                                                <li>
                                                   Remember, the cycle of conflict is made up of repeating patterns. By
                                                   changing your own patterns, you can shift the dynamic and create
                                                   healthier conflict resolution.
                                                </li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}

                        {activeContent === 'setUpForSuccess' && (
                           <div className="space-y-6">
                              <div className="relative rounded-l-xl overflow-hidden shadow-2xl border border-transparent ">
                                 {loading ? (
                                    <div className="flex justify-center items-center h-80 bg-gray-50">
                                       <div className="relative w-16 h-16">
                                          <div className="absolute w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                       </div>
                                    </div>
                                 ) : (
                                    <>
                                       <div className="w-full h-[440px] overflow-hidden">
                                          {/* Set height to 200px */}
                                          <video
                                             className="w-full h-full object-cover" // This ensures that the video fills the container
                                             controls
                                             poster="https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg"
                                          >
                                             <source src={videoUrl3} type="video/mp4" />
                                             Your browser does not support the video tag.
                                          </video>
                                       </div>
                                    </>
                                 )}
                              </div>
                              <div className="p-8 mb-10">
                                 <div class="bg-white text-gray-900 font-sans">
                                    <div class="max-w-2xl pl-3 ">
                                       <h1 class="text-2xl font-bold mb-5 -ml-6 font-serif">
                                          Module o: Let’s Get Started!
                                       </h1>
                                       <h1 class="mb-4 -ml-6 font-bold">Make a Commitment to Complete This Course</h1>
                                       <p class="mb-4 -ml-6 ">
                                          This is a self-paced course, so it’s important to set a clear plan for
                                          yourself (or with your partner) on how you’ll move through the content.
                                       </p>
                                       <p class="mb-4 -ml-6 ">
                                          We suggest watching all the videos in one module, then completing the related
                                          exercises before jumping into the next module.
                                       </p>
                                       <p class="mb-4 -ml-6 ">
                                          Each of the four modules is around 20 minutes long, and we recommend
                                          dedicating about an hour for the exercises that follow.
                                       </p>
                                       <p class="mb-4 -ml-6 ">How you tackle the course is entirely up to you.</p>
                                       <p class="mb-4 -ml-6 ">
                                          Will you binge-watch and complete it over a weekend? Or perhaps you prefer
                                          spreading it out and doing one module each week on Sunday evenings?
                                       </p>
                                       <p class="mb-4 -ml-6 ">
                                          Whatever you decide, we strongly recommend marking a specific time in your
                                          calendar to stick to your commitment. It’ll make all the difference in your
                                          success!
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>

                     {/* Sidebar Section */}
                     <div className="w-full md:w-1/4">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-4 rounded-r-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                           <h2 className="text-xl font-bold mb-2 border-b border-blue-700 pb-2">
                              Module 0: Shall We Begin?
                           </h2>
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
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
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
                                    src="https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp"
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
                                    src="https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg"
                                    width="50"
                                 />
                                 <span className="ml-3 font-medium">Set Yourself Up For Success</span>
                                 <i className="fas fa-check ml-auto text-green-400"></i>
                              </div>
                           </div>

                           <div className="mt-8 pt-4 border-t border-blue-700">
                              <div className="text-blue-200 text-sm">
                                 <p>
                                    Your progress: <span className="font-bold">2/3 completed</span>
                                 </p>
                                 <div className="w-full bg-blue-700 rounded-full h-2 mt-2">
                                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '66%' }}></div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="mt-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100 ml-4">
                           <h3 className="text-lg font-bold text-blue-900 mb-3">Need Help?</h3>
                           <p className="text-gray-700 text-sm">
                              If you have any questions or need help, feel free to reach out to our support team. We're
                              here to assist you!
                           </p>
                           <button className="mt-3 hover:cursor-pointer w-full bg-blue-100 text-blue-900 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-300">
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
                        <p className="text-sm text-blue-200">
                           Next up: Module 1 - Understanding the Dance of Conflict: How Conflict Shows Up
                        </p>
                        <p className="text-xs text-blue-300 mt-1">
                           Continue progressing toward healthier and more meaningful relationships.
                        </p>
                     </div>
                     <button
                        onClick={handleCompleteClick}
                        className="bg-white hover:cursor-pointer text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-105"
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