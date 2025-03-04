import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [profileImage, setProfileImage] = useState(null);
   const navigate = useNavigate();

   const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setProfileImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username && email && password) {
         const user = { username, email, password, profileImage };
         localStorage.setItem('user', JSON.stringify(user)); // Store user data
         navigate('/Signin'); // Redirect to signin after signup
      }
   };

   return (
      <>
         {/* Right Side - Signup Form */}
         <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-700 mb-2">Create Account</h2>
            <p className="text-gray-500 text-sm md:text-base mb-6">Sign up at SocialSight</p>

            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex justify-center items-center border-4 border-purple-300 rounded-full overflow-hidden">
               {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                  <span className="w-6 lg:w-13 md:w-8 sm:w-7">
                     <img src="./src/assets/images/person-icon-1682.png" />
                  </span>
               )}
               <label className="absolute w-9 bottom-1 right-2 bg-purple-300 text-white  md:p-1 rounded-full cursor-pointer shadow-lg z-50 text-sm md:text-base">
                  <img src="./src/assets/images/camera.png" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
               </label>
            </div>

            <form
               className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4 md:mt-6 space-y-3 md:space-y-4 flex flex-col items-center"
               onSubmit={handleSubmit}
            >
               <input
                  type="text"
                  placeholder="Full Name"
                  className="w-sm p-2 md:p-3 border rounded-lg focus:outline-purple-500 text-sm md:text-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-sm p-2 md:p-3 border rounded-lg focus:outline-purple-500 text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-sm p-2 md:p-3 border rounded-lg focus:outline-purple-500 text-sm md:text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="submit"
                  className="w-1/2 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-semibold py-2 md:py-3 rounded-full text-sm md:text-base"
               >
                  SIGN UP
               </button>
            </form>

            <button className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base" onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-purple-600 cursor-pointer">Sign In</span>
            </button>
         </div>
      </>
   );
};

export default SignUp;
