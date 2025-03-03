import { useState } from 'react';

function CourseCard({ imageUrl, title, buttonLink, p, li1, li2, li3 }) {
   return (
      <div className="bg-[#F5F2EC] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center max-w-4xl mx-auto text-left mb-5">
         <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="bg-gray-300 rounded-lg overflow-hidden w-3/4 md:w-full">
               <img src={imageUrl} alt="Illustration" className="w-full object-cover" />
            </div>
         </div>
         <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold text-gray-900 text-left">{title}</h2>
            <div className="w-full line-height bg-[#00203FFF] mt-1"></div>
            <style>
               {`
               .line-height {
                  height: 1px;
               }`}
            </style>
            <div className="w-full bg-[#00203FFF] mt-1"></div>
            <p className="text-gray-600 mt-2 text-left">{p}</p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm text-left">
               <li className="flex items-center gap-2">
                  <span className="text-xl">⏳</span> {li1}
               </li>
               <li className="flex items-center gap-2">
                  <span className="text-xl">📖</span> {li2}
               </li>
               <li className="flex items-center gap-2">
                  <span className="text-xl">📚</span> {li3}
               </li>
            </ul>
            <a href={buttonLink} className="mt-6 inline-block bg-[#10004F] text-white py-2 px-4 rounded-full text-sm">
               LEARN MORE
            </a>
         </div>
      </div>
   );
}

export default CourseCard;
