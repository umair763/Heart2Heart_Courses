import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../../assets/images/H2H logo bbrown heart only.png';

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
         navigate('/signin'); // Redirect to signin after signup
      }
   };

   return (
      <div
         className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain', // Ensures the image is properly scaled
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents repeating of the image
         }}
      >
         <div className="bg-[#ffffffd6] p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#92553D] text-center">Create Account</h2>
            <p className="text-gray-500 mt-2 text-center">Sign up at Heart2Heart Dashboard</p>

            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex justify-center items-center border-4 border-[#92553D] rounded-full overflow-hidden mt-4">
               {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                  <span className="w-6 lg:w-13 md:w-8 sm:w-7">
                     <img src="./src/assets/images/person-icon-1682.png" />
                  </span>
               )}
               <label className="absolute w-9 bottom-1 right-2 bg-[#92553D] text-white  md:p-1 rounded-full cursor-pointer shadow-lg z-50 text-sm md:text-base">
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
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D] text-sm md:text-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D] text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D] text-sm md:text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="submit"
                  className="w-1/2 bg-[#92553D] cursor-pointer hover:bg-[#785040] text-white font-bold py-3 rounded-full text-sm md:text-base"
               >
                  SIGN UP
               </button>
            </form>

            <button className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base" onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-[#92553D] cursor-pointer">Sign In</span>
            </button>
         </div>
      </div>
   );
};

export default SignUp;
