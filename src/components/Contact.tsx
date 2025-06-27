import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <span className="text-primary-600 font-medium">Kontakt</span>
            <h2 className="text-4xl font-bold text-neutral-850">
              Lass uns zusammenarbeiten
            </h2>
          </div>
          
          <div className="max-w-xl mx-auto">
              <a
                href="https://discord.gg/precisascripts"
                className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center block"
              >
                Discord Beitreten
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
