import React from "react";
import Logo from "../assets/parampra_logo.png";
import { Link } from "react-router-dom";


function Nav() {
 
  return (
    <div 
      className=" shadow-md h-20 flex items-center justify-between px-8 py-4 mx-auto"
    >
      <div className="w-20 h-20 ">
        <img src={Logo} alt="logo" className="rounded-full" />
      </div>
      <div className="hidden md:flex gap-8 text-gray-600">
        <Link
          to={"/"}
          className="font-medium hover:text-blue-600 transition duration-200 "
        >
          HOME
        </Link>
        <Link
          to={"/about"}
          className="font-medium hover:text-blue-600 transition duration-200 "
        >
          ABOUT
        </Link>
        <Link
          to={"/poshak"}
          className="font-medium hover:text-blue-600 transition duration-200 "
        >
          POSHAK
        </Link>
        <Link
          to={"/contect"}
          className="font-medium hover:text-blue-600 transition duration-200 "
        >
          CONTECT
        </Link>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition duration-800 font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Nav;
