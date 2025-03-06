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
      <header className="w-full text-[#8a552d] shadow-sm mt-2">
         <div className="max-w-[1200px] mx-auto px-4">
            {/* Mobile Menu Overlay */}
            {isMenuOpen && <div className="fixed inset-0 bg-[#d2874d] z-40 md:hidden" onClick={closeMenu} />}

            {/* Mobile Navigation - Full Screen Overlay */}
            <div
               className={`
                  fixed top-0 left-0 right-0 bottom-0 
                  z-50 
                  transform transition-transform duration-300 ease-in-out
                  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                  md:hidden
                  bg-[#b58d6eb0]
               `}
            >
               <div className="flex justify-between p-6 text-[#8a552d]  ">
                  <Link to="/" className=" text-2xl font-bold " onClick={closeMenu}>
                     Syed Ali Haider
                  </Link>

                  <button onClick={closeMenu} aria-label="Close menu" className="p-2">
                     <X size={24} />
                  </button>
               </div>

               <nav className="flex flex-col px-6 space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Home
                  </Link>
                  {/* <Link to="/courses" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Courses
                  </Link> */}
                  <Link to="/dashboard" className="text-lg font-medium py-2 border-b" onClick={closeMenu}>
                     Dashboard
                  </Link>
               </nav>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center justify-between py-4">
               {/* Logo */}
               <Link to="/" className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                  Syed Ali Haider
               </Link>

               {/* Desktop Navigation Links */}
               <nav className="hidden md:flex items-center space-x-6">
                  <Link to="/" className="text-base font-medium hover:text-[#704524] transition">
                     Home
                  </Link>
                  <Link to="/dashboard" className="text-base font-medium hover:text-[#704524] transition">
                     Dashboard
                  </Link>
               </nav>

               {/* Mobile Menu Toggle */}
               <button onClick={toggleMenu} aria-label="Open menu" className="md:hidden">
                  <Menu size={24} />
               </button>
            </div>
         </div>
         <div className="ml-4 w-[95%] line-height bg-[#8a552d] mt-2 "></div>
         <style>{`.line-height { height: 1px; }`}</style>{' '}
      </header>
   );
};

export default Header2;
