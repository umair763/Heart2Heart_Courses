import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header className="bg-gray-50">
         <div className="text-[#00203FFF] p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4 relative">
            {/* Left Column - Title */}
            <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Heart2Heart | Courses</h1>

            {/* Middle Column - Navigation Links */}
            <nav className="flex-1 flex justify-center overflow-x-auto scrollbar-hide ">
               <div className="flex gap-3 md:gap-6 lg:gap-8 mx-4">
                  <Link to="/" className="text-sm md:text-base whitespace-nowrap hover:cursor-pointer text-[#003161]">
                     Home
                  </Link>
                  <Link
                     to="/course"
                     className="text-sm md:text-base whitespace-nowrap hover:cursor-pointer text-[#003161]"
                  >
                     Course Page
                  </Link>
                  <Link
                     to="/dashboard"
                     className="text-sm md:text-base whitespace-nowrap hover:cursor-pointer text-[#003161]"
                  >
                     Dashboard
                  </Link>
               </div>
            </nav>
         </div>

         {/* Underline Section */}
         <div className="w-full line-height bg-[#00203FFF] mt-1"></div>
         <style>
            {`
               .line-height {
                  height: 1px;
               }
            `}
         </style>
         
      </header>
   );
}

export default Header;
