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
         <div className="bg-pink-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
               <div className="text-center md:text-left mb-8 md:mb-0">
                  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 inline-block mb-4">
                     CONFLICT RESOLUTION
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Turning Conflict Into Connection</h1>
                  <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
                     START COURSE OVER
                  </button>
               </div>
               <div className="w-full md:w-1/2">
                  <img
                     alt="Illustration of two people in conflict with various symbols representing emotions and chaos"
                     height="400"
                     src="https://storage.googleapis.com/a1aa/image/VVmjRXMVq5i0_rCKWFv-TWFEbCB25nuGrXL9InyWS98.jpg"
                     width="600"
                  />
               </div>
            </div>
         </div>
         <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
               <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-semibold">Modules</h1>
                  <span className="text-xl font-semibold">{modules.length}</span>
               </div>
               <div className="space-y-4">
                  {modules.map((module) => (
                     <div
                        key={module.id}
                        onClick={() => handleModuleClick(module.id)}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-4 rounded"
                     >
                        <div className="flex items-center space-x-4">
                           <img
                              alt={`Module ${module.id}: ${module.title}`}
                              className="w-24 h-16 object-cover rounded"
                              height="60"
                              src={module.imageUrl}
                              width="100"
                           />
                           <span className="text-lg font-medium">{`Module ${module.id}: ${module.title}`}</span>
                        </div>
                        <i className="fas fa-chevron-down"></i>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default TurningConflitsIntoConnection;
