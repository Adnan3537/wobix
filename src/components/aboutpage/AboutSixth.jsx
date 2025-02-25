// import React from 'react'

// function Aboutsixth() {
//   return (
//     <div className='bg-[url(src/assets/images/spotlight/bgbottles4.jpeg)]  bg-cover flex-col items-center justify-center py-50 mt-20'> 
//     <div className='wrapper '>
//       <div className=''>
//           <h2 className='text-[40px] mb-6 text-white font-thin text-center text-4xl md:text-6xl'>Join Our Journey</h2>
//           <p className='text-[22px] text-white md:text-left text-center'>Hydration is just the beginning. Together, let’s make a difference for ourselves and the world. Explore our collections, and find the perfect water bottle for your lifestyle. Stay hydrated. Stay inspired.</p>
//       </div>
//       <div className='buttons flex justify-center items-center pt-8 space-x-2 mt-15 text-white'>
//           <div className='button border-2 border-white px-8 py-2 rounded-2xl'>Buy now</div>
//           <div className='button border-2 border-white px-8 py-2 rounded-2xl'>Learn More</div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Aboutsixth

import React from 'react';

function AboutSixth() {
  return (
    <div 
      className="flex flex-col items-center justify-center py-40 mt-20 bg-cover bg"
      style={{ backgroundImage: "url('/src/assets/images/spotlight/bgbottles4.jpeg')" }}
    > 
      <div className="wrapper text-center max-w-3xl px-6">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-light mb-6">Join Our Journey</h2>
        
        {/* Description */}
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Hydration is just the beginning. Together, let’s make a difference for ourselves and the world. 
          Explore our collections and find the perfect water bottle for your lifestyle. Stay hydrated. Stay inspired.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-8 space-y-4 md:space-y-0 md:space-x-4 mt-20">
          <button className="border-2 border-white text-white px-8 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">
            Buy Now
          </button>
          <button className="border-2 border-white text-white px-8 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSixth;

