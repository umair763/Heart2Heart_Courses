import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <>
         <header className="text-[#00203FFF]  bg-gray-50 p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4">
            {/* Left Column - Title */}
            <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Heart2Heart | Courses</h1>

            {/* Middle Column - Navigation Links */}
            <nav className="flex-1 flex justify-center overflow-x-auto scrollbar-hide">
               <div className="flex gap-3 md:gap-6 lg:gap-8 mx-4">
                  <Link
                     to="/"
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Home
                  </Link>
                  <Link
                     to="/course"
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Courses Page
                  </Link>
                  <Link
                     to="/dashboard"
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Dashboard
                  </Link>
               </div>
            </nav>
         </header>
         <div className="w-7xl line-height bg-[#00203FFF] mt-1 ml-3"></div>
         <style>{`.line-height { height: 1px; }`}</style>
      </>
   );
}

export default Header;
