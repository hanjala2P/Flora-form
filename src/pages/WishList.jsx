import React, { useEffect, useState } from "react";
import { loadWishListData, removeFromWishList } from "../Utils/LocalStorage";
import { AiOutlineDelete } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    setWishList(loadWishListData());
  }, []);

  const handleRemove = (plantId) => {
    removeFromWishList(plantId);
    setWishList(loadWishListData());
  };

  const toggleDetails = (plantId) => {
    setOpenCard(openCard === plantId ? null : plantId);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        My Wishlist ({wishList.length})
      </h2>

      {wishList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No plants added to wishlist.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishList.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">{plant.plantName}</h2>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-lime-600 font-bold text-xl">
                    ${plant.price}
                  </span>

                  <span className="text-yellow-500 font-semibold">
                    <FaStar></FaStar> {plant.rating}
                  </span>
                </div>

                {openCard === plant.plantId && (
                  <div className="mt-5 border-t pt-4 space-y-2 text-gray-600">
                    <p>
                      <strong>Category:</strong> {plant.category}
                    </p>

                    <p>
                      <strong>Description:</strong> {plant.description}
                    </p>

                    <p>
                      <strong>Available Stock:</strong>{" "}
                      {plant.availableStock}
                    </p>

                    <p>
                      <strong>Care Level:</strong> {plant.careLevel}
                    </p>

                    <p>
                      <strong>Provider:</strong> {plant.providerName}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => toggleDetails(plant.plantId)}
                    className="btn 00 border-lime-300 hover:bg-lime-600 text-lime-500 hover:text-white transition-all"
                  >
                    {openCard === plant.plantId
                      ? "Hide Details"
                      : "View Details"}
                  </button>

                  <button
                    onClick={() => handleRemove(plant.plantId)}
                    className="btn bg-lime-500 hover:bg-red-100 text-white  border-none"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to='/' className="flex flex-col justify-center mt-12 py-10">
        <button className="btn border-none bg-lime-400  text-white hover:bg-lime-500">Back to Home</button>
      </Link>
    </div>
    
  );
};

export default WishList;