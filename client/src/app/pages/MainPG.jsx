import CourseCard from '../../components/common/CourseCard';
import SlidingBarContainer from '../../components/SlidingBarContainer';
import heroImage from '../../assets/images/Ali Haider standing2.jpg';
import courseImage from '../../assets/images/chamcham2person.avif';

function MainPG() {
   const courses = [
      {
         id: 'course-id-1',
         title: 'Reigniting Desire',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/bringing-desires-back',
         p: 'Discover the barriers to desire and learn how to rediscover pleasure and break free from stagnation.',
         li1: 'IDEAL FOR A ROMANTIC EVENING',
         li2: 'EXERCISES TO TURN INSIGHTS INTO PRACTICAL ACTION',
         li3: 'BASED ON OVER 40 YEARS OF EXPERTISE',
      },
      {
         id: 'course-id-2',
         title: 'Transforming Disagreements into Harmony',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/turning-conflict-into-connection',
         p: 'Understand the reasons behind recurring arguments and learn how to escape unproductive patterns and reactions.',
         li1: 'Gain valuable insights in just an hour.',
         li2: 'Workbook available for download with guided exercises.',
         li3: 'Improve conflict resolution, with or without a partner.',
      },
      {
         id: 'course-id-3',
         title: 'Exploring and Reawakening Desire',
         imageUrl: courseImage,
         buttonLink: 'https://www.estherperel.com/courses/playing-with-desires',
         p: 'Discover the obstacles blocking desire and learn how to reconnect with pleasure and find a renewed sense of hope and possibility.',
         li1: 'IDEAL FOR A ROMANTIC EVENING',
         li2: 'Guided exercises to transform insights into actionable steps.',
         li3: 'Built on the same techniques Esther has used to help real couples for over 40 years.',
      },
   ];

   return (
      <div className="w-full">
         <div className="max-w-[1200px] mx-auto">
            {/* Hero Section */}
            <div className="flex items-center justify-between relative flex-wrap">
               {/* Left Column - Text */}
               <div className="w-full min--screen flex flex-col sm:flex-row lg:flex-row md:flex-row items-center justify-center">
                  {/* Left Column - Text Content */}
                  <div className="w-full md:w-1/2 text-left flex flex-col justify-center mb-8 md:mb-0 md:pr-8 p-3 sm:p-5 md:p-6">
                     <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-bold mb-4 text-[#120A16] leading-tight">
                        Learn from Syed Ali Haider
                     </h1>
                     <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Sayed Ali Haider has empowered countless individuals to enhance their lives and relationships.
                        Now, she presents an exciting opportunity for you to explore her insightful and distinct
                        perspective. Through his self-paced courses, you'll gain valuable insights and elevate your
                        relational intelligence.
                     </p>
                  </div>

                  {/* Right Column - Image */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center lg:-mr-13">
                     <div className="w-full h-auto md:w-96 md:h-96 lg:w-[500px] lg:h-[450px] rounded-l-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src={heroImage} alt="Ali Haider" className="w-full h-full object-cover object-center" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Courses Section */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-6 ml-15 font-serif text-[#120A16]">
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

            {/* Testimonial Section */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mt-28 w-1/2 text-[#120A16]">
               Supporting hundreds of thousands in building strong and empowered relationships.
            </h1>

            <div className="my-28">
               <SlidingBarContainer />
            </div>
         </div>
      </div>
   );
}

export default MainPG;
