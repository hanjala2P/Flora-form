import React from "react";
import { useLoaderData,Link } from "react-router";
import Card from "../Components/Card";

const Categories = () => {
  const data = useLoaderData();

  return (
    <section className="py-20 bg-lime-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Top Rated Indoor Plants
          </h2>

          <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-500">
            Find the perfect plant for your unique space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.slice(0, 4).map((plant) => (
            <Card
              key={plant.plantId}
              plant={plant}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/allPlants"
          className="bg-lime-500 hover:bg-lime-600 text-white py-3 px-6 rounded-full font-bold transition-all shadow-md"
        >
          View All Plants
        </Link>
      </div>
    </section>
  );
};

export default Categories;