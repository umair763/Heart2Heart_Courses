import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Layout from '../layout/Layout';
import AuthContext from '../context/AuthContext';
import PersonalDashboard from '../pages/PersonalDashboard';
import MainPG from '../pages/MainPG';
import CoursePage from '../pages/CoursePage';

function AppRoutes() {
   const { isAuthenticated } = useContext(AuthContext);

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<MainPG />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="courses" element={<CoursePage />} />
            <Route
               path="dashboard"
               element={isAuthenticated ? <PersonalDashboard /> : <Navigate to="/signin" replace />}
            />
         </Route>
      </Routes>
   );
}

export default AppRoutes;
