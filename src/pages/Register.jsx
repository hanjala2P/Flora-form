
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router'; 

const Register = () => {
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50 px-4 py-10">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-lime-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lime-800">Create Account</h2>
          <p className="text-gray-500 mt-2">Join our plant loving community</p>
        </div>

        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="John Doe" />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="you@example.com" />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold py-3 rounded-xl transition-all shadow-md active:scale-95">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-95">
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-lime-600 font-bold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;