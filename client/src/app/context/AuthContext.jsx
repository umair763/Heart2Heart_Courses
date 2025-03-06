import React, { createContext } from 'react';

const AuthContext = createContext({
   isAuthenticated: false,
   setIsAuthenticated: () => {},
   user: null,
   setUser: () => {},
   loading: true,  // Add loading state
});

export default AuthContext;