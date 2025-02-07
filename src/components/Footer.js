import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Holiday Advisor</h2>
          <p className="mt-3 text-gray-300">Your dream destinations, our expert planning.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#packages" className="hover:text-yellow-400">Packages</a></li>
            <li><a href="#booking" className="hover:text-yellow-400">Book Now</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl"><FaYoutube /></a>
          </div>

          <h3 className="mt-6 text-xl font-semibold">Newsletter</h3>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r-md font-bold hover:bg-yellow-400">Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-10 text-center text-gray-300 border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} Holiday Advisor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;