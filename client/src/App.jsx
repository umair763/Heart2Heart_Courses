import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './app/routes/AppRoutes';
import AuthContext from './app/context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

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

   const authContextValue = useMemo(
      () => ({ isAuthenticated, setIsAuthenticated, user, setUser }),
      [isAuthenticated, user]
   );

   return (
      <AuthContext.Provider value={authContextValue}>
         <BrowserRouter>
            <div className="font-roboto">
               <AppRoutes />
            </div>
         </BrowserRouter>
      </AuthContext.Provider>
   );
}

export default App;
