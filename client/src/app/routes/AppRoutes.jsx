import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Layout from '../layout/Layout';
import PersonalDashboard from '../pages/PersonalDashboard';
import MainPG from '../pages/MainPG';
import CoursePage from '../pages/CoursePage';
import ProtectedRoutes from '../../ProtectedRoutes';

function AppRoutes() {
   return (
      <Routes>
         {/* Public Routes */}
         <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin />} />

         {/* Main Layout Wrapper */}
         <Route path="/" element={<Layout />}>
            <Route index element={<MainPG />} /> {/* Default route */}
            <Route path="courses" element={<CoursePage />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
               <Route path="dashboard" element={<PersonalDashboard />} />
            </Route>
         </Route>

         {/* Redirect all unknown paths to home */}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}

export default AppRoutes;
