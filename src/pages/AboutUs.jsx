import React from "react";
import { PiLeafBold, PiFlowerBold, PiPlantBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-lime-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            About PlantCare
          </h2>

          <div className="w-24 h-1.5 bg-lime-500 rounded-full mx-auto mt-4"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            PlantCare is dedicated to helping people discover, care for,
            and enjoy beautiful indoor plants. Whether you're a beginner
            or an experienced plant lover, we make plant care simple,
            enjoyable, and accessible.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg"
              alt="Plant Care"
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Bringing Nature Closer to Everyone 🌿
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              We believe plants make every home healthier, happier, and
              more beautiful. Our mission is to connect people with the
              perfect plants while providing expert care guides, helpful
              tips, and trusted recommendations.
            </p>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="bg-lime-100 p-4 rounded-full">
                  <PiLeafBold className="text-3xl text-lime-600" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Healthy Plants</h4>
                  <p className="text-gray-500">
                    Premium quality indoor plants selected with care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-lime-100 p-4 rounded-full">
                  <PiFlowerBold className="text-3xl text-lime-600" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Expert Care Tips</h4>
                  <p className="text-gray-500">
                    Easy watering, sunlight, and fertilizing guides.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-lime-100 p-4 rounded-full">
                  <FaUsers className="text-3xl text-lime-600" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Growing Community</h4>
                  <p className="text-gray-500">
                    Thousands of happy plant lovers trust our platform.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <PiPlantBold className="text-5xl text-lime-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-500">Plants</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <FaUsers className="text-5xl text-lime-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <PiLeafBold className="text-5xl text-lime-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-500">Plant Experts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <PiFlowerBold className="text-5xl text-lime-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-500">Customer Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;