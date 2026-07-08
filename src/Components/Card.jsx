import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { addToWishList } from "../Utils/LocalStorage";

const Card = ({ plant }) => {
  const handleAddToWishList = () => {
    addToWishList(plant);
  };

  return (
    <div className="group bg-white p-5 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(163,230,53,0.15)] transition-all duration-500 flex flex-col">
      <div className="relative w-full h-64 mb-5 overflow-hidden rounded-lg">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          ⭐ {plant.rating}
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="font-bold text-lg">{plant.plantName}</h3>

        <p className="text-gray-500">{plant.category}</p>

        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-bold text-lime-600">
            ${plant.price}
          </h2>

          <button
            onClick={handleAddToWishList}
            className="bg-lime-500 hover:bg-lime-600 text-white p-3 rounded-full transition-all active:scale-90 shadow-md"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>

      <Link to={`/viewDetails/${plant.plantId}`} className="mt-5">
        <button className="w-full bg-lime-100 hover:bg-lime-500 hover:text-white py-3 rounded-xl transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Card;