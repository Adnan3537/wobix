// import React from 'react'

// function AboutFifth() {
//     return (
//         <div>
//             <div className='wrapper '>
//                 <div className='top mt-20'>
//                     <h2 className='text-center text-[30px] mb-10'>Why choose us?</h2>
//                 </div>
//                 <div className='bottom1 flex items-center gap-20 '>
//                     <div className='left w-[49%]'>
//                         <img src="src/assets/images/spotlight/bluebottle.png" alt="#" />
//                     </div>
//                     <div className='right'>
//                         <div className='mb-6'>
//                             <h3 className='font-semibold mb-2'>Innovative Design</h3>
//                             <p>Each bottle is crafted with cutting-edge technology to keep your beverages at the perfect temperature for hours.</p>
//                         </div>
//                         <div>
//                             <h3 className='font-semibold mb-2'>Eco-Friendly Materials</h3>
//                             <p>We prioritize sustainability by using BPA-free, recyclable, and long-lasting materials.</p>
//                         </div>
//                     </div>
//                     </div>
//                     <div className='bottom2 flex items-center gap-20 '>
//                         <div className='left w-[39%]'>
//                             <div className='mb-6'>
//                                 <h3 className='font-semibold mb-2' >Lifestyle-Centric</h3>
//                                 <p>Whether you're hitting the gym, heading to the office, or exploring the outdoors, our bottles are designed to fit seamlessly into your life.</p>
//                             </div>
//                             <div className='mb-6'> 
//                                 <h3 className='font-semibold mb-2'>Customer-First Approach</h3>
//                                 <p>our satisfaction is at the core of what we do. We’re committed to providing exceptional products and unmatched customer service.</p>
//                             </div>
//                         </div>
//                         <div className='right w-[50%] '>
//                             <div>
//                             <img src="src/assets/images/spotlight/whites.png" alt="#" />
//                             </div>
                       
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

// export default AboutFifth

import React from 'react';

function AboutFifth() {
    return (
        <div className="wrapper py-16">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us?</h2>
            </div>

            {/* First Feature Block */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                {/* Left - Image */}
                <div className="w-full md:w-[49%] flex justify-center">
                    <img 
                        src="/src/assets/images/spotlight/bluebottle.png" 
                        alt="Blue Bottle" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Right - Content */}
                <div className="w-full md:w-[49%]">
                    <div className="mb-6">
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Innovative Design</h3>
                        <p className="text-gray-600">
                            Each bottle is crafted with cutting-edge technology to keep your beverages at the 
                            perfect temperature for hours.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Eco-Friendly Materials</h3>
                        <p className="text-gray-600">
                            We prioritize sustainability by using BPA-free, recyclable, and long-lasting materials.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Feature Block */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left - Content */}
                <div className="w-full md:w-[49%]">
                    <div className="mb-6">
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Lifestyle-Centric</h3>
                        <p className="text-gray-600">
                            Whether you're hitting the gym, heading to the office, or exploring the outdoors, 
                            our bottles are designed to fit seamlessly into your life.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Customer-First Approach</h3>
                        <p className="text-gray-600">
                            Your satisfaction is at the core of what we do. We’re committed to providing exceptional 
                            products and unmatched customer service.
                        </p>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full md:w-[49%] flex justify-center">
                    <img 
                        src="/images/whites.png" 
                        alt="White Bottle" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutFifth;
