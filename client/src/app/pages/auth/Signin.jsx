import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import logo from "/src/assets/images/H2Hlogobrown.png";
import bg from "/src/assets/images/background.png";
import { auth } from "../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [resetMessage, setResetMessage] = useState('');
   const navigate = useNavigate();
   const { setIsAuthenticated, setUser } = useContext(AuthContext);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;
         setUser({ email: user.email, uid: user.uid });
         setIsAuthenticated(true);
         navigate('/dashboard');
      } catch (error) {
         setError('Invalid email or password. Please try again.');
      }
      setLoading(false);
   };

   const handleForgotPassword = async () => {
      if (!email) {
         setError('Please enter your email first.');
         return;
      }

      try {
         await sendPasswordResetEmail(auth, email);
         setResetMessage('Password reset email sent! Check your inbox.');
         setError('');
      } catch (error) {
         setError('Error sending reset email. Please check your email.');
      }
   };

   return (
      <div
         className="relative flex justify-center items-center min-h-screen bg-cover bg-center transition-opacity duration-500 ease-in"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '40%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
         }}
      >
         <div className="bg-[#ffffffd6] p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center transition-transform duration-300 hover:scale-105">
            
            {/* H2H Logo with subtle animation */}
            <img 
               src={logo} 
               alt="H2H Logo" 
               className="w-32 mb-4 transition-transform duration-300 hover:scale-110"
            />
            
            <h2 className="text-3xl font-bold text-[#92553D] text-center">Sign in</h2>
            <p className="text-gray-500 mt-2 text-center">Welcome to Heart2Heart Dashboard</p>

            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
            {resetMessage && <p className="text-green-500 mt-2 text-center">{resetMessage}</p>}

            <form className="w-full mt-6 space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
               <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D] text-sm md:text-base transition-all duration-300 focus:shadow-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-[#92553D] text-sm md:text-base transition-all duration-300 focus:shadow-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />

               {/* Forgot Password Button */}
               <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[#92553D] hover:underline hover:text-[#6b4226] transition-colors duration-300 text-sm self-start"
               >
                  Forgot Password?
               </button>

               <button
                  type="submit"
                  className={`w-full bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-all duration-300 ${
                     loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#6b4226] hover:shadow-lg"
                  }`}
                  disabled={loading}
               >
                  {loading ? "Signing In..." : "SIGN IN"}
               </button>
            </form>

            <p className="mt-4 text-gray-600 text-center">
               New to Heart2Heart? &nbsp;
               <span className="text-[#92553D] cursor-pointer hover:underline hover:text-[#6b4226] transition-colors duration-300" onClick={() => navigate('/signup')}>
                  Sign up
               </span>
            </p>
         </div>
      </div>
   );
}

export default Signin;
