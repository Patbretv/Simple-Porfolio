import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'CFX Lua', 'HTML', 'SASS/CSS', 'FiveM Modelling/Maps', 'Vue.js', 'Alpine.js', 'Discord.js'
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <span className="text-primary-600 font-medium">Über Mich</span>
            <h2 className="text-4xl font-bold text-neutral-850">
              FiveM Frontends
              <span className="text-primary-600"> und Backends</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Seit Rund 3 Jahren bin ich in der FiveM Entwicklung tätig. Ich habe bereits viele Projekte umgesetzt und konnte mir ein breites Wissen aneignen. Discord Bots, Frontends, Backends, Maps und vieles mehr.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-850">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-50 text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About