import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
   return (
      <div className="flex flex-col min-h-screen bg-[#C0C0C0] w-full">
         <Header />
         <main className="">
            <div className="">
               <Outlet /> {/* This ensures the page content is displayed inside Layout */}
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default Layout;
