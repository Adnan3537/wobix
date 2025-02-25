import React from 'react'

function SpotLight() {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='wrapper  bg-[url(src/assets/images/spotlight/spotlightpic.jpeg)] bg-cover bg-center w-full rounded-2xl min-h[400px] flex flex-col justify-between'>
                <div className='flex flex-col justify-center items-center text-center w-full px-4'>
                    <h2 className='text-[30px] text-white font-semibold text-center text-4xl md:text-6xl lg:text-7xl leading-tight w-full md:w-[80%] lg:w-[60%] pt-[50px] md:mt-[100px] md:mb-[100px]'>Stay Hydrated,<br />Stay Healthy</h2>

                </div>
                <div className='md:p-5 p-3  space-y-9   flex flex-col md:items-start items-center'>
                    <p className=' md:w-80 w-50 text-[16px] md:text-[22px] text-white md:text-left text-center'>Durable, Leak-Proof Bottles for Everyday Adventures</p>
                   <a href=""><button className=' cursor-pointer bg-white md:p-3 p-2 rounded-sm'><p className='md:text-[16px] text-[14px]  text-[#0F6143]'>Explore all products</p></button></a> 
                </div>
            </div>
        </div>
    )
}

export default SpotLight;
