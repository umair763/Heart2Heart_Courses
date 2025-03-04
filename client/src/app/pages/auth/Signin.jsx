// Signin.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Ensure you're importing the context correctly

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   // Accessing context values
   const { setIsAuthenticated, setUser } = useContext(AuthContext); // Destructure correctly

   const handleSubmit = (e) => {
      e.preventDefault();

      const storedUser = localStorage.getItem('user');

      if (storedUser) {
         const user = JSON.parse(storedUser);

         if (user.email === email && user.password === password) {
            setUser(user); // Set user data in context
            setIsAuthenticated(true);
            navigate('/');
         } else {
            alert('Invalid credentials');
         }
      } else {
         alert('User not found. Please sign up.');
      }
   };

   return (
      <div className="flex flex-col justify-center items-center p-6 bg-white w-full md:w-1/2 h-full">
         <h2 className="text-3xl font-bold text-purple-700">Sign in</h2>
         <p className="text-gray-500 mt-1">Welcome to SocialSight</p>
         <form
            className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4 md:mt-6 space-y-3 md:space-y-4 flex flex-col items-center"
            onSubmit={handleSubmit}
         >
            <input
               type="email"
               placeholder="Email Address"
               className="w-full p-3 border rounded-lg focus:outline-purple-500"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               type="password"
               placeholder="Password"
               className="w-full p-3 border rounded-lg focus:outline-purple-500"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button
               type="submit"
               className="w-1/2 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-bold py-3 rounded-full"
            >
               SIGN IN
            </button>
         </form>
         <p className="mt-4 text-gray-600">
            New to SocialSight? &nbsp;
            <span
               className="text-purple-600 cursor-pointer hover:underline w-1/2 rounded-full py-2 text-center"
               onClick={() => navigate('/signup')}
            >
               Sign up
            </span>
         </p>
      </div>
   );
}

export default Signin;
