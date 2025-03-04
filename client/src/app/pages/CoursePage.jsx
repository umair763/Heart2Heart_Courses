import { useParams } from 'react-router-dom';
import courseImage from '../../assets/images/chamcham2person.avif';

function CoursePage() {
   const { courseId } = useParams();

   // You can fetch the course data from an API or use static data
   const courses = [
      {
         id: 'course-1',
         title: 'Bringing Desires Back',
         description: 'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck.',
         imageUrl: courseImage,
      },
      {
         id: 'course-2',
         title: 'Turning Conflicts Into Connection',
         description:
            'Uncover why you keep having the same fights over and over again. Learn how to break free from habitual patterns and responses.',
         imageUrl: courseImage,
      },
      {
         id: 'course-3',
         title: 'Turning Conflicts Into Connection',
         description:
            'Uncover what blocks desire. Learn how to tap back into pleasure and get unstuck. Discover a new sense of hope and possibility.',
         imageUrl: courseImage,
      },
      // Add more courses here
   ];

   const course = courses.find((c) => c.id === courseId);

   if (!course) return <p>Course not found.</p>;

   return (
      <div className="p-6">
         <h2 className="text-4xl font-bold">{course.title}</h2>
         <img src={course.imageUrl} alt={course.title} className="w-64 h-64 object-cover mt-4" />
         <p className="mt-4">{course.description}</p>
         <p>34 $</p>
         <button className="mt-6 inline-block bg-[#10004F] text-white hover:cursor-pointer py-2 px-4 rounded-full text-sm">
            Enroll Now
         </button>
      </div>
   );
}

export default CoursePage;
