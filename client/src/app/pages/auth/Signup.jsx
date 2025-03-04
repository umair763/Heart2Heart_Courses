import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/H2Hlogobrown.png';
import { auth } from '../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import signupImage from '/src/assets/images/ALIHAIDERTHINK.jpeg'; // Adjust the path accordingly

const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [step, setStep] = useState(1);
   const [participation, setParticipation] = useState('');
   const [paymentMethod, setPaymentMethod] = useState('');

   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleNext = () => {
      if (step === 1) {
         if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
         }
         if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
         }
      } else if (step === 2 && !participation) {
         setError('Please select your participation mode.');
         return;
      }

      setError('');
      setStep(step + 1);
   };

   const handleSignUp = async (e) => {
      e.preventDefault();
      setError('');
      if (!paymentMethod) {
         setError('Please select a payment method.');
         return;
      }

      setLoading(true);
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         await updateProfile(userCredential.user, { displayName: username });
         console.log('User Created:', userCredential.user);
         navigate('/signin');
      } catch (error) {
         setError(error.message);
      }
      setLoading(false);
   };

   return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 space-y-6 md:space-y-0">
         {/* Interactive Image Section */}
         <div className="hidden md:flex w-1/2 justify-center">
            <img
               src={signupImage}
               alt="Sign Up"
               className="w-full max-w-md transition-transform duration-300 hover:scale-105 cursor-pointer"
               onClick={() => alert('Welcome to Heart2Heart!')}
            />
         </div>

         {/* Sign Up Box - Centered */}
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
            <img src={logo} alt="H2H Logo" className="w-32 mb-4" />
            <h2 className="text-3xl font-bold text-[#92553D] text-center">Create Account</h2>
            <p className="text-gray-500 mt-2 text-center">Sign up at Heart2Heart Dashboard</p>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            {step === 1 && (
               <form className="w-full mt-4 space-y-3 flex flex-col items-center">
                  <input
                     type="text"
                     placeholder="Full Name"
                     className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
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
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                     type="button"
                     className="w-full bg-blue-600 hover:bg-[#6b4226] text-white font-semibold py-3 rounded-full"
                     onClick={handleNext}
                  >
                     Next
                  </button>
               </form>
            )}

            {step === 2 && (
               <form className="w-full mt-4 space-y-3 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-[#92553D] text-center">
                     Will you be taking this course solo or with a partner?
                  </h3>
                  <select
                     className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                     value={participation}
                     onChange={(e) => setParticipation(e.target.value)}
                  >
                     <option value="" disabled>Select an option</option>
                     <option value="solo">Solo</option>
                     <option value="partnered">Partnered</option>
                  </select>
                  <button
                     type="button"
                     className="w-full bg-blue-600 hover:bg-[#6b4226] text-white font-semibold py-3 rounded-full"
                     onClick={handleNext}
                  >
                     Next
                  </button>
               </form>
            )}

            {step === 3 && (
               <form className="w-full mt-4 space-y-3 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-[#92553D] text-center">
                     Select Payment Method (Coming Soon)
                  </h3>
                  <select
                     className="w-full p-3 border rounded-lg focus:outline-[#92553D]"
                     value={paymentMethod}
                     onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                     <option value="" disabled>Select a payment method</option>
                     <option value="credit_card">Credit Card</option>
                     <option value="paypal">PayPal</option>
                     <option value="bank_transfer">Bank Transfer</option>
                  </select>
                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full bg-blue-600 hover:bg-[#6b4226] text-white font-semibold py-3 rounded-full"
                     onClick={handleSignUp}
                  >
                     {loading ? "Signing Up..." : "SIGN UP"}
                  </button>
               </form>
            )}

            <button className="mt-4 text-gray-600" onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-[#92553D] cursor-pointer">Sign In</span>
            </button>
         </div>

         {/* Money-Back Box - Aligned Correctly */}
         <div className="mt-6 w-full max-w-md text-center bg-[#fef2e6] p-6 rounded-lg shadow-md border-l-4 border-[#92553D]">
            <h3 className="text-xl font-semibold text-[#92553D] leading-tight">
               If this doesn't improve your relationship, get your money back.
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
               This course was created with usefulness in mind. If you watch the videos, do the exercises, and find that you haven’t gained any useful insights that improve your relationship, we offer a 30-day money-back guarantee.
            </p>
         </div>
      </div>
   );
};

export default SignUp;
