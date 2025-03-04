import { useEffect, useState } from 'react';
import SlidingBar from './SlidingBar'; // Assuming SlidingBar is in the same directory

const SlidingBarContainer = () => {
   return (
      <div className="overflow-hidden w-full">
         <style>{`
            /* CSS animation for smooth sliding from right to left */
            @keyframes slide {
               0% {
                  transform: translateX(0); /* Start from initial position */
               }
               100% {
                  transform: translateX(-100%); /* End offscreen to the left */
               }
            }

            .sliding-container {
               display: flex;
               animation: slide 30s linear infinite; /* Very slow sliding, 30 seconds for full loop */
               animation-play-state: running; /* Ensure animation is running by default */
            }

            .sliding-container:hover {
               animation-play-state: paused; /* Pause animation on hover */
            }

            .sliding-container > * {
               flex-shrink: 0; /* Prevent flex items from shrinking */
            }
         `}</style>
         <div className="sliding-container ">
            {/* First set of SlidingBar components */}
            <SlidingBar
               name="JOANIE"
               stars={5}
               review="Amazing course , easy and short ! We keep thing simple ! Love it !Thank you for this !."
            />
            <SlidingBar
               name="Amanda Willis"
               stars={5}
               review="I’ve listened to Ali Haider’s podcast and I trust what she has to say. Even in the first module I found painful realizations that will inevitably lead to better communication, conflict resolution, and relational repair in the future. I only hope more people will take interest and engage with the opportunity to grow."
            />
            <SlidingBar
               name="KK Harvey"
               stars={5}
               review="A recent break up that ended after an argument brought me into your course. I wanted to see why the same arguments were coming up and try to see what my role and responsibility were in these arguments. The course opened my eyes to my fighting style, insecurities and reasons that we were repeating the same argument. I was fighting rather than expressing what I was FEELING. I feel that I have a much better handle on how to diffuse or at least take a break before reacting and how to express what I am feeling rather than attacking. Thank you so much for an excellent course."
            />
            <SlidingBar
               name="M.McSweeney"
               stars={5}
               review="Becoming better at addressing conflict in positive ways at home and at work is an ongoing goal. Learning to use the 'space' between the trigger and the response as something each person can control was one of the concepts that caught my attention. Remembering we are free to change how we respond to conflict was a great reminder!"
            />
            <SlidingBar
               name="Ana"
               stars={5}
               review="I took the course after a possibly relationship ending fight where I realized my partner and I seemed to never speak the same language. I learned so much from this course including that fights are never really about what you're fighting for in the moment! We've been trapped in a hopeless cycle of fights because neither of us ever dared ask the other directly for what we wanted or needed from them. The result was years of accumulated frustration, resentment, contempt, loneliness, etc.
It may be too late to save my current/past relationship-- there only time will tell-- but the lessons from this course will serve me in EVERY relationship in my life now and moving forward. I can at least work on cleaning up my side of the street. Thank you, Ali Haider, for all that you do. Keep them coming :)"
            />

            {/* Duplicate the set of SlidingBar components for seamless loop */}
            <SlidingBar
               name="Brenda Hixon"
               stars={5}
               review="I feel as humans we are so often eager to prove we are right, we fail to see the other individuals point or even acknowledge their feelings. After this course I know that I always need to take accountability for my part be it right or wrong."
            />
            <SlidingBar
               name="Donna Griva"
               stars={5}
               review="The course appealed to me because conflict, for me, especially in my marriage, is often a way one street that leads to nowhere. Hearing the 'broken record' over and over, wondering why are we here again and why can we not resolve this is frustrating, lonely and at times hopeless. Ali Haider brings her deep understanding of relationships and human nature along with her passion and warmth to really dig down past the repeated patterns and open up a more holistic view of why we fight, why conflict plays out with the same responses over and over again and how we can break the cycle. I am glad that I took some quiet time to complete the workbook as it helped me to integrate Ali Haider's teachings on a more personal level and allowed me to open up mine and my partner's patterns of conflict. For me, if I can see one thing that will change in my personal relationship since completing the course, it is to step back and observe with kindness my partner's responses and relax my defensiveness. This course brings a rich and sophisticated intelligence to love and relationships."
            />
            <SlidingBar
               name="Lisa Weinreich"
               stars={5}
               review="I came to this course to improve how I communicate with my husband and closed loved ones. This course has given me useful tools which I've already started to utilize in my daily life! I'm striving to be more curious, reflective and less reactionary and triggered openly. Thank you, Ali Haider!"
            />
         </div>
      </div>
   );
};

export default SlidingBarContainer;
