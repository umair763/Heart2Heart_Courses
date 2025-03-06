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
               name="Amina Toure"
               stars={5}
               review="This program was such a game-changer for me. The lessons were simple, effective, and straight to the point! I now feel much more equipped to handle conflict in a healthy way. Thanks a lot for offering such a valuable course!"
            />

            <SlidingBar
               name="Claudia Rojas"
               stars={5}
               review="I’ve been following Syed Ali Haider for a while now, and after listening to the podcast, I knew this course would be beneficial. The first module alone made me realize some things I never even thought about. The impact it’s had on my communication skills and my relationship has been incredible. I just wish everyone could experience this growth."
            />

            <SlidingBar
               name="Tariq Ndungu"
               stars={5}
               review="After a difficult breakup, I decided to give this course a shot. I was tired of repeating the same arguments in my relationships. The course helped me recognize unhealthy patterns I didn’t even know existed. It taught me how to express my feelings rather than letting anger take over. Now, I feel more in control and have better tools to communicate when things get tough. Highly recommended!"
            />

            <SlidingBar
               name="Charlotte Dupont"
               stars={5}
               review="Improving how I approach conflict at work and at home is something I’m constantly working on. The idea of creating space between the trigger and my reaction was a big breakthrough for me. It’s a constant reminder that I have control over how I respond to situations, and that’s been incredibly empowering."
            />

            <SlidingBar
               name="Liu Wei"
               stars={5}
               review="I joined this course after a serious fight with my partner. It felt like we were always speaking different languages and couldn’t resolve our issues. This course taught me that most of our arguments were rooted in unmet needs rather than the surface-level issues we were arguing about. I may not know the outcome of my current relationship yet, but the lessons I learned will certainly guide me in the future. I’m grateful for this experience!"
            />

            <SlidingBar
               name="Emilia Kolar"
               stars={5}
               review="We often try to prove ourselves right in an argument, without truly listening to the other person. This course made me realize the importance of taking responsibility for my own part in conflicts, regardless of who’s ‘right.’ It has really helped me be more mindful in my relationships."
            />

            <SlidingBar
               name="Michael O’Donnell"
               stars={5}
               review="In my marriage, conflict often felt like a never-ending cycle that we couldn’t break. Syed Ali Haider’s course opened my eyes to the deeper reasons behind these repetitive patterns. I’m now able to step back and observe my reactions with more compassion and understanding. The course was incredibly insightful and I highly recommend it to anyone struggling with communication in their relationships."
            />

            <SlidingBar
               name="Sofia Vasquez"
               stars={5}
               review="I took this course because I wanted to improve my communication with my husband and family. It’s been incredibly helpful in giving me the tools to be more present, patient, and intentional in how I engage with them. I’m already seeing positive changes and am looking forward to growing even more!"
            />
         </div>
      </div>
   );
};

export default SlidingBarContainer;
