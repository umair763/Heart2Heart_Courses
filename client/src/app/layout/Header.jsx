// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//    const location = useLocation();
//    const isCoursePage = location.pathname.startsWith('/course'); // Detects course page

//    return (
//       <>
//          <header
//             className={`text-[#8a552d] ${
//                isCoursePage ? 'bg-[#d2874d]' : ''
//             } p-4 flex items-center justify-between gap-4 md:gap-8 -mb-4`}
//          >
//             <h1 className="text-xl xs:text-md md:text-3xl lg:text-4xl font-bold text-[#8a552d]  whitespace-nowrap ml-6">
//                Heart2Heart | Courses
//             </h1>
//             <nav className="flex-1 flex justify-center">
//                <div className="flex gap-3 md:gap-6 hover:cursor-pointer text-sm md:text-lg">
//                   <Link
//                      to="/"
//                      className={` hover:text-[#755136] ${
//                         isCoursePage ? 'hover:bg-[#c97b3f] ' : ''
//                      } p-2 rounded-3xl `}
//                   >
//                      Home
//                   </Link>
//                   <Link
//                      to="/dashboard"
//                      className={` hover:text-[#755136] ${
//                         isCoursePage ? 'hover:bg-[#c97b3f] ' : ''
//                      } p-2 rounded-3xl `}
//                   >
//                      Dashboard
//                   </Link>
//                </div>
//             </nav>
//          </header>
//          <div className="w-7xl line-height bg-[#8a552d]  mt-2 ml-10 "></div>
//          <style>{`.line-height { height: 1px; }`}</style>
//       </>
//    );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header2 = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   return (
      <header className="w-full bg-white shadow-sm">
         <div className="max-w-[1200px] mx-auto px-4">
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
               <div 
                  className="fixed inset-0 bg-black/50 z-40 md:hidden" 
                  onClick={closeMenu} 
               />
            )}

            {/* Mobile Navigation - Full Screen Overlay */}
            <div
               className={`
                  fixed top-0 left-0 right-0 bottom-0 
                  bg-white 
                  z-50 
                  transform transition-transform duration-300 ease-in-out
                  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                  md:hidden
               `}
            >
               <div className="flex justify-between p-6">
                  <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
                     Heart2Heart
                  </Link>

                  <button onClick={closeMenu} aria-label="Close menu" className="p-2">
                     <X size={24} />
                  </button>
               </div>

               <nav className="flex flex-col px-6 space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Home
                  </Link>
                  <Link to="/courses" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Courses
                  </Link>
                  <Link to="/dashboard" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Dashboard
                  </Link>
               </nav>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center justify-between py-4">
               {/* Logo */}
               <Link to="/" className="text-xl md:text-2xl font-bold">
                  Heart2Heart
               </Link>

               {/* Desktop Navigation Links */}
               <nav className="hidden md:flex items-center space-x-6">
                  <Link to="/" className="text-base font-medium hover:text-blue-600 transition">
                     Home
                  </Link>
                  <Link to="/dashboard" className="text-base font-medium hover:text-blue-600 transition">
                     Dashboard
                  </Link>
               </nav>

               {/* Mobile Menu Toggle */}
               <button 
                  onClick={toggleMenu} 
                  aria-label="Open menu" 
                  className="md:hidden"
               >
                  <Menu size={24} />
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header2;