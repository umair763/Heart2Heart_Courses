import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
   const location = useLocation();
   const isCoursePage = location.pathname.startsWith('/course'); // Detects course page

   return (
      <>
         <header
            className={`text-[#00203FFF] ${
               isCoursePage ? 'bg-[#d2874d]' : 'bg-gray-50'
            } p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4`}
         >
            <h1 className="text-xl xs:text-md md:text-3xl lg:text-4xl font-bold text-[#2E1A47] whitespace-nowrap ml-3">
               Heart2Heart | Courses
            </h1>
            <nav className="flex-1 flex justify-center">
               <div className="flex gap-3 md:gap-6 hover:cursor-pointer text-sm md:text-lg">
                  <Link
                     to="/"
                     className={` hover:text-[#325272] ${
                        isCoursePage ? 'hover:bg-[#c97b3f] ' : 'bg-gray-50'
                     } p-2 rounded-3xl `}
                  >
                     Home
                  </Link>
                  <Link
                     to="/dashboard"
                     className={` hover:text-[#325272] ${
                        isCoursePage ? 'hover:bg-[#c97b3f] ' : 'bg-gray-50'
                     } p-2 rounded-3xl `}
                  >
                     Dashboard
                  </Link>
               </div>
            </nav>
         </header>
         <div className="w-7xl line-height bg-[#00203FFF] mt-2 ml-7 "></div>
         <style>{`.line-height { height: 1px; }`}</style>
      </>
   );
}

export default Header;
