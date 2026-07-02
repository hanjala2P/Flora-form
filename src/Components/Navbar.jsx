import React from "react";
import { PiPlantFill } from "react-icons/pi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">Plants</NavLink>
      </li>
      <li>
        <NavLink to="/my-Profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white/30 backdrop-blur-xl border border-white/10 shadow-sm">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content  bg-white/20 backdrop-blur-xl border border-white/10 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          <Link to="/login" className="btn bg-lime-500 animate-pulse hover:bg-lime-600 text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
