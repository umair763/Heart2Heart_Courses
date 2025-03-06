import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function CourseReview() {
   const { courseId } = useParams();
   const [course, setCourse] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchCourse = async () => {
         try {
            const courseRef = doc(db, 'courses', courseId);
            const courseSnap = await getDoc(courseRef);

            if (courseSnap.exists()) {
               setCourse(courseSnap.data());
            } else {
               console.error('No such course found');
            }
         } catch (error) {
            console.error('Error fetching course:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchCourse();
   }, [courseId]);

   if (loading) return <p>Loading...</p>;
   if (!course) return <p>Course not found.</p>;

   return (
      <div className="p-6 bg-[#c59c7cb0] rounded shadow">
         <h1 className="text-3xl font-bold text-[#8a552d]">{course.title}</h1>
         <p>{course.description}</p>

         <h3 className="text-lg font-semibold">Course Content</h3>
         {course.content?.length > 0 ? (
            <ul>
               {course.content.map((module, index) => (
                  <li key={index} className="mt-4">
                     {index % 2 === 0 ? (
                        <strong>{module}</strong> // Display Module Name
                     ) : (
                        <video controls className="w-full">
                           <source src={module} type="video/mp4" />
                        </video>
                     )}
                  </li>
               ))}
            </ul>
         ) : (
            <p>No content available.</p>
         )}
      </div>
   );
}

export default CourseReview;
