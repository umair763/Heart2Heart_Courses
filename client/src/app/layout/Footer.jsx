import React from 'react';
import logo from '../../assets/images/h2h brown logo.png';

function Footer() {
   return (
      <footer className="bg-gray-900 text-white p-6 -mb-6 mt-6">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xl xs:text-sm md:text-lg lg:text-xl">
            {/* First Column (Three Rows) */}
            <div className="space-y-4">
               <h3 className="text-lg font-semibold">About Us</h3>
               <ul className="space-y-2">
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        Our Mission
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        Team
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        Careers
                     </a>
                  </li>
               </ul>
            </div>

            {/* Second Column (Three Rows) */}
            <div className="space-y-4">
               <h3 className="text-lg font-semibold">Support</h3>
               <ul className="space-y-2">
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        Contact Us
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        Help Center
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-400 transition">
                        FAQs
                     </a>
                  </li>
               </ul>
            </div>

            {/* Third Column (Right-Aligned Name) */}
            <div className="flex flex-col justify-between">
               <img src={logo} alt="logo" />
               <p className="text-sm text-right">Courses & Educational Resources</p>
            </div>
         </div>

         {/* Bottom Section (Social Media Links) */}
         <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
               {/* Social Media Links */}
               <div className="flex justify-center space-x-6 ">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                     <i className="fab fa-facebook-f fa-2x "></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                     <i className="fab fa-twitter fa-2x "></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                     <i className="fab fa-instagram fa-2x "></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                     <i className="fab fa-linkedin fa-2x "></i>
                  </a>
               </div>
               {/* Copyright Section */}
               <div className="text-center text-sm text-gray-400 sm:col-span-3 mt-4 sm:mt-0">
                  &copy; 2023 Heart2Heart | All Rights Reserved
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
