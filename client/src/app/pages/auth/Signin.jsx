import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import bg from '../../../assets/images/H2H logo bbrown heart only.png';

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
      <div
         className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain', // Ensures the image covers the screen
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents repeating of the image
         }}
      >
         <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#92553D] text-center">Sign in</h2>
            <p className="text-gray-500 mt-2 text-center">Welcome to Heart2Heart Dashboard</p>
            <form className="w-full mt-6 space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="submit"
                  className="w-full sm:w-3/4 md:w-2/3 bg-[#92553D] cursor-pointer hover:bg-[#785040] text-white font-bold py-3 rounded-full"
               >
                  SIGN IN
               </button>
            </form>
            <p className="mt-4 text-gray-600 text-center">
               New to Heart2Heart? &nbsp;
               <span className="text-[#92553D] cursor-pointer hover:underline" onClick={() => navigate('/signup')}>
                  Sign up
               </span>
            </p>
         </div>
      </div>
   );
}

export default Signin;
