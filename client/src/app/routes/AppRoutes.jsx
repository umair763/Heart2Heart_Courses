import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../pages/auth/Signup';
import Signin from '../pages/auth/Signin';
import Layout from '../layout/Layout';
import PersonalDashboard from '../pages/PersonalDashboard';
import MainPG from '../pages/MainPG';
import CoursePage from '../pages/CoursePage';
import ProtectedRoutes from '../../ProtectedRoutes';
import CourseContent from '../pages/CourseContent';
import ReviewModules from '../pages/ReviewModules';
import TurningConflitsIntoConnection from '../pages/TurningConflitsIntoConnection';
import TurningConflitsIntoConnectionContent from '../pages/TurningConflitsIntoConnectionContent';
import CourseReview from '../pages/TurningConflitsIntoConnectionContent';

function AppRoutes() {
   return (
      <Routes>
         {/* Public Routes */}
         <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin />} />

         {/* Main Layout Wrapper */}
         <Route path="/" element={<Layout />}>
            <Route index element={<MainPG />} /> {/* Default route */}
            <Route path="/course/:courseId" element={<CoursePage />} />
            {/* <Route path="courses" element={<CoursePage />} /> */}
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
               <Route path="/coursecontent" element={<CourseContent />} />
               <Route path="/reviewmodules" element={<ReviewModules />} />
               <Route path="/review/:courseId" element={<CourseReview />} />
               <Route path="/TurningConflitsIntoConnection" element={<TurningConflitsIntoConnection />} />
               <Route path="/TurningConflitsIntoConnectionContent" element={<TurningConflitsIntoConnectionContent />} />
               <Route path="/dashboard" element={<PersonalDashboard />} />
            </Route>
         </Route>

         {/* Redirect all unknown paths to home */}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}

export default AppRoutes;
