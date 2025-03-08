import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthContext from './app/context/AuthContext';
import { auth } from './firebase/firebaseConfig'; // Adjust path if needed

function ProtectedRoutes() {
   const { isAuthenticated, loading, setIsAuthenticated, setUser } = useContext(AuthContext);
   const [localLoading, setLocalLoading] = useState(true);
   const location = useLocation();

   // Double-check authentication on route change
   useEffect(() => {
      const checkAuthStatus = async () => {
         // First check localStorage as a fast path
         const storedUser = localStorage.getItem('user');
         const storedAuth = localStorage.getItem('isAuthenticated');

         if (storedUser && storedAuth === 'true') {
            // Only update if needed
            if (!isAuthenticated) setUser(JSON.parse(storedUser));
            if (!isAuthenticated) setIsAuthenticated(true);
            setLocalLoading(false);
         } else {
            // Then verify with current Firebase auth state
            const currentUser = auth.currentUser;
            if (currentUser) {
               // Only update if needed
               if (!isAuthenticated) setUser(currentUser);
               if (!isAuthenticated) setIsAuthenticated(true);
            } else {
               setIsAuthenticated(false);
               setUser(null);
            }
            setLocalLoading(false);
         }
      };

      checkAuthStatus();
   }, [location, isAuthenticated, setIsAuthenticated, setUser]);

   // Show loading indicator while checking auth state
   if (loading || localLoading) {
      return <div className="flex justify-center items-center h-screen">Loading...</div>;
   }

   // Redirect to signin if not authenticated
   if (!isAuthenticated) {
      // Store the attempted URL for redirect after login
      const currentPath = location.pathname;
      sessionStorage.setItem('redirectAfterLogin', currentPath);
      return <Navigate to="/signin" replace />;
   }

   // Render child routes if authenticated
   return <Outlet />;
}

export default ProtectedRoutes;
