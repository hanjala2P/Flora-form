import React from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const details = useLoaderData();

    // ডেটা ফিল্টার করা
    const data = details?.find((item) => item.plantId == id);

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h2>
                    <p className="text-gray-600 mb-8">Plant information not found.</p>
                    <button 
                        className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-full transition-all shadow-lg" 
                        onClick={() => navigate(-1)}
                    >
                        Go Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const { category, image, plantName, price, rating, tips } = data;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image Header */}
                <div className="relative">
                    <img src={image} alt={plantName} className="w-full h-80 object-cover" />
                    <div className="absolute top-4 left-4 bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">{plantName}</h1>
                        <div className="text-2xl font-bold text-lime-600">${price}</div>
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-medium">★ {rating} Rating</span>
                    </div>

                    {/* Care Tips Section */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">🌱 Plant Care Guide</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3"><span className="text-blue-500">💧</span> Watering: {tips.watering}</li>
                            <li className="flex items-center gap-3"><span className="text-yellow-500">☀️</span> Sunlight: {tips.sunlight}</li>
                            <li className="flex items-center gap-3"><span className="text-green-600">🌿</span> Fertilizing: {tips.fertilizing}</li>
                        </ul>
                    </div>

                   

                    <button 
                        className="mt-10 w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-bold transition-transform hover:scale-[1.01]" 
                        onClick={() => navigate(-1)}
                    >
                        Back to Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;