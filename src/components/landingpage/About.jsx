import React from 'react';

function About() {
    return (
        <div className='bg-[#F8F8F8]'>
        <div className= 'wrapper  pt-12 px-4 md:px-8 '>
            <div className=''>
                <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 '>
                    <div className='flex flex-col space-y-2 md:w-1/3 '>
                        <h5 className='text-[#0000004D] text-lg'>About Us</h5>
                        <p className='text-[#0F6143] text-2xl'>Hydration Meets Innovation.</p>
                    </div>
                    <div className='flex flex-col space-y-6 md:w-2/3 '>
                        <h2 className='text-[20px] sm:text-[39px] '>
                            Combining Innovation, Sustainability, and Style to Create Bottles That Inspire Healthy Living.
                        </h2>
                        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9'>
                            <p className='md:w-1/2 text-[16px]'>
                                At [Your Brand Name], we believe hydration should be effortless, enjoyable, and environmentally responsible. That’s why we’ve crafted water bottles that not only meet your lifestyle needs but also make a positive impact on the planet. Our designs blend advanced technology, premium materials, and modern aesthetics to deliver products that keep your beverages at the perfect temperature, wherever life takes you.
                            </p>
                            <p className='md:w-1/2 text-[16px]'>
                                From eco-conscious manufacturing to functional elegance, every detail is carefully considered to support your active lifestyle while reducing waste. Join us on our mission to stay hydrated and create a greener, healthier future—one sip at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
