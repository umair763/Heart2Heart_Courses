import { useState } from 'react';
import CourseCard from '../../components/common/CourseCard';
import SlidingBar from '../../components/SlidingBar';
import SlidingBarContainer from '../../components/SlidingBarContainer';

function MainPG() {
   return (
      <>
         <div className="flex items-center justify-between p-4 h-screen relative">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center -mt-44">
               <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00203FFF]">Learn from Sayed Ali Haider</h1>
               <p className="text-lg md:text-xl">
                  Sayed Ali Haider has helped millions improve their lives and relationships. Now, she’s offering a new
                  way for you to gain access to her thoughtful and unique perspective. Her self-paced courses will spark
                  new insights and help you improve your relational intelligence
               </p>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 h-full flex justify-end items-center absolute -right-5 -mt-44">
               <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
                  <img
                     src=".\src\assets\images\Ali Haider standing2.jpg"
                     alt="Ali Haider"
                     className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
         <h1 className="text-3xl md:text-4xl font-bold mb-4 -mt-32 text-[#00203FFF]">Explore all courses</h1>
         <div className="">
            <CourseCard
               imageUrl=".\src\assets\images\chamcham2person.avif"
               title="Bringing Desires Back"
               buttonLink="https:github.com"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of
               hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION AND UNDERSTANDING"
               li3="BASED ON THE SAME PROCESSES ESTHER HAS USED TO HELP REAL COUPLES
                  FOR 40+ YEARS"
            />
            <CourseCard
               imageUrl=".\src\assets\images\chamcham2person.avif"
               title="Bringing Desires Back"
               buttonLink="https:github.com"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of
               hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION AND UNDERSTANDING"
               li3="BASED ON THE SAME PROCESSES ESTHER HAS USED TO HELP REAL COUPLES
                  FOR 40+ YEARS"
            />
            <CourseCard
               imageUrl=".\src\assets\images\chamcham2person.avif"
               title="Bringing Desires Back"
               buttonLink="https:github.com"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of
               hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION AND UNDERSTANDING"
               li3="BASED ON THE SAME PROCESSES ESTHER HAS USED TO HELP REAL COUPLES
                  FOR 40+ YEARS"
            />
            <CourseCard
               imageUrl=".\src\assets\images\chamcham2person.avif"
               title="Bringing Desires Back"
               buttonLink="https:github.com"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of
               hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION AND UNDERSTANDING"
               li3="BASED ON THE SAME PROCESSES ESTHER HAS USED TO HELP REAL COUPLES
                  FOR 40+ YEARS"
            />
            <CourseCard
               imageUrl=".\src\assets\images\chamcham2person.avif"
               title="Bringing Desires Back"
               buttonLink="https:github.com"
               p="Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of
               hope and possibility."
               li1="PERFECT FOR DATE NIGHT"
               li2="GUIDED EXERCISES TO TURN INSIGHTS INTO ACTION AND UNDERSTANDING"
               li3="BASED ON THE SAME PROCESSES ESTHER HAS USED TO HELP REAL COUPLES
                  FOR 40+ YEARS"
            />
         </div>
         <h1 className="text-3xl md:text-4xl font-bold mb-4 w-1/2 text-center mx-auto mt-28 text-[#00203FFF]">
            Helping hundreds of thousands of people create empowered relationships
         </h1>

         <div className="mt-28">
            <SlidingBarContainer />
         </div>
      </>
   );
}

export default MainPG;
