// import React from 'react';

function AboutForth() {
    return (
        <div className="wrapper py-10">
            <div className="main flex flex-col md:flex-row gap-10 items-center">
                
                {/* Left Section */}
                <div className="left w-full md:w-[46%]">
                    <div className="top">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Story</h2>
                        <p className="text-sm md:text-base text-gray-600 w-full md:w-[80%] mb-5 leading-relaxed">
                            What started as a simple idea to make hydration easier has grown into a brand committed 
                            to innovation and sustainability. We realized the need for water bottles that are not only 
                            functional but also stylish and environmentally conscious. Our journey began with a focus 
                            on high-quality materials and user-centric design, and today, we take pride in offering 
                            products that make a difference in everyday lives and the world around us. With every 
                            bottle, we aim to empower individuals to stay healthy and make choices that benefit the planet.
                        </p>
                    </div>

                    <hr className="w-full md:w-3/4 border-gray-300 mb-4" />

                    <div className="bottom">
                        <h4 className="mb-5 font-bold text-lg text-gray-700">
                            "We believe that every reusable bottle represents countless single-use plastics 
                            saved from our oceans. It's not just about hydration; it's about creating a sustainable future."
                        </h4>

                        {/* Profile Section */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img 
                                    src="/images/Ellipse2(1).png" 
                                    alt="Sarah Chen" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-medium">Sarah Chen</p>
                                <p className="text-gray-500 text-sm">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right w-full md:w-[49%] flex justify-center">
                    <img 
                        src="/images/1blackbottle.png" 
                        alt="Black Bottle" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>

            </div>
        </div>
    );
}

export default AboutForth;
