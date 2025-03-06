import CourseCard from '../../components/common/CourseCard';
import SlidingBarContainer from '../../components/SlidingBarContainer';
import heroImage from '../../assets/images/Ali Haider standing2.jpg';
import courseImage from '../../assets/images/chamcham2person.avif';

function MainPG() {
   
   const courses = [
      {
         id: 'course-1',
         title: 'Bringing Desires Back',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/bringing-desires-back',
         p: 'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck.',
         li1: 'PERFECT FOR DATE NIGHT',
         li2: 'GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION',
         li3: 'BASED ON 40+ YEARS OF EXPERIENCE',
      },
      {
         id: 'course-2',
         title: 'Turning Conflicts Into Connection',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/turning-conflict-into-connection',
         p: 'Uncover why you keep having the same fights over and over again. Learn how to break free from habitual patterns and responses.',
         li1: 'Gain new insights in just one hour.',
         li2: 'Downloadable workbook filled with guided exercises.',
         li3: 'Improve conflicts with or without a partner.',
      },
      {
         id: 'course-3',
         title: 'Playing with Desires',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/playing-with-desires',
         p: 'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of hope and possibility.',
         li1: 'PERFECT FOR DATE NIGHT',
         li2: 'Guided exercises to turn insights into action and understanding',
         li3: 'Based on the same processes Esther has used to help real couples for 40+ years',
      },
   ];

   return (
      <div className="w-full">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between  relative flex-wrap ">
               {/* Left Column - Text */}
               <div className="w-full min--screen flex flex-col sm:flex-row lg:flex-row md:flex-row items-center justify-center">
                  {/* Left Column - Text Content */}
                  <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-8 md:mb-0 md:pr-8 p-3 sm:p-5 md:p-6">
                     <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-bold mb-4 text-[#8a552d] leading-tight">
                        Learn from Syed Ali Haider
                     </h1>
                     <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Sayed Ali Haider has helped millions improve their lives and relationships. Now, she's offering
                        a new way for you to gain access to her thoughtful and unique perspective. Her self-paced
                        courses will spark new insights and help you improve your relational intelligence.
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

            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-6 ml-15 font-serif text-[#8a552d]">
               Explore all courses
            </h1>

            <div className="flex flex-wrap gap-6 justify-center p-6">
               {courses.map((course) => (
                  <CourseCard
                     key={course.id}
                     courseId={course.id}
                     imageUrl={course.imageUrl}
                     title={course.title}
                     buttonLink={course.buttonLink}
                     p={course.p}
                     li1={course.li1}
                     li2={course.li2}
                     li3={course.li3}
                  />
               ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mt-28 w-1/2 text-[#8a552d]">
               Helping hundreds of thousands of people create empowered relationships
            </h1>

            <div className="my-28">
               <SlidingBarContainer />
            </div>
         </div>
      </div>
   );
}

export default MainPG;
