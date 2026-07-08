
import { useContext } from "react";
import { BiHeart } from "react-icons/bi";

import { PiPlantFill } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(()=>{
      toast.success("logout succesfully")
    })
    
  }
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPlants">Plants</NavLink>
      </li>
      <li>
        <NavLink to="/my-Profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-white/40 backdrop-blur-xl border border-white/10 shadow-sm ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  bg-white/60 backdrop-blur-xl border border-white/10 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="flex gap-1 text-xl font-semibold">
            <span className="text-3xl text-lime-500">
              <PiPlantFill />
            </span>{" "}
            Flora Form
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/wishlist" className="btn btn-ghost gap-1">
            <BiHeart className="text-2xl text-lime-500" />
            <span className="hidden lg:inline-block">Wishlist</span>
          </Link>
{user ? (
        <div className="dropdown dropdown-end">
          {/* Profile Image */}
          <div tabIndex={0} role="button" className="avatar cursor-pointer">
            <div className="w-11 rounded-full ring ring-lime-400 ring-offset-2">
              <img
                src={
                  user.photoURL ||
                  "https://ui-avatars.com/api/?name=User"
                }
                alt="Profile"
              />
            </div>
          </div>

          {/* Dropdown */}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-56 p-2 shadow-lg mt-3"
          >
            <li className="pointer-events-none">
              <span className="font-bold">
                {user.displayName || "User"}
              </span>
            </li>

            <li className="pointer-events-none text-gray-500">
              <span>{user.email}</span>
            </li>

            <div className="divider my-1"></div>

            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <button onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn bg-lime-500 text-white">
            Login
          </button>
        </Link>
      )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
