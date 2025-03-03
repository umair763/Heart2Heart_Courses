import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header className="text-[#6E54D1] bg-gray-50 p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4">
         {/* Left Column - Title */}
         <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Heart2Heart | Courses</h1>

         {/* Middle Column - Navigation Links */}
         <nav className="flex-1 flex justify-center overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 md:gap-6 lg:gap-8 mx-4">
               <Link to="/" className="text-sm md:text-base whitespace-nowrap hover:text-blue-700">
                  Home
               </Link>
               <Link to="/course" className="text-sm md:text-base whitespace-nowrap hover:text-blue-700">
                  Course Page
               </Link>
               <Link to="/dashboard" className="text-sm md:text-base whitespace-nowrap hover:text-blue-700">
                  Dashboard
               </Link>
            </div>
         </nav>

         {/* Right Column - Additional Elements */}
         <div>
            <p>
               <b>User name</b>
            </p>
         </div>
         <div className="relative w-6 h-6 md:w-7 md:h-7 lg:w-12 lg:h-12 mr-2 flex justify-center items-center border-4 border-blue-300 rounded-full overflow-hidden">
            <div className="w-3 md:w-3 lg:w-6">
               <img src="./src/assets/images/person-icon-1682.png" />
            </div>
         </div>
      </header>
   );
}

export default Header;
