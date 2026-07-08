import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useLoaderData } from 'react-router';
// আইকনগুলো ইমপোর্ট করা
import { FaArrowLeft, FaStar, FaWater, FaSun, FaLeaf, FaDollarSign, FaInfoCircle, FaRulerCombined, FaGlobeAmericas, FaWarehouse, FaShieldAlt, FaTruck } from 'react-icons/fa';

const ViewDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const details = useLoaderData();

    const data = details?.find((item) => item.plantId == id);

    if (!data) {
        return (
            
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h2>
                    <p className="text-gray-600 mb-8">Plant information not found.</p>
                    <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-full transition-all shadow-lg flex items-center gap-2" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Go Back
                    </button>
                </div>
            </div>
        );
    }

    const { category, image, plantName, price, rating, tips, description, scientificName,origin, availableStock, careLevel, providerName } = data;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
           Discover {plantName}
          </h2>
          <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500">
            Find the perfect plant for your unique space
          </p>
        </div>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Image & Category */}
                <div className="relative">
                    <img src={image} alt={plantName} className="w-full h-96 object-cover" />
                    <div className="absolute top-4 left-4 bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        {category}
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900">{plantName}</h1>
                            {scientificName && <p className="italic text-gray-500 mt-1">{scientificName}</p>}
                        </div>
                        <div className="flex items-center text-3xl font-bold text-lime-600">
                            <FaDollarSign /> {price}
                        </div>
                    </div>

                    {/* Additional Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-100 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-500 uppercase">Rating</p>
                            <p className="font-bold flex justify-center items-center gap-1"><FaStar className="text-yellow-500" /> {rating}</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-500 uppercase">Stock</p>
                            <p className="font-bold flex justify-center items-center gap-1"><FaWarehouse /> {availableStock}</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-500 uppercase">Care Level</p>
                            <p className="font-bold flex justify-center items-center gap-1"><FaShieldAlt /> {careLevel}</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-500 uppercase">Provider</p>
                            <p className="font-bold flex justify-center items-center gap-1 truncate"><FaTruck /> {providerName}</p>
                        </div>
                    </div>

                    {/* Description */}
                    {description && (
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                <FaInfoCircle className="text-lime-500" /> About {plantName}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                    )}

                    {/* Care Tips Section */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">🌱 Plant Care Guide</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-blue-500"><FaWater size={24} /></span>
                                <p className="font-semibold">Watering</p>
                                <p className="text-sm text-gray-600">{tips?.watering}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-yellow-500"><FaSun size={24} /></span>
                                <p className="font-semibold">Sunlight</p>
                                <p className="text-sm text-gray-600">{tips?.sunlight}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-green-600"><FaLeaf size={24} /></span>
                                <p className="font-semibold">Fertilizing</p>
                                <p className="text-sm text-gray-600">{tips?.fertilizing}</p>
                            </div>
                        </div>
                    </div>

                    <button 
                        className="mt-10 w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-bold transition-transform hover:scale-[1.01] flex items-center justify-center gap-2" 
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft /> Back to Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;