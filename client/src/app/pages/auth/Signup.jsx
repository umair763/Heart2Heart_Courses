import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/H2Hlogobrown.png'; // Ensure the path is correct

const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [dob, setDob] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      setError('');

      if (password !== confirmPassword) {
         setError('Passwords do not match');
         return;
      }

      if (username && email && password && dob) {
         const user = { username, email, dob, password };
         localStorage.setItem('user', JSON.stringify(user)); // Store user data
         navigate('/signin'); // Redirect to Sign In
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <div className="bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 w-full max-w-md">
            {/* H2H Logo */}
            <div className="flex justify-center mb-6">
               <img src={logo} alt="Heart2Heart Logo" className="w-24 md:w-32" />
            </div>

            <h2 className="text-2xl font-bold text-brown-700 text-center mb-2">Create Account</h2>
            <p className="text-gray-500 text-center mb-6">Sign up at Heart2Heart</p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500 text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <input
                  type="text"
                  placeholder="Date of Birth (MM/DD/YYYY)"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500 text-sm"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  pattern="\d{2}/\d{2}/\d{4}"
                  title="Enter date in MM/DD/YYYY format"
                  required
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
               <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 border rounded-lg focus:outline-brown-500 text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
               />

               {error && <p className="text-red-600 text-sm">{error}</p>}

               <button
                  type="submit"
                  className="w-full bg-brown-600 cursor-pointer hover:bg-brown-700 text-white font-semibold py-3 rounded-full text-sm"
               >
                  SIGN UP
               </button>
            </form>

            <button className="mt-4 text-gray-700 text-sm w-full text-center" onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-brown-600 cursor-pointer">Sign In</span>
            </button>
         </div>
      </div>
   );
};

export default SignUp;
