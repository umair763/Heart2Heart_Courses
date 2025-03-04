// App.jsx
import React from 'react';
import AppRoutes from './app/routes/AppRoutes';
import { AuthProvider } from './app/context/AuthContext'; // Ensure you're importing the correct AuthProvider
import { BrowserRouter } from 'react-router-dom';

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            {/* Wrap with AuthProvider here */}
            <div className="font-roboto">
               <AppRoutes />
            </div>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
