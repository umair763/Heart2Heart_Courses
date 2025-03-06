import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './app/routes/AppRoutes';
import AuthContext from './app/context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig'; // Adjust path if needed

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Set up Firebase auth state listener
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(currentUser));
            localStorage.setItem('isAuthenticated', 'true');
         } else {
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
         }
         setLoading(false);
      });

      // Fallback to localStorage if Firebase auth is slow
      const storedUser = localStorage.getItem('user');
      const storedAuth = localStorage.getItem('isAuthenticated');
      if (storedUser && storedAuth === 'true') {
         setUser(JSON.parse(storedUser));
         setIsAuthenticated(true);
      }

      // Clean up subscription
      return () => unsubscribe();
   }, []);

   const authContextValue = useMemo(
      () => ({
         isAuthenticated,
         setIsAuthenticated: (value) => {
            setIsAuthenticated(value);
            localStorage.setItem('isAuthenticated', value);
         },
         user,
         setUser: (user) => {
            setUser(user);
            if (user) {
               localStorage.setItem('user', JSON.stringify(user));
            } else {
               localStorage.removeItem('user');
               localStorage.removeItem('isAuthenticated');
            }
         },
         loading
      }),
      [isAuthenticated, user, loading]
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