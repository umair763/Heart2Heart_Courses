import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Layout from '../layout/Layout';
import AuthContext from '../context/AuthContext';
import PersonalDashboard from '../pages/PersonalDashboard';
import MainPG from '../pages/MainPG';
import CoursePage from '../pages/CoursePage'; // <-- New dedicated component

function AppRoutes() {
   const { isAuthenticated } = useContext(AuthContext);

   return (
      <Routes>
         <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin />} />
         <Route
            path="/"
            element={
               <Layout>
                  <MainPG />
               </Layout>
            }
         />
         <Route
            path="/course"
            element={
               <Layout>
                  <CoursePage />
               </Layout>
            }
         />
         <Route
            path="/dashboard"
            element={
               isAuthenticated ? (
                  <Layout>
                     <PersonalDashboard />
                  </Layout>
               ) : (
                  <Navigate to="/signin" replace />
               )
            }
         />
         <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/signin'} replace />} />
      </Routes>
   );
}

export default AppRoutes;
