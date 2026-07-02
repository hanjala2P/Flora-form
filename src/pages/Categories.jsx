import React from 'react';

import { PiLeafBold, PiSunBold, PiDropBold, PiFlowerBold } from 'react-icons/pi';
import { useRouteLoaderData } from 'react-router';

const Categories = () => {

  const data = useRouteLoaderData(); 
  console.log(data); 

  return (
    <section className="py-20 bg-lime-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
          <p className="text-gray-500">Find the perfect plant for your unique space</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data?.map((cat, index) => (
            <div 
              key={cat.id || index} //
              className="group bg-white p-8 rounded-3xl border border-lime-100 shadow-sm hover:shadow-xl hover:border-lime-300 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
          
              <div className="text-4xl text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <PiLeafBold /> 
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{cat.categoryName}</h3>
              <p className="text-sm text-gray-400">{cat.totalItems} Items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;