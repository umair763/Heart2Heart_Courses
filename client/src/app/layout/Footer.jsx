import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail 
} from 'lucide-react';

function Footer() {
   return (
      <footer className="bg-[#00203FFF] text-white">
         <div className="container max-w-[1200px] mx-auto px-4 py-12">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Logo and Description */}
               <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold mb-4">Heart2Heart</h2>
                  <p className="text-sm text-gray-300">
                     Empowering relationships through transformative online courses and resources.
                  </p>
               </div>

               {/* Quick Links */}
               <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <nav className="space-y-3">
                     <Link 
                        to="/" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Home
                     </Link>
                     <Link 
                        to="/courses" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Courses
                     </Link>
                     <Link 
                        to="/about" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        About Us
                     </Link>
                     <Link 
                        to="/contact" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Contact
                     </Link>
                  </nav>
               </div>

               {/* Support */}
               <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Support</h3>
                  <nav className="space-y-3">
                     <Link 
                        to="/help" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Help Center
                     </Link>
                     <Link 
                        to="/faq" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        FAQs
                     </Link>
                     <Link 
                        to="/privacy" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Privacy Policy
                     </Link>
                     <Link 
                        to="/terms" 
                        className="block text-gray-300 hover:text-white transition-colors"
                     >
                        Terms of Service
                     </Link>
                  </nav>
               </div>

               {/* Contact */}
               <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <div className="space-y-3 text-gray-300">
                     <p>Email: support@heart2heart.com</p>
                     <p>Phone: +1 (555) 123-4567</p>
                     
                     {/* Social Media Icons */}
                     <div className="flex space-x-4 mt-4">
                        <a 
                           href="https://facebook.com" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-300 hover:text-white transition-colors"
                        >
                           <Facebook size={24} />
                        </a>
                        <a 
                           href="https://twitter.com" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-300 hover:text-white transition-colors"
                        >
                           <Twitter size={24} />
                        </a>
                        <a 
                           href="https://instagram.com" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-300 hover:text-white transition-colors"
                        >
                           <Instagram size={24} />
                        </a>
                        <a 
                           href="https://linkedin.com" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-300 hover:text-white transition-colors"
                        >
                           <Linkedin size={24} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-gray-800 text-center">
               <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Heart2Heart. All Rights Reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;