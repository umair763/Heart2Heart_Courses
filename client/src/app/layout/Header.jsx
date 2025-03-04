import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
   const navigate = useNavigate();

   return (
      <>
         <header className="text-[#00203FFF]  bg-gray-50 p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4">
            {/* Left Column - Title */}
            <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Heart2Heart | Courses</h1>

            {/* Middle Column - Navigation Links */}
            <nav className="flex-1 flex justify-center overflow-x-auto scrollbar-hide">
               <div className="flex gap-3 md:gap-6 lg:gap-8 mx-4">
                  <span
                     onClick={() => navigate('/')}
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Home
                  </span>
                  <span
                     onClick={() => navigate('/course')}
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Courses Page
                  </span>
                  <span
                     onClick={() => navigate('/dashboard')}
                     className="text-sm md:text-base whitespace-nowrap hover:text-[#325272] hover:cursor-pointer"
                  >
                     Dashboard
                  </span>
               </div>
            </nav>
         </header>
         <div className="w-7xl line-height bg-[#00203FFF] mt-1 ml-3"></div>
         <style>{`.line-height { height: 1px; }`}</style>
      </>
   );
}

export default Header;
