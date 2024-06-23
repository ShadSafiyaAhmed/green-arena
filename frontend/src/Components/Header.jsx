import React from "react";
import { Link } from "react-router-dom";
import { MdStadium } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-transparent fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-2 ml-4 px-3">
          <span className="text-3xl font-bold text-white font-ubuntu">Green</span>
          <span className="text-3xl font-bold text-white font-ubuntu">Arena</span>
        </div>
        <MdStadium className="text-green-600" size={75} />
      </div>
      <nav>
        <ul className="flex space-x-8 text-lg px-12">
          <li className="relative cursor-pointer group">
            <Link to="/book-now" className="relative block px-3 py-1 bg-green-600 text-white border border-transparent rounded-md group-hover:bg-white group-hover:text-green-600 transition-all duration-300">
              Book Now
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform scale-x-0 group-hover:bg-green-600 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link to="/" className="relative block px-3 py-1 bg-green-600 text-white border border-transparent rounded-md group-hover:bg-white group-hover:text-green-600 transition-all duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform scale-x-0 group-hover:bg-green-600 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link to="/about" className="relative block px-3 py-1 bg-green-600 text-white border border-transparent rounded-md group-hover:bg-white group-hover:text-green-600 transition-all duration-300">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform scale-x-0 group-hover:bg-green-600 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link to="/login" className="relative block px-3 py-1 bg-blue-600 text-white border border-transparent rounded-md group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
              Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform scale-x-0 group-hover:bg-blue-600 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
