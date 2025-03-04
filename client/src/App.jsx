import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './app/routes/AppRoutes';
import AuthContext from './app/context/AuthContext';

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(JSON.parse(storedUser));
         setIsAuthenticated(true);
      }
   }, []);

   return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
         <BrowserRouter>  {/* Wrap the app in BrowserRouter */}
            <div className="font-roboto">
               <AppRoutes />
            </div>
         </BrowserRouter>
      </AuthContext.Provider>
   );
}

export default App;
