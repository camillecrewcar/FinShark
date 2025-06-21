import React from "react";
import logo from "./logo.png";
import { Link } from "react-router";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-blue-700 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto rounded shadow bg-white p-1"
            />
          </Link>
          <div className="hidden lg:flex space-x-6 font-bold">
            <Link
              to="/search"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-blue-200 transition-colors font-semibold">
            Login
          </button>
          <a
            href="#"
            className="px-6 py-2 font-bold rounded bg-green-500 text-white hover:bg-green-600 transition-colors shadow"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;