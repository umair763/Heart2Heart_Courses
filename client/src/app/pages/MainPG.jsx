import CourseCard from '../../components/common/CourseCard';
import SlidingBarContainer from '../../components/SlidingBarContainer';
import heroImage from '../../assets/images/Ali Haider standing2.jpg';
import courseImage from '../../assets/images/chamcham2person.avif';

function MainPG() {
   return (
      <div className="w-full">
      <div className="max-w-[1200px] mx-auto">
         <div className="flex items-center justify-between p-4 min-h-screen relative flex-wrap ">
            {/* Left Column - Text */}
            <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-0">
               {/* Left Column - Text Content */}
               <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-8 md:mb-0 md:pr-8">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#00203FFF] leading-tight">
                     Learn from Sayed Ali Haider
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                     Sayed Ali Haider has helped millions improve their lives and relationships. Now, she's offering a
                     new way for you to gain access to her thoughtful and unique perspective. Her self-paced courses
                     will spark new insights and help you improve your relational intelligence.
                  </p>

                  {/* Optional Call to Action Button */}
                  <div className="mt-6">
                     <a
                        href="/courses"
                        className="  hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                     >
                        Explore Courses
                     </a>
                  </div>
               </div>

               {/* Right Column - Image */}
               <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                  <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-lg">
                     <img src={heroImage} alt="Ali Haider" className="w-full h-full object-cover object-center" />
                  </div>
               </div>
            </div>
         </div>

         <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#00203FFF]">Explore all courses</h1>

         <div className="flex flex-wrap gap-6 justify-center">
            {[...Array(5)].map((_, index) => (
               <CourseCard
                  key={index}
                  imageUrl={courseImage}
                  title="Bringing Desires Back"
                  buttonLink="https://github.com"
                  p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck."
                  li1="PERFECT FOR DATE NIGHT"
                  li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION"
                  li3="BASED ON 40+ YEARS OF EXPERIENCE"
               />
            ))}
         </div>

         <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mt-28 text-[#00203FFF]">
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
