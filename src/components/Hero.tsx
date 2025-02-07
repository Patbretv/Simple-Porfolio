import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.span 
            className="inline-block text-primary-400 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Willkommen in meinem Portfolio
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hallo, ich bin <span className="text-primary-400">Patbre</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            FiveM Developer und FiveM Mapper
          </p>
          <div className="space-x-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block bg-dark-700 text-primary-400 px-8 py-4 rounded-lg hover:bg-dark-600 transition-all duration-300 cursor-pointer border border-primary-500/20 hover:border-primary-500/40"
            >
              Projekte ansehen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;