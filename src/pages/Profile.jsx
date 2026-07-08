import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, } from "react-router";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-lime-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 border border-lime-100">

        <div className="flex flex-col items-center">
          <img
            src={
              user?.photoURL ||
              "https://ui-avatars.com/api/?name=User&background=84cc16&color=fff"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-lime-400"
          />

          <h2 className="mt-5 text-3xl font-bold text-gray-800">
            {user?.displayName || "No Name"}
          </h2>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>
        </div>

        <div className="divider"></div>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">
              User ID
            </span>

            <span className="text-sm text-gray-500">
              {user?.uid?.slice(0, 10)}...
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">
              Email Verified
            </span>

            <span
              className={`font-semibold ${
                user?.emailVerified
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {user?.emailVerified ? "Yes" : "No"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">
              Provider
            </span>

            <span>
              {user?.providerData[0]?.providerId}
            </span>
          </div>
        </div>
        <Link to='/' className="flex flex-col justify-center ">
            <button className="btn  mt-6  text-lime-400 hover:bg-lime-500 hover:text-white border-lime-400">back to home</button>
        </Link>

      </div>
    </div>
  );
};

export default Profile;