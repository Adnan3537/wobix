import React from 'react'

function TestimonialscCard({card}) {
    console.log(card.image);
    
    return (
        <div className='flex flex-col justify-center bg-white p-6 space-y-5 rounded-2xl   cursor-pointer transform hover:scale-110 transition-transform duration-500'>
            <div>
                <p className='font-light text-[18px]'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
            </div>
            <div className='flex gap-[10px] items-center   '>
                <div>
                    <img src={card.image} alt='#' 
                    className='w-[50px] h-[50px]'/>
                </div>
                <div>
                    <h3>{card.name}</h3>
                    <p>Company Name</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialscCard
