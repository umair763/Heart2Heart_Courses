import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
   return (
      <div className="flex flex-col min-h-screen bg-gray-50">
         {/* Added some basic styling */}
         <Header />
         <div className="flex-grow">
            {/* Removed Sidebar, just the main content area */}
            <main className="p-6 bg-gray-50 w-full">
               <div className="max-w-7xl mx-auto">{children}</div>
            </main>
         </div>
         <Footer />
      </div>
   );
}

export default Layout;
