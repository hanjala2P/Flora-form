import React from 'react';
import { PiPlantFill } from 'react-icons/pi';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-lime-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-lime-600 text-3xl font-bold mb-4">
              <PiPlantFill />
              <span className="text-gray-800">Flora Form</span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Bringing nature home, one plant at a time. Expert care for your green companions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-800 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-lime-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-lime-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-lime-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-800 mb-6 uppercase tracking-wider text-sm">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-400">
              <a href="#" className="hover:text-lime-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-lime-500 transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-lime-500 transition-colors"><FaPinterest /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          © 2026 Flora Form. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;