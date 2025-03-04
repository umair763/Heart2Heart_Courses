import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
   return (
      <div className="flex flex-col min-h-screen bg-gray-50">
         <Header />
         <main className="flex-grow p-6 bg-gray-50 w-full">
            <div className="max-w-7xl mx-auto">
               <Outlet /> {/* This ensures the page content is displayed inside Layout */}
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default Layout;
