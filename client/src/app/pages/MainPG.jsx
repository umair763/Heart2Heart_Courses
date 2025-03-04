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
               <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00203FFF]">Learn from Syed Ali Haider</h1>
               <p className="text-lg md:text-xl">
               As your relationship counsellor, I’m here to guide you through challenges like infidelity and marital struggles. Together, we’ll work on healing, rebuilding trust, and creating a stronger foundation. Let’s take the steps toward a healthier, happier relationship.
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
            <CourseCard
               imageUrl={courseImage}
               title="Bringing Desires Back"
               buttonLink="https://www.estherperel.com/courses/turning-conflict-into-connection"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION"
               li3="BASED ON 40+ YEARS OF EXPERIENCE"
            />
            <CourseCard
               imageUrl={courseImage}
               title="Turning Conflicts Into Connection"
               buttonLink="https://www.estherperel.com/courses/turning-conflict-into-connection"
               p="Uncover why you keep having the same fights over and over again. Learn how to break free from habitual patterns and responses. 
               Find peace and reconciliation even when you disagree."
               li1="Gain new insights in just one hour."
               li2="Downloadable workbook filled with guided exercises."
               li3="Improve conflicts with or without a partner."
            />
            <CourseCard
               imageUrl={courseImage}
               title="Playing with Desires"
               buttonLink="https://www.estherperel.com/courses/turning-conflict-into-connection"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="Guided exercises to turn insights into action and understanding"
               li3="Based on the same processes Esther has used to help real couples for 40+ years"
            />
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
