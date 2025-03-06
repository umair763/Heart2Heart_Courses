import { useState } from 'react';

function TurningConflitsIntoConnectionContent() {
   return (
      <>
         <div className="bg-[#f5f5f5]">
            <div className="flex flex-col items-center min-h-screen">
               <div className="w-full max-w-6xl bg-[#f5f5f5] p-4">
                  <div className="flex justify-between items-center"></div>
               </div>
               <div className="w-full max-w-6xl bg-[#f5f5f5] mt-4">
                  <div className="flex flex-col md:flex-row">
                     <div className="w-full md:w-3/4 bg-white p-4 rounded-lg shadow-lg">
                        <div className="relative">
                           <video alt="Video" className="w-full rounded-lg" height="300" width="600" controls>
                              <source
                                 src="https://storage.googleapis.com/a1aa/image/example_video.gif"
                                 type="video/gif"
                              />
                              Your browser does not support the video tag.
                           </video>
                           <div className="absolute bottom-0 left-0 bg-blue-900 text-white p-2 rounded-tr-lg">
                              <span>1:14</span>
                           </div>
                        </div>
                     </div>
                     <div className="w-full md:w-1/4 bg-blue-900 text-white p-4 rounded-lg mt-4 md:mt-0 md:ml-4">
                        <h2 className="text-lg font-semibold">Module 0: Shall We Begin?</h2>
                        <span className="text-sm">3 Lessons</span>
                        <div className="mt-4">
                           <div className="flex items-center mb-4">
                              <img
                                 alt="Instructor"
                                 className="w-12 h-12 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                 width="50"
                              />
                              <span className="ml-2">Welcome</span>
                              <i className="fas fa-check ml-auto"></i>
                           </div>
                           <div className="flex items-center mb-4 bg-white text-black p-2 rounded-lg">
                              <img
                                 alt="Course thumbnail"
                                 className="w-12 h-12 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/qpe52gnmWGl0XNpAWjFie1TwMUWdc64zfoo_PBqTQYw.jpg"
                                 width="50"
                              />
                              <span className="ml-2">How To Use This Course</span>
                              <i className="fas fa-play ml-auto"></i>
                           </div>
                           <div className="flex items-center">
                              <img
                                 alt="Instructor"
                                 className="w-12 h-12 rounded-full"
                                 height="50"
                                 src="https://storage.googleapis.com/a1aa/image/MFrUgxulKzsDDfGe3_x90hAllTdmTHkNrUdvIU_DhrU.jpg"
                                 width="50"
                              />
                              <span className="ml-2">Set Yourself Up For Success</span>
                              <i className="fas fa-check ml-auto"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full max-w-6xl bg-[#f5f5f5] mt-4">
                  <div className="bg-blue-900 text-white text-center py-4 rounded-lg">
                     <button className="bg-blue-900 text-white px-6 py-2 rounded-full">COMPLETE</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default TurningConflitsIntoConnectionContent;
