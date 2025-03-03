import { useEffect, useRef } from 'react';

const SlidingBar = ({ avatar, name, stars, review }) => {
   return (
      <div className="bg-white p-4 rounded-lg shadow-md border w-80 h-56 flex flex-col ml-1 mr-1 relative">
         {/* Shadow at the base of the card */}
         <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-neutral-600 via-neutral-300 to-transparent"></div>

         <div className="flex items-center gap-2 mb-2">
            {avatar ? (
               <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
            ) : (
               <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-lg">
                  {name.slice(0, 2).toUpperCase()}
               </div>
            )}
            <h3 className="text-lg font-semibold">{name}</h3>
         </div>
         <div className="text-yellow-500 mb-2">{'⭐'.repeat(stars)}</div>

         {/* Scrollable review section */}
         <div className="flex-1 overflow-y-auto">
            <p className="text-gray-700 text-sm">{review}</p>
         </div>
      </div>
   );
};

export default SlidingBar;
