import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import courseImage from '../../assets/images/conficts.avif';
import card1 from '../../assets/images/card1.avif';
import card2 from '../../assets/images/ca.png';
import card3 from '../../assets/images/card3.avif';
import cardimg1 from '../../assets/images/cardimg1.avif';
import cardimg2 from '../../assets/images/cardimg2.avif';
import cardimg3 from '../../assets/images/cardimg3.avif';
import SlidingBarContainer from '../../components/SlidingBarContainer';
import heroImage from '../../assets/images/Ali Haider standing2.jpg';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; // Assuming this is correct
import AuthContext from '../context/AuthContext';

function CoursePage() {
   const { courseId } = useParams();
   const { user, isAuthenticated } = useContext(AuthContext);
   const navigate = useNavigate();

   // Course Data (Static)
   const courses = [
      {
         id: 'course-id-1',
         title: 'Bringing Desires Back',
         description: 'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck.',
         imageUrl: courseImage,
         price: 90,
      },
      {
         id: 'course-id-2',
         title: 'Turning Conflict Into Connection',
         description:
            'Uncover why you keep having the same fights over and over again. Learn how to break free from habitual patterns and responses. Find peace and reconciliation even when you disagree.',
         imageUrl: courseImage,
         price: 80,
      },
      {
         id: 'course-id-3',
         title: 'Playing with Desires',
         description:
            'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of hope and possibility.',
         imageUrl: courseImage,
         price: 100,
      },
   ];

   const course = courses.find((c) => c.id === courseId);
   if (!course) return <p className="text-center text-red-500">Course not found.</p>;

   const handleEnroll = async () => {
      if (!isAuthenticated || !user || !user.ManualUserID) {
         // Save course ID to enroll after login
         sessionStorage.setItem('pendingEnrollmentCourseId', course.id);
         sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
         navigate('/signin');
         return;
      }

      try {
         const userRef = doc(db, 'users', user.ManualUserID);

         // Use arrayUnion to add the course ID without duplicates
         await updateDoc(userRef, {
            coursesEnrolled: arrayUnion(course.id),
         });

         // Show success message or redirect
         navigate('/dashboard');
      } catch (err) {
         console.error('Error enrolling user:', err);
      }
   };

   return (
      <>
         <div className="w-full min--screen flex flex-col sm:flex-row lg:flex-row md:flex-row bg-[#b58d6eb0] items-center justify-center p-6 ">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 flex flex-col justify-center items-start text-left max-w-xl">
               <h2 className="text-xl xs:text-md md:text-3xl lg:text-5xl font-serif font-bold text-[#2E1A47] leading-tight">
                  {course.title}
               </h2>
               <p className="text-gray-900 mt-4 text-lg">{course.description}</p>

               {/* Features List */}
               <ul className="mt-6 space-y-2 text-gray-900">
                  <li className="flex items-center">
                     ⏳ <span className="ml-2 font-semibold">Gain new insights in just one hour.</span>
                  </li>
                  <li className="flex items-center">
                     📄 <span className="ml-2 font-semibold">Downloadable workbook with exercises.</span>
                  </li>
                  <li className="flex items-center">
                     🔄 <span className="ml-2 font-semibold">Improve conflicts with or without a partner.</span>
                  </li>
               </ul>

               {/* CTA Buttons */}
               <div className="mt-8 flex flex-col space-y-3 items-center w-full">
                  <button
                     className="bg-[#8a552d] lg:w-full text-white font-bold py-3 px-6 rounded-full hover:cursor-pointer hover:bg-[#866043] w-full "
                     onClick={handleEnroll}
                  >
                     Enroll Now for ${course.price}
                  </button>
                  <button className="border border-black lg:w-full text-black font-bold py-2 px-6 rounded-full hover:cursor-pointer hover:bg-gray-200 w-full mt-3 mb-3 ">
                     Watch Course Trailer
                  </button>
               </div>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 flex justify-end items-stretch -mr-5 rounded-l-full overflow-hidden">
               <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'right' }}
               />
            </div>
         </div>
         <div className="flex items-center justify-center mt-10 ml-2 md:ml-10">
            <div className="p-6">
               <h2 className="text-md  font-bold text-gray-600 mb-10">WHAT YOU GAIN</h2>
               <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 pr-4">
                     <h1 className="heading  text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E1A47] leading-tight mb-4">
                        Desire comes and goes. Learn how to reignite the spark no matter where you're starting from.
                     </h1>
                  </div>
                  <div className="md:w-1/2">
                     <p className="text-lg text-gray-700">
                        There is no “normal” when it comes to sexuality. This course will help you understand your
                        unique relationship with desire and develop a personal approach to fostering more of it.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <style>
            {`
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #f8f5f0;
            }
            .heading {
                font-family: 'Playfair Display', serif;
            }
        `}
         </style>

         <div className="flex justify-center items-center mt-10 mb-10 ">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-lg border-gray-600 border-1">
                     <img
                        alt="Illustration of a person with a tangled string"
                        className="mx-auto mb-4"
                        height="200"
                        src={card1}
                        width="200"
                     />
                     <h2 className="text-2xl font-bold mb-4 font-serif">Understand Your Erotic Blocks</h2>
                     <p className="text-gray-700 ">
                        Whether you’re stressed, struggling with deeply ingrained stories and stereotypes, or simply
                        unsure about what you enjoy, there’s a reason desire is so hard to access. Start uncovering why
                        you’re blocked.
                     </p>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-lg border-gray-600 border-1">
                     <img
                        alt="Illustration of two people stretching their arms"
                        className="mx-auto mb-4"
                        height="200"
                        src={card2}
                        width="200"
                     />
                     <h2 className="text-2xl font-bold mb-4 font-serif">Build Positive Sexual Candor</h2>
                     <p className="text-gray-700">
                        Change comes when our conversations about desire are more kind than critical. Discover the art
                        of sexual candor, plus scripts to help you practice asking for more of what you want.
                     </p>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-lg border-gray-600 border-1">
                     <img
                        alt="Illustration of a person holding a tray with a heart"
                        className="mx-auto mb-4"
                        height="200"
                        src={card3}
                        width="200"
                     />
                     <h2 className="text-2xl font-bold mb-4  font-serif">Create Space for Erotic Possibility</h2>
                     <p className="text-gray-700">
                        Pleasure doesn’t do well under pressure. Use your newfound knowledge to break out of mundane
                        routines and invite the vibrancy of erotic play back into your life.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* note:: person identity card */}
         <div>
            <div className="max-w-[1200px] mx-auto">
               <div className="flex items-center justify-between  relative flex-wrap ">
                  {/* Left Column - Text */}
                  <div className="w-full min--screen flex flex-col sm:flex-row lg:flex-row md:flex-row items-center justify-center">
                     {/* Left Column - Text Content */}
                     <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-8 md:mb-0 md:pr-8 p-3 sm:p-5 md:p-6">
                        <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-bold mb-4 text-[#8a552d] leading-tight">
                           Taught by Syed Ali Haider
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                           Syed Ali Haider has helped millions improve their lives and relationships. Now, she's
                           offering a new way for you to gain access to her thoughtful and unique perspective. Her
                           self-paced courses will spark new insights and help you improve your relational intelligence.
                        </p>

                        {/* Optional Call to Action Button */}
                        {/* <div className="mt-6">
                                    <a
                                       href="/courses"
                                       className="  hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                       Explore Courses
                                    </a>
                                 </div> */}
                     </div>

                     {/* Right Column - Image */}
                     <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center lg:-mr-13">
                        <div className="w-full h-auto md:w-96 md:h-96 lg:w-[500px] lg:h-[450px] rounded-l-full overflow-hidden shadow-lg ">
                           <img src={heroImage} alt="Ali Haider" className="w-full h-full object-cover object-center" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* note:: three cards  */}

         <div className="flex items-center justify-center mt-28 mb-28">
            <div className="text-center">
               <h1 className="text-4xl font-bold text-[#2b1e70]">In a format that works</h1>
               <p className="text-lg text-[#2b1e70] mt-2">Perfect for bringing desire back into date night.</p>
               <div className="flex flex-wrap justify-center mt-6 space-x-4">
                  <div className="flex items-center space-x-2">
                     <i className="fas fa-play text-[#2b1e70]"></i>
                     <span className="text-[#2b1e70] font-semibold">HIGH QUALITY VIDEOS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <i className="fas fa-comments text-[#2b1e70]"></i>
                     <span className="text-[#2b1e70] font-semibold">INTERACTIVE WORKBOOK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <i className="fas fa-book text-[#2b1e70]"></i>
                     <span className="text-[#2b1e70] font-semibold">PLAYFUL PROMPTS AND IDEAS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <i className="fas fa-comment-dots text-[#2b1e70]"></i>
                     <span className="text-[#2b1e70] font-semibold">CONVERSATION CATALYSTS</span>
                  </div>
               </div>
            </div>
         </div>

         {/* note:: three cards  */}
         <div className="text-[#1a1a1a] min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-12">
               <div className="text-center md:text-left mb-12">
                  <h2 className="text-sm font-semibold text-[#1a1a1a] mb-6">WHY IT WORKS</h2>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] leading-tight">
                     Syed Ali Haider helps you understand, embrace, and reignite your desire.
                  </h1>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#f5ebe4] p-8 rounded-lg">
                     <img
                        src={cardimg1}
                        alt="Illustration of a person reflecting on their sexual history"
                        className="mx-auto mb-6"
                     />
                     <h3 className="text-2xl font-semibold font-serif text-[#1a1a1a] mb-4">
                        Holds Space For Your Unique Sexual History
                     </h3>
                     <p className="text-[#1a1a1a]">
                        Discover lessons, invitations for self-reflection, and exercises that shed light on your unique
                        blocks and desires.
                     </p>
                  </div>
                  <div className="bg-[#f5ebe4] p-8 rounded-lg">
                     <img
                        src={cardimg2}
                        alt="Illustration of a person focusing on what they can control"
                        className="mx-auto mb-6"
                     />
                     <h3 className="text-2xl font-semibold text-[#1a1a1a] font-serif mb-4">
                        Focused On What You Can Control
                     </h3>
                     <p className="text-[#1a1a1a]">
                        Learn insights, skills, and customizable scripts you can use to engage in new erotic
                        experiences.
                     </p>
                  </div>
                  <div className="bg-[#f5ebe4] p-8 rounded-lg">
                     <img
                        src={cardimg3}
                        alt="Illustration of a person being met where they are"
                        className="mx-auto mb-6"
                     />
                     <h3 className="text-2xl font-semibold text-[#1a1a1a] font-serif mb-4">
                        Designed To Meet You Where You Are
                     </h3>
                     <p className="text-[#1a1a1a]">
                        No matter where you are in your journey with desire, you’ll find plenty of examples and ideas to
                        guide your next step toward a more vibrant erotic life.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mt-28 w-1/2 text-[#8a552d]">
            Helping hundreds of thousands of people create empowered relationships
         </h1>

         <div className="my-28 ml-6 mr-6">
            <SlidingBarContainer />
         </div>

         {/* note:: final card */}
         <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#0b0b5a] text-white rounded-lg p-8 md:p-16 max-w-4xl mx-auto text-center relative">
               <h2 className="text-sm uppercase tracking-widest mb-4">Syed Ali Haider's Guarantee</h2>
               <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  If this doesn't improve your relationship, get your money back.
               </h1>
               <p className="text-base md:text-lg">
                  This course was created with usefulness in mind. If you watch the videos, do the exercises, and find
                  that you haven’t gained useful insights that improve your relationship, we offer a 30-day money-back
                  guarantee.
               </p>
               <div className="absolute top-8 right-8 md:top-16 md:right-16">
                  <img
                     alt="Circular badge with text 'EP' in the center and '30 Day Guarantee' around the edge"
                     className="rounded-full"
                     height="100"
                     src="https://storage.googleapis.com/a1aa/image/67j97go1FTv4TIvpgwX5k9_HiFnXh_HWswJmAjlkYeg.jpg"
                     width="100"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default CoursePage;
