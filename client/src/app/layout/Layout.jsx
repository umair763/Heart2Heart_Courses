import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
   return (
      <div className="flex flex-col min-h-screen bg-gray-50">
         <Header />
         <main className="flex-grow  w-full">
            <div className=" mx-auto">
               <Outlet /> {/* This ensures the page content is displayed inside Layout */}
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default Layout;
