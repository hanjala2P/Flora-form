import React from "react";
import { useLoaderData } from "react-router";
import { IoWaterOutline, IoSunnyOutline } from "react-icons/io5";
import { GiFertilizerBag } from "react-icons/gi";
const Tips = () => {
  const plants = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Plant Care & Maintenance Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants?.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white p-6 rounded-3xl border border-lime-100 shadow-lg hover:border-lime-300 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-lime-700 mb-1">
              {plant.plantName}
            </h3>
            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
              {plant.category}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <IoWaterOutline className="text-blue-500" /> Watering
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {plant.tips.watering}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <IoSunnyOutline className="text-yellow-500" /> Sunlight
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {plant.tips.sunlight}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <GiFertilizerBag className="text-green-600" /> Fertilizing
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {plant.tips.fertilizing}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
