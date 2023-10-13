import React from "react";

function FoodCard({ product }) {
    return (
        <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src={product.img} className="w-[250px] object-cover -mt-20 shadow-2xl rounded-full" alt="" />
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-400">${product.price}</p>
        </div>
    );
}

export default FoodCard;