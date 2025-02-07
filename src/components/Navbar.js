import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="1.png"
            alt="Holiday Adviser Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#packages"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Packages
          </a>
          <a
            href="#destinations"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Destinations
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:flex">
          <a
            href="#booking"
            className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold shadow-xl hover:bg-yellow-400 transition transform hover:scale-105 hidden lg:block"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-gradient-to-b from-blue-300 to-blue-100 text-white text-center py-6 space-y-4 shadow-lg rounded-b-xl">
          <a
            href="#home"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Home
          </a>
          <a
            href="#packages"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Packages
          </a>
          <a
            href="#destinations"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Destinations
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Contact
          </a>
          <a
            href="#booking"
            className="block py-2 bg-yellow-500 text-blue-900 font-bold px-6 rounded-full shadow-md hover:bg-yellow-400 transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
