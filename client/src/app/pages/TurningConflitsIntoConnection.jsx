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
         title: 'Shall We Begin?',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/wDk5JPUjr5ZAuuUdDFRoZAGMVYmko8Cb5HKubdKcqao.jpg',
      },
      {
         id: 1,
         title: 'The Choreography Of Conflict: How Conflict Manifests',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/BOW-JJkpstMvpuytLsSqhMpQhHNpZ-ihAGKSuid08Mo.jpg',
      },
      {
         id: 2,
         title: "The Real Reasons You're In Conflict",
         imageUrl: 'https://storage.googleapis.com/a1aa/image/VbVrcw66vCaFy5ROLo2204gsVwap6Md_frbeaph52tE.jpg',
      },
      {
         id: 3,
         title: 'Creating New Opportunities In Conflict',
         imageUrl: 'https://storage.googleapis.com/a1aa/image/UqqDiGiRp3HVENuFxWnqoX9auzCiqD87dHCVN8KwXiA.jpg',
      },
      {
         id: 4,
         title: 'How To Reconcile and Repair',
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
                     Turning Conflict Into Connection
                  </h1>
                  <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-600 transition duration-300 shadow-lg">
                     START COURSE OVER
                  </button>
               </div>
               <div className="w-full md:w-1/2">
                  <img
                     alt="Illustration of two people in conflict with various symbols representing emotions and chaos"
                     className="w-full max-w-sm mx-auto md:max-w-md rounded-lg shadow-xl"
                     src="https://storage.googleapis.com/a1aa/image/VVmjRXMVq5i0_rCKWFv-TWFEbCB25nuGrXL9InyWS98.jpg"
                  />
               </div>
            </div>
         </div>
         <div className="bg-gray-100 flex justify-center items-center py-12 px-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
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
      </>
   );
}

export default TurningConflitsIntoConnection;
