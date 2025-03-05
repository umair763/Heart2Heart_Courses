import { useParams } from 'react-router-dom';
import courseImage from '../../assets/images/conficts.avif';

function CoursePage() {
   const { courseId } = useParams();

   // Course Data (Static)
   const courses = [
      {
         id: 'course-1',
         title: 'Bringing Desires Back',
         description: 'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck.',
         imageUrl: courseImage,
         price: 90,
      },
      {
         id: 'course-2',
         title: 'Turning Conflict Into Connection',
         description:
            'Uncover why you keep having the same fights over and over again. Learn how to break free from habitual patterns and responses. Find peace and reconciliation even when you disagree.',
         imageUrl: courseImage,
         price: 80,
      },
      {
         id: 'course-3',
         title: 'Turning Conflicts Into Connection',
         description:
            'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of hope and possibility.',
         imageUrl: courseImage,
         price: 100,
      },
   ];

   const course = courses.find((c) => c.id === courseId);
   if (!course) return <p className="text-center text-red-500">Course not found.</p>;

   return (
      <div className="flex flex-col lg:flex-row items-stretch justify-between bg-[#d2874d] w-full px-6 pl-10  mb-12">
         {/* Left Section - Text */}
         <div className="lg:w-1/2 flex flex-col justify-center items-start text-left max-w-xl">
            <h2 className="text-xl xs:text-md md:text-3xl lg:text-4xl font-bold text-[#2E1A47] leading-tight">
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
               <button className="bg-[#8a552d] lg:w-full text-white font-bold py-3 px-6 rounded-full hover:cursor-pointer hover:bg-[#866043] w-full ">
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
   );
}

export default CoursePage;
