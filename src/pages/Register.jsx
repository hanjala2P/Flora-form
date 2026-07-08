
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router'; 
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from 'react';


const Register = () => {
  const navigate = useNavigate();
  const { GoogleSignIn,emailPasswordSignUp} = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

   if(name.length <3){
    setError('Name must be at least 3 characters long');
    return;
   }
   if(password.length <6){
    setError('Password must be at least 6 characters long');
    return;
   }
   setError('');



    emailPasswordSignUp(email,password)
    .then(()=>{
      toast.success('Successfully registered!', {
        position: "top-center",
        autoClose: 2000,
      });
       navigate("/");
    })
    
    .catch((error)=>{
      toast.error(`Error: ${error.message}`, {
        position: "top-center",
        autoClose: 2000,
      });
    });
  }

  const handleGogleSignIn =()=>{
    GoogleSignIn()
    .then(()=>{
      toast.success('Successfully logged in with Google!', {
        position: "top-center",
        autoClose: 2000,
      });
    })
    .catch((error)=>{
      toast.error(`Error: ${error.message}`, {
        position: "top-center",
        autoClose: 2000,
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50 px-4 py-10">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-lime-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lime-800">Create Account</h2>
          <p className="text-gray-500 mt-2">Join our plant loving community</p>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input required name='name' type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="John Doe" />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input required name='email' type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="you@example.com" />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input required name='password' type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="••••••••" />
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
        <button onClick={handleGogleSignIn} className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-95">
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