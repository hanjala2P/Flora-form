import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    GoogleSignIn,
    emailPasswordSignIn,
    resetPassword,
  } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  // Email & Password Login
  const handleLoginWithEmailAndPass = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");

    emailPasswordSignIn(email, password)
      .then(() => {
        toast.success("Successfully logged in!", {
          position: "top-center",
          autoClose: 2000,
        });

        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  // Google Login
  const googleSignInHandler = () => {
    GoogleSignIn()
      .then(() => {
        toast.success("Successfully logged in with Google!", {
          position: "top-center",
          autoClose: 2000,
        });

        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  // Forgot Password
  const handleForgotPassword = () => {
    if (!email.trim()) {
      toast.error("Please enter your email address first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success(
          "Password reset email sent! Please check your inbox.",
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-lime-100">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lime-800">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">
            Log in to manage your plant collection
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        {/* Login Form */}
        <form
          onSubmit={handleLoginWithEmailAndPass}
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              required
              name="password"
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="••••••••"
            />

            <div className="text-right mt-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-lime-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold py-3 rounded-xl transition-all shadow-md active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={googleSignInHandler}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-95"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-lime-600 font-bold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;