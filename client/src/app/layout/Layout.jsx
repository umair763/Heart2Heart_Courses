import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
   return (
      <div className="flex flex-col min-h-screen bg-gray-50">
         <Header />
         <div className="flex-grow">
            <main className="p-6 bg-gray-50 w-full">
               <div className="max-w-7xl mx-auto">
                  {children} {/* This will render the current route's component */}
               </div>
            </main>
         </div>
         <Footer />
      </div>
   );
}

export default Layout;
