import React from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accessibility } from 'lucide-react';


const products = [
    {
        id: 1,
        name: 'Eco Sip Bottle',
        description: 'A beautiful and eco-friendly bottle',
        price: 10,
        image: 'src/assets/images/spotlight/6fde1edec2f6e03dd488a17d49c766af.png'
    },
    {
        id: 2,
        name: 'Eco Sip Bottle',
        description: 'A stylish and environmentally friendly bottle',
        price: 15,
        image: 'src/assets/images/spotlight/a3bfe0189eec92aedb41369ec66b2aa6.png'
    },
    {
        id: 3,
        name: 'Eco Sip Bottle',
        description: 'A unique and sustainable bottle',
        price: 20,
        image: 'src/assets/images/spotlight/0b8d4dd87c5454407a18f7730c31b36b.png'
    },
    {
        id: 4,
        name: 'Eco Sip Bottle',
        description: 'A modern and eco-friendly bottle',
        price: 25,
        image: 'src/assets/images/spotlight/8b172159fabf13e852e01bdb3a350f03.png'
    },
    {
        id: 1,
        name: 'Eco Sip Bottle',
        description: 'A beautiful and eco-friendly bottle',
        price: 10,
        image: 'src/assets/images/spotlight/6fde1edec2f6e03dd488a17d49c766af.png'
    },
    {
        id: 2,
        name: 'Eco Sip Bottle',
        description: 'A stylish and environmentally friendly bottle',
        price: 15,
        image: 'src/assets/images/spotlight/a3bfe0189eec92aedb41369ec66b2aa6.png'
    },
    {
        id: 3,
        name: 'Eco Sip Bottle',
        description: 'A unique and sustainable bottle',
        price: 20,
        image: 'src/assets/images/spotlight/0b8d4dd87c5454407a18f7730c31b36b.png'
    },
    {
        id: 4,
        name: 'Eco Sip Bottle',
        description: 'A modern and eco-friendly bottle',
        price: 25,
        image: 'src/assets/images/spotlight/8b172159fabf13e852e01bdb3a350f03.png'
    },
];

function ProductsSection() {
     const settings = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 4, // Adjust based on responsiveness
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
        <div className=' wrapper py-10'>
            <div className=''>
                <div className=' flex flex-col md:flex-row justify-between  md:items-center mb-10 '>
                    <div className='text-center md:text-left space-y-1'>
                        <h5 className='text-[#0000004D]  text-lg'>Products</h5>
                        <p className='text-[#0F6143]  md:w-30  text-2xl'>Sustainability Without Compromise</p>
                    </div>
                    <h3 className='text-[28px] md:text-[40px] text-center md:text-left'>Discover the Perfect Bottle for Every Occasion</h3>
                </div>
                {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> */}
                    <Slider ref={slider=> (sliderRef = slider)} {...settings} >
                        {products.map((product) => (
                            <div key={product.id} className="px-4 py-2">
                            <ProductCard product={product}  />
                            </div>
                        ))}
                    </Slider>
                {/* </div> */}
            </div>

            <div className=' md:pr-6 pr-0 buttons flex md:justify-end justify-center space-x-2 md:pt-10 pt-6'>
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
    );
}

export default ProductsSection;