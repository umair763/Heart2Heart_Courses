// App.jsx
import React from 'react';
import AppRoutes from './app/routes/AppRoutes';
import AuthProvider from './app/context/AuthContext'; // Import the AuthProvider
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

function App() {
   return (
      <BrowserRouter>
         {/* Wrap your application with BrowserRouter */}
         <AuthProvider>
            {/* Wrap with AuthProvider */}
            <div className="font-roboto">
               <AppRoutes />
            </div>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
