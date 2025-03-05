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
      <>
         <div className="flex flex-col lg:flex-row items-stretch justify-between w-full px-6 pl-10 mb-12">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 ml-6 text-left flex flex-col mt-24">
               <h1 className="text-3xl md:text-5xl w-96 font-bold mb-4 text-[#8a552d]">Learn from Syed Ali Haider</h1>
               <p className="text-lg md:text-xl">
                  As your relationship counsellor, I’m here to guide you through challenges like infidelity and marital
                  struggles. Together, we’ll work on healing, rebuilding trust, and creating a stronger foundation.
                  Let’s take the steps toward a healthier, happier relationship.
               </p>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 h-full flex justify-end items-center  ">
               <div className="w-96 h-96 md:w-[500px] md:h-[480px] flex justify-end items-stretch -mr-3 rounded-l-full overflow-hidden">
                  <img
                     src={heroImage}
                     alt="any"
                     className="w-full h-full object-cover"
                     style={{ objectPosition: 'right' }}
                  />
               </div>
            </div>
         </div>

         <h1 className="text-3xl md:text-4xl font-bold mb-4 ml-15 text-[#8a552d]">Explore all courses</h1>

         <div className="flex flex-wrap gap-6 justify-center">
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

         <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mt-28 w-1/2 text-[#d2874d]">
            Helping hundreds of thousands of people create empowered relationships
         </h1>

         <div className="mt-28">
            <SlidingBarContainer />
         </div>
      </>
   );
}

export default MainPG;
