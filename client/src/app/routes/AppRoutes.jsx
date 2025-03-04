import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Layout from '../layout/Layout';
import AuthContext from '../context/AuthContext';
import PersonalDashboard from '../pages/PersonalDashboard';
import MainPG from '../pages/MainPG';
import CoursePage from '../pages/CoursePage';
import ProtectedRoutes from '../../ProtectedRoutes';

function AppRoutes() {
   const { isAuthenticated } = useContext(AuthContext);

   return (
      <Routes>
         {/* Public Routes */}
         <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin />} />

         {/* Protected Routes */}
         <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Layout />}>
               <Route index element={<MainPG />} /> 
               <Route path="dashboard" element={<PersonalDashboard />} />
               <Route path="courses" element={<CoursePage />} />
            </Route>
         </Route>

         {/* Redirect for unknown routes */}
         <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/signin'} replace />} />
      </Routes>
   );
}

export default AppRoutes;
