import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lime-50">
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-lime-600"></span>

      {/* Text */}
      <h2 className="mt-5 text-2xl font-bold text-lime-700">
        Loading...
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait while we prepare your plants 🌿
      </p>
    </div>
  );
};

export default Loading;