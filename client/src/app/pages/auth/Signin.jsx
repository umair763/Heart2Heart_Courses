import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import logo from "/src/assets/images/H2Hlogobrown.png"; // Import logo

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const { setIsAuthenticated, setUser } = useContext(AuthContext);

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
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
            {/* Logo */}
            <img src={logo} alt="Heart 2 Heart Logo" className="w-20 mb-4" />

            {/* Title */}
            <h2 className="text-3xl font-bold text-brown-700">Sign in</h2>
            <p className="text-gray-500 mt-1">Welcome to Heart 2 Heart</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4">
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="submit"
                  className="w-full bg-brown-600 cursor-pointer hover:bg-brown-700 text-white font-bold py-3 rounded-lg"
               >
                  SIGN IN
               </button>
            </form>

            {/* Signup Link */}
            <p className="mt-4 text-gray-600">
               New to Heart 2 Heart? &nbsp;
               <span
                  className="text-brown-700 cursor-pointer hover:underline"
                  onClick={() => navigate('/signup')}
               >
                  Sign up
               </span>
            </p>
         </div>
      </div>
   );
}

export default Signin;
