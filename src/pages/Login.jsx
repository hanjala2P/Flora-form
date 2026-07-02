import React from 'react';
import { FcGoogle } from 'react-icons/fc'; 
import { Link } from 'react-router'; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-lime-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lime-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Log in to manage your plant collection</p>
        </div>

        <form className="space-y-6">
          {/* Email & Password Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold py-3 rounded-xl transition-all shadow-md">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-95">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-lime-600 font-bold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;