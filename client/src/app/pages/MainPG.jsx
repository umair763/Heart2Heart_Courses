import CourseCard from '../../components/common/CourseCard';
import SlidingBarContainer from '../../components/SlidingBarContainer';
import heroImage from '../../assets/images/Ali Haider standing2.jpg';
import courseImage from '../../assets/images/chamcham2person.avif';

function MainPG() {
   return (
      <>
         <div className="flex items-center justify-between p-4 min-h-screen relative">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
               <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00203FFF]">Learn from Sayed Ali Haider</h1>
               <p className="text-lg md:text-xl">
                  Sayed Ali Haider has helped millions improve their lives and relationships. Now, she’s offering a new
                  way for you to gain access to her thoughtful and unique perspective. Her self-paced courses will spark
                  new insights and help you improve your relational intelligence.
               </p>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 h-full flex justify-end items-center">
               <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
                  <img src={heroImage} alt="Ali Haider" className="w-full h-full object-cover" />
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

         <div className="mt-28">
            <SlidingBarContainer />
         </div>
      </>
   );
}

export default MainPG;
