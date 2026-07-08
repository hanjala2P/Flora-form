import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
     
         const data = useLoaderData();




  return (

    <section className="py-20 bg-lime-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Rated Indoor Plants</h2>
          <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500">Find the perfect plant for your unique space</p>
        </div>
        

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {data?.map((cat, index) => (
    <div 
      key={cat.plantId || index} 
      className="group bg-white p-5 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(163,230,53,0.15)] transition-all duration-500 flex flex-col"
    >
    
      <div className="relative w-full h-64 mb-5 overflow-hidden rounded-lg">
        <img 
          src={cat.image} 
          alt={cat.plantName} 
          className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
          <span className="text-yellow-400">★</span> {cat.rating}
        </div>
      </div>

     
      <div className="flex-grow mb-4">
        <h3 className="font-bold text-gray-900 text-lg">{cat.plantName}</h3>
        <p className="text-sm text-gray-500 mb-2">{cat.category}</p>
        
      
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-lime-600 text-2xl">${cat.price}</p>
        
          <button className="bg-lime-500 hover:bg-lime-600 text-white p-3 rounded-full transition-all active:scale-90 shadow-md">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>

      <Link to={`/viewDetails/${cat.plantId}`}>
      <button className="w-full text-black bg-lime-100 hover:bg-lime-400 hover:text-white font-medium py-3 rounded-xl transition-all active:scale-95">
        View Details
      </button>
      </Link>
    </div>
    
  ))}
  
</div>

      </div>
  <div className="flex justify-center mt-12">
        <Link to="/" className="bg-lime-500 hover:bg-lime-600 text-white py-3 px-6 rounded-full font-bold transition-all shadow-md">
  Back to Home
</Link>
  </div>
    </section>
    );
};

export default AllPlants;