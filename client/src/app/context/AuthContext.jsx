// AuthContext.jsx
import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext({
   isAuthenticated: false,
   setIsAuthenticated: () => {},
   user: null,
   setUser: () => {},
});

// Create a provider for AuthContext
export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

   return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
         {children}
      </AuthContext.Provider>
   );
};
