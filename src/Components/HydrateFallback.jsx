import React from "react";

const HydrateFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-lg text-lime-500"></span>

        <h2 className="mt-5 text-2xl font-bold text-gray-800">
          Loading...
        </h2>

        <p className="text-gray-500 mt-2">
          Please wait while we prepare your garden 🌿
        </p>
      </div>
    </div>
  );
};

export default HydrateFallback;