import React from 'react';
import { FaGithub, FaDiscord, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-850 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">Patbre</h3>
            <p className="text-gray-400 mt-2">FiveM Developer</p>
          </div>
          <div className="flex space-x-8">
            <a
              href="https://github.com/Patbretv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://discord.gg/brezelservices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@patbre.ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Patbre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer