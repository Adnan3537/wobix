import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Eco Sip Bottle", price: 600, image: "/images/6fde1edec2f6e03dd488a17d49c766af.png" },
  { id: 2, name: "Eco Sip Bottle", price: 120, image: "/images/a3bfe0189eec92aedb41369ec66b2aa6.png" },
  { id: 3, name: "Eco Sip Bottle", price: 120, image: "/images/0b8d4dd87c5454407a18f7730c31b36b.png" },
  { id: 4, name: "Eco Sip Bottle", price: 120, image: "/images/8b172159fabf13e852e01bdb3a350f03.png" },
  { id: 5, name: "Eco Sip Bottle", price: 120, image: "/images/a3bfe0189eec92aedb41369ec66b2aa6.png" },
  { id: 6, name: "Eco Sip Bottle", price: 120, image: "/images/0b8d4dd87c5454407a18f7730c31b36b.png" },
  { id: 7, name: "Eco Sip Bottle", price: 120, image: "/images/8b172159fabf13e852e01bdb3a350f03.png" },
  { id: 8, name: "Eco Sip Bottle", price: 120, image: "/images/a3bfe0189eec92aedb41369ec66b2aa6.png" },
  { id: 9, name: "Eco Sip Bottle", price: 120, image: "/images/0b8d4dd87c5454407a18f7730c31b36b.png" },
];

function ProductPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button className="border px-4 py-2 rounded-lg cursor-pointer  hover:bg-black hover:text-white transition duration-300">
          Product Type
        </button>
        <button className="border px-4 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition duration-300">Filter</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
