// AppRoutes.jsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import Signup from '../pages/auth/Signup';
import Signin from '../pages/auth/Signin';
import MainPG from '../pages/MainPG';
import PersonalDashboard from '../pages/PersonalDashboard';
import CoursePage from '../pages/CoursePage';
import { AuthContext } from '../context/AuthContext';
import ProtectedRoute from '../../ProtectedRoutes';

function AppRoutes() {
   const { isAuthenticated } = useContext(AuthContext);

   return (
      <Routes>
         {/* Public Routes */}
         <Route
            path="/"
            element={
               <Layout>
                  <MainPG />
               </Layout>
            }
         />
         {/* Homepage wrapped in Layout */}
         <Route
            path="/course"
            element={
               <Layout>
                  <CoursePage />
               </Layout>
            }
         />
         {/* Course page wrapped in Layout */}
         <Route path="/Signup" element={<Signup />} />
         <Route path="/Signin" element={<Signin />} />
         {/* Protected Routes */}
         <Route element={<ProtectedRoute />}>
            {/* Only renders protected routes if authenticated */}
            <Route
               path="/dashboard"
               element={
                  <Layout>
                     <PersonalDashboard />
                  </Layout>
               }
            />
            {/* User's personal dashboard wrapped in Layout */}
         </Route>
         {/* Catch-all route (if route doesn't exist) */}
         <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/Signin'} replace />} />
      </Routes>
   );
}

export default AppRoutes;
