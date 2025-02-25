// import React from 'react'
// import TestimonialscCard from './TestimonialscCard'

// const cards =[
//     {
//         name: 'Hellen Jummy',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
//         image: 'src/assets/images/spotlight/User Thumb.png',
//     },
//     {
//         name: 'Hellen Jummy',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
//         image: 'src/assets/images/spotlight/User Thumb.png',
//     },
//     {
//         name: 'Hellen Jummy',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
//         image: 'src/assets/images/spotlight/User Thumb.png',
//     },

// ]
// function TestimonialsSection() {
//     return (
//         <div className='bg-[#F8F8F8]'>
//               <div className='wrapper py-10 px-4 md:px-10'>
//             <div className='max-w-6xl mx-auto'>
//                 <div className='flex  justify-center items-baseline w-[100%] space-x-6'>
//                 <div className='text-center md:text-left mb-10 w-[30%]'>
//                     <h5 className='text-[#0000004D] text-sm md:text-base'>Testimonials</h5>
//                     <h4 className='text-[#0F6143] '>What Our Customers Are Saying</h4>
//                     </div>
//                     <div>
//                     <h3 className='text-lg md:text-[30px] mt-2 w-[70%]'>
//                         Real experiences from people who love staying hydrated with our bottles.
//                     </h3>
//                 </div>
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//                     {cards.map((card) => (
//                         <TestimonialscCard key={card.id} card={card} />
//                     ))}
//                 </div>
//             </div>
//             <div className='buttons flex justify-end space-x-2 mt-9'>
//                     <div>
//                         <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
//                                 <rect x="-0.5" y="0.5" width="47" height="47" rx="23.5" transform="matrix(-1 0 0 1 47 0)" stroke="black" />
//                                 <path d="M27 30L21 24L27 18" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        
//                         </svg>
//                     </div>
//                     <div>
//                         <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black" />
//                             <path d="M21 30L27 24L21 18" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//                     </div>
//                 </div>
//         </div>
//         </div>
//     )
// }

// export default TestimonialsSection

import React from 'react';
import Slider from "react-slick";
import TestimonialscCard from './TestimonialscCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
        id: 1,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
    {
        id: 2,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
    {
        id: 3,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
    {
        id: 1,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
    {
        id: 2,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
    {
        id: 3,
        name: 'Hellen Jummy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, lectus ac fringilla commodo, mi lectus tempus libero, non tempor ex neque ut justo.',
        image: 'src/assets/images/spotlight/User Thumb.png',
    },
];

function TestimonialsSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust based on responsiveness
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false, // Hide default arrows (we use custom buttons)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    let sliderRef = React.useRef(null);

    return (
        <div className='bg-[#F8F8F8]'>
            <div className='wrapper py-10'>
                <div className=''>                  
                    <div className='flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[100px]  md:items-baseline mb-10 '>
                        <div className='text-center md:text-left md:mb-10 mb-0 md:space-y-2.5 space-y-0'>
                            <h5 className='text-[#0000004D] text-lg '>Testimonials</h5>
                            <h4 className='text-[#0F6143] text-2xl'>What Our Customers Are Saying</h4>
                        </div>
                        <div>
                            <h3 className='text-[28px] md:text-[44px] md:leading-[50px] leading-[35px] text-center md:text-left md:mt-2 mt-0'>
                                Real experiences from people who love staying hydrated with our bottles.
                            </h3>
                        </div>
                    </div>

                    {/* React Slick Slider */}
                    <Slider ref={slider => (sliderRef = slider)} {...settings} className="mt-6 ">
                        {cards.map((card) => (
                            <div key={card.id} className="px-4">
                                <TestimonialscCard card={card} />
                            </div>
                        ))}
                    </Slider>
                    {/* Custom Buttons */}
                    <div className='md:pr-6 pr-0 buttons flex md:justify-end justify-center space-x-2 md:pt-10 pt-6'>
                        <button onClick={() => sliderRef.slickPrev()}>
                            <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-0.5" y="0.5" width="47" height="47" rx="23.5" transform="matrix(-1 0 0 1 47 0)" stroke="black" />
                                <path d="M27 30L21 24L27 18" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button onClick={() => sliderRef.slickNext()}>
                            <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black" />
                                <path d="M21 30L27 24L21 18" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection;

