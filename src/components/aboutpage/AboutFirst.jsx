// import React from 'react';

function AboutFirst() {
    return (
        <div className="wrapper px-4 md:px-0">
            <div className="mt-5 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
                {/* Left Section */}
                <div className="w-full md:w-[49%] text-center md:text-left">
                    <h1 className="text-[40px] md:text-[80px] font-semibold leading-tight">About Us</h1>
                    <p className="text-lg text-gray-600 mt-2">Redefining Hydration, One Bottle at a Time</p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[49%] text-gray-700 text-center md:text-left">
                    <p className="text-md md:text-lg leading-relaxed">
                        At <span className="font-semibold">[Your Brand Name]</span>, we are passionate about hydration and its role in a healthy, active lifestyle.
                        Founded with the mission to provide innovative, eco-friendly, and stylish hydration solutions, we have grown into a trusted brand
                        that puts people and the planet first. From the start, we’ve been dedicated to creating products that inspire confidence, enhance
                        convenience, and leave a positive impact on the environment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutFirst;
