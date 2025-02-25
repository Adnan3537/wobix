import React from "react";

function ProductCard({product}) {
    console.log(product, "ProductCard");
    
  return (
       
    
             <div className='flex flex-col   relative md:mt-10 mt-0 p-6 space-y-3 rounded-2xl  cursor-pointer transform shadow px-4'>
                    <div className='image flex flex-col justify-center '>
                        <img src={product.image} alt="#"
                            className='aspect-[1/1.4] object-cover' />
                    </div>
                    <div className='icon absolute top-4 right-5 w-8 cursor-pointer'>
                        <img src="/images/Frame20.png" alt="#"
                            className='' />
                    </div>
                    <div className='details'>
                        <div className='tag flex items-center justify-between space-x-2'>
                            <h3 className='text-[12px]'>{product.name}</h3>
                            <div className='price'>
                                <h3>₹120</h3>
                            </div>
                        </div>
                        <p className='text-[#0F6143,] text-[12px]'>750ML</p>
                    </div>
                    <div className='buy flex justify-center cursor-pointer'>
                        <button className='button bg-black text-white px-12 py-1 rounded'>Buy Now</button>
                    </div>
                </div>
   
  )
}

export default ProductCard;

