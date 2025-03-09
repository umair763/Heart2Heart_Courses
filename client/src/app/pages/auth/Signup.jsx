import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/H2Hlogobrown.png';
import { auth, db, doc, setDoc, collection, getDocs, query, orderBy, limit } from '../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import signupImage from '/src/assets/images/ALIHAIDERTHINK.jpeg';
import moneyBackBg from '/src/assets/images/background.png';

const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [step, setStep] = useState(1);
   const [participation, setParticipation] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [paypalButtonsRendered, setPaypalButtonsRendered] = useState(false);
   const [transactionComplete, setTransactionComplete] = useState(false);
   const [paymentDetails, setPaymentDetails] = useState(null);

   const navigate = useNavigate();

   // Get the redirect path and course ID from session storage if available
   const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/dashboard';
   const pendingEnrollmentCourseId = sessionStorage.getItem('pendingEnrollmentCourseId');

   // PayPal configuration - using the credentials you provided
   const PAYPAL_CLIENT_ID = 'Aa92oByRfkBI45XscQwo5ZdOkNdmI72m7bMz4T1h03i6OEfz__umyQf1G-Zgg2jaSDWcP2l3quKQx-Zy';
   
   useEffect(() => {
     // Load PayPal SDK when reaching payment step
     if (step === 3 && !paypalButtonsRendered) {
       const script = document.createElement('script');
       script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
       script.async = true;
       script.onload = () => initializePayPalButtons();
       document.body.appendChild(script);
       
       return () => {
         if (document.body.contains(script)) {
           document.body.removeChild(script);
         }
       };
     }
   }, [step, paypalButtonsRendered]);

   const initializePayPalButtons = () => {
     if (window.paypal && !paypalButtonsRendered) {
       try {
         window.paypal.Buttons({
           style: {
             layout: 'vertical',
             color: 'blue',
             shape: 'rect',
             label: 'pay'
           },
           createOrder: (data, actions) => {
             // Set up the transaction details
             return actions.order.create({
               purchase_units: [{
                 amount: {
                   value: '97.00' // Set your course price here
                 },
                 description: 'Heart2Heart Relationship Course',
                 payee: {
                   email_address: 'msybashir@gmail.com' // Merchant email address
                 }
               }]
             });
           },
           onApprove: (data, actions) => {
             return actions.order.capture().then(function(details) {
               console.log('Transaction completed by ' + details.payer.name.given_name);
               setPaymentDetails(details);
               setTransactionComplete(true);
               
               // Automatically proceed with account creation after successful payment
               setTimeout(() => {
                 handleSignUp(new Event('submit'));
               }, 1000);
             });
           },
           onError: (err) => {
             setError('Payment failed. Please try again.');
             console.error('PayPal Error:', err);
           }
         }).render('#paypal-button-container');
         
         setPaypalButtonsRendered(true);
       } catch (error) {
         console.error("Error rendering PayPal buttons:", error);
         setError("Failed to initialize payment system. Please refresh the page and try again.");
       }
     }
   };

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
      if (e) e.preventDefault();
      setError('');
      
      if (!transactionComplete) {
         setError('Please complete the payment process before continuing.');
         return;
      }

      setLoading(true);
      try {
         // Create the user using Firebase Authentication
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;

         // Set user's display name (username)
         await updateProfile(user, { displayName: username });

         // Generate the next user-id based on the last document in the collection
         const usersRef = collection(db, 'users');
         const usersQuery = query(usersRef, orderBy('ManualUserID', 'desc'), limit(1));
         const userSnapshot = await getDocs(usersQuery);
         let nextUserId = 'user-id-1'; // Default value for the first user

         if (!userSnapshot.empty) {
            const lastUserDoc = userSnapshot.docs[0];
            const lastUserId = lastUserDoc.data().ManualUserID;
            const lastUserNumber = parseInt(lastUserId.split('-')[2]);
            nextUserId = `user-id-${lastUserNumber + 1}`; // Increment to generate the next ID
         }

         // Prepare initial courses array (based on pending course enrollment)
         const initialCourses = [];
         if (pendingEnrollmentCourseId) {
            initialCourses.push(pendingEnrollmentCourseId);
         }

         // Create a new user document in Firestore with the unique generated ID
         const userRef = doc(db, 'users', nextUserId); // Explicitly set the nextUserId as the document ID
         await setDoc(userRef, {
            userID: user.uid,
            ManualUserID: nextUserId,
            userEmail: email,
            username: username,
            coursesEnrolled: initialCourses,
            participationMode: participation,
            paymentMethod: 'paypal',
            paymentDetails: paymentDetails ? {
              transactionId: paymentDetails.id,
              payerEmail: paymentDetails.payer.email_address,
              amount: paymentDetails.purchase_units[0].amount.value,
              currency: paymentDetails.purchase_units[0].amount.currency_code,
              status: paymentDetails.status,
              createTime: paymentDetails.create_time
            } : null,
            createdAt: new Date(),
         });

         console.log('User Created:', user);

         // Clear the session storage for pending enrollment
         sessionStorage.removeItem('pendingEnrollmentCourseId');
         sessionStorage.removeItem('redirectAfterLogin');

         // Redirect to either dashboard or the path stored in session
         navigate(pendingEnrollmentCourseId ? redirectPath : '/dashboard');
      } catch (error) {
         setError(error.message); // Display Firebase error message
         console.error('Error creating user:', error);
      } finally {
         setLoading(false);
      }
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

         {/* Sign Up Box */}
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
            <img src={logo} alt="H2H Logo" className="w-32 mb-4" />
            <h2 className="text-3xl font-bold text-[#92553D] text-center">Create Account</h2>
            <p className="text-gray-500 mt-2 text-center">Sign up at Heart2Heart</p>

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
                     <option value="" disabled>
                        Select an option
                     </option>
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
               <div className="w-full mt-4 space-y-3 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-[#92553D] text-center">
                     Complete Payment to Create Your Account
                  </h3>
                  
                  <div className="w-full mt-4 mb-4">
                    <div className="text-center mb-6 p-4 bg-[#fef2e6] rounded-lg border border-[#92553D]">
                      <p className="font-medium text-lg text-[#92553D]">Heart2Heart Relationship Course</p>
                      <p className="text-3xl font-bold text-[#92553D] my-2">$97.00</p>
                      <p className="text-sm text-gray-600">One-time payment with 30-day money-back guarantee</p>
                    </div>
                    
                    {transactionComplete ? (
                      <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-center mb-4">
                        <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="text-green-700 font-medium">Payment successfully completed!</p>
                        <p className="text-sm text-green-600">Transaction ID: {paymentDetails?.id}</p>
                        <p className="text-sm text-gray-600 mt-2">Creating your account...</p>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <p className="text-center text-gray-600 mb-3">Complete your payment with PayPal:</p>
                        <div id="paypal-button-container" className="w-full"></div>
                      </div>
                    )}
                    
                    <div className="mt-6 text-center text-sm text-gray-500">
                      <p>By completing payment, you agree to our <span className="text-blue-600 cursor-pointer">Terms of Service</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.</p>
                    </div>
                  </div>
               </div>
            )}

            <button className="mt-4 text-gray-600" onClick={() => navigate('/signin')}>
               Already have an account? <span className="hover:underline text-[#92553D] cursor-pointer">Sign In</span>
            </button>
         </div>

         {/* Money-Back Box */}
         <div className="relative w-full max-w-md mt-6 p-6 rounded-lg shadow-md border-l-4 border-[#92553D] bg-[#fef2e6] transition-transform duration-300 hover:scale-105">
            <img
               src={moneyBackBg}
               alt="Money Back Guarantee"
               className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20"
            />
            <h3 className="text-xl font-semibold text-[#92553D] leading-tight text-center mt-10">
               If this doesn't improve your relationship, get your money back.
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed text-center">
               This course was created with usefulness in mind. If you watch the videos, do the exercises, and find that
               you haven't gained any useful insights that improve your relationship, we offer a 30-day money-back
               guarantee.
            </p>
         </div>
      </div>
   );
};

export default SignUp;