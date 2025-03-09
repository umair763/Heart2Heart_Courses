import { useState } from 'react';
import TurningConflitsIntoConnectionContent from './TurningConflitsIntoConnectionContent';
import { useNavigate } from 'react-router-dom';

function TurningConflitsIntoConnection() {
   const navigate = useNavigate();

   const handleModuleClick = (moduleId) => {
      navigate(`/TurningConflitsIntoConnectionContent`);
   };

   const modules = [
      {
         id: 0,
         title: 'Let’s Get Started!',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/wDk5JPUjr5ZAuuUdDFRoZAGMVYmko8Cb5HKubdKcqao.jpg',
      },
      {
         id: 1,
         title: 'Understanding the Dance of Conflict: How Conflict Shows Up',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/BOW-JJkpstMvpuytLsSqhMpQhHNpZ-ihAGKSuid08Mo.jpg',
      },
      {
         id: 2,
         title: 'What’s Really Behind Your Conflict',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/VbVrcw66vCaFy5ROLo2204gsVwap6Md_frbeaph52tE.jpg',
      },
      {
         id: 3,
         title: 'Turning Conflict Into Opportunity',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/UqqDiGiRp3HVENuFxWnqoX9auzCiqD87dHCVN8KwXiA.jpg',
      },
      {
         id: 4,
         title: 'How To Heal and Reconcile',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/fdK471Ok_xq386fz0lubT-sXRxwnHJMhCBeTjt6av6s.jpg',
      },
   ];

   return (
      <>
         <div className="bg-gradient-to-r from-pink-300 to-red-400 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
               <div className="text-center md:text-left mb-8 md:mb-0 max-w-lg">
                  <div className="bg-white text-red-600 text-xs font-bold px-3 py-1 inline-block rounded mb-4 shadow-lg">
                     CONFLICT RESOLUTION
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
                     Transforming Disagreements into Harmony
                  </h1>
                  <button
                     onClick={() => navigate(`/TurningConflitsIntoConnectionContent`)}
                     className="border hover:cursor-pointer border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-600 transition duration-300 shadow-lg"
                  >
                     START COURSE OVER
                  </button>
               </div>
               <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center lg:-mr-13 md:-mr-10 sm:-mr-6">
                  <div className="w-full h-auto md:w-96 md:h-96 lg:w-[500px] lg:h-[450px] rounded-l-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                     <img
                        src="https://storage.googleapis.com/a1aa/image/VVmjRXMVq5i0_rCKWFv-TWFEbCB25nuGrXL9InyWS98.jpg"
                        alt="Ali Haider"
                        className="w-full h-full object-cover object-center"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[#C0C0C0] flex justify-center items-center w-full">
            {/* Main Wrapper */}
            <div className="p-6 rounded-lg flex flex-col  lg:flex-row gap-6 w-full max-w-7xl">
               {/* Left Div: Turning Conflict Into Connection and Modules */}
               <div className="flex-1 gap-6 lg:w-3/4">
                  {/* First Card: Turning Conflict Into Connection */}
                  <div className="flex-1 bg-white p-6 rounded-xl mb-5">
                     <h2 className="text-2xl font-bold mb-2">Transforming Disagreements into Harmony</h2>
                     <p className="text-gray-700 mb-4">
                        What happens when you and your partner disagree? Does it bring you closer or push you further
                        apart? In this self-paced course, you'll discover the true causes of conflict and disconnection,
                        and learn how to achieve lasting reconciliation.
                     </p>
                     <p className="text-gray-700 mb-2">10 of 11 Lessons Completed</p>
                     <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                        <div className="bg-indigo-900 h-2 rounded-full width-[90%]"></div>
                     </div>
                     <button className="bg-indigo-900 text-white py-2 px-4 rounded-full w-full md:w-auto hover:cursor-pointer hover:bg-indigo-950">
                        Continue Course
                     </button>
                  </div>

                  {/* Modules */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-xl">
                     <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h1 className="text-3xl font-semibold text-gray-800">Modules</h1>
                        <span className="text-lg font-bold text-gray-600">{modules.length}</span>
                     </div>
                     <div className="space-y-6">
                        {modules.map((module) => (
                           <div
                              key={module.id}
                              onClick={() => handleModuleClick(module.id)}
                              className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105"
                           >
                              <div className="flex items-center space-x-4">
                                 <img
                                    alt={`Module ${module.id}: ${module.title}`}
                                    className="w-28 h-20 object-cover rounded-lg shadow-md"
                                    src={module.imageUrl}
                                 />
                                 <span className="text-lg font-medium text-gray-800">{`Module ${module.id}: ${module.title}`}</span>
                              </div>
                              <i className="fas fa-chevron-right text-gray-600 text-lg"></i>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right Div: Download the Workbook */}
               <div className="w-full lg:w-2/6 bg-white p-6 rounded-xl h-5/6">
                  <h2 className="text-2xl font-bold mb-2">Download the Workbook</h2>
                  <p className="text-gray-700 mb-4">
                     This workbook is meant to help you transform ideas into actions and insights. Download a copy for
                     you (and your partner if you're taking this with someone).
                  </p>
                  <button className="bg-indigo-900 hover:bg-indigo-950 text-white py-2 px-4 rounded-full w-full md:w-auto flex items-center justify-center">
                     <a
                        href="/src/assets/files/Turning_Conflict_into_Connection_Workbook.pdf" // Path to the PDF file
                        download="Workbook.pdf" // Optional: Sets the filename when downloading
                        className="text-white py-2 px-4 rounded-full w-full md:w-auto flex items-center justify-center"
                     >
                        <span>Download Workbook</span>
                        <i className="fas fa-download ml-2"></i>
                     </a>
                     {/* <i className="fas fa-download ml-2"></i> */}
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default TurningConflitsIntoConnection;
