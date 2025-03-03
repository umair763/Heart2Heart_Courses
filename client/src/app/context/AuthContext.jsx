import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

   // Check authentication status on page load (can check localStorage, etc.)
   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setIsAuthenticated(true);
         setUser(JSON.parse(storedUser));
      }
   }, []);

   // Method to log in the user
   const login = (userInfo) => {
      setIsAuthenticated(true);
      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo)); // Save to localStorage
   };

   // Method to log out the user
   const logout = () => {
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('user');
   };

   return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
