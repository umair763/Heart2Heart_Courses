import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../src/app/context/AuthContext';

const ProtectedRoute = ({ children }) => {
   const { isAuthenticated } = useContext(AuthContext);

   if (!isAuthenticated) {
      return <Navigate to="/signin" replace />;
   }

   return children;
};

export default ProtectedRoute;
