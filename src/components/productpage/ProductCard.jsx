import React from "react";

function ProductCard({ product }) {
  return (
  <div className="relative p-4  cursor-pointer transform shadow px-4 rounded-lg ">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full aspect-[1.2/1.3] object-cover rounded-lg" />

      {/* Cart Icon */}
        {/* 🛒 */}
        <div className='icon absolute top-4 right-5 w-8 cursor-pointer'>
                        <img src="/images/Frame20.png" alt="#"
                            className='' />
                    </div>
                    
      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">750ML</p>
        <p className="text-black font-bold text-xl mt-2">₹{product.price}</p>
      </div>

      {/* Buy Now Button */}
      <button className="mt-3 w-full bg-black text-white py-2 rounded cursor-pointer">
        Buy Now
      </button>
    </div>

  );
}

export default ProductCard;
