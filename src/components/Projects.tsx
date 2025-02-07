import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'FiveM Mappings',
      description: 'FiveM Vinewood-Schilder mit Text/Logos/Animationen',  
      image: '/vinewood.png',
      tags: ['Blender', 'Codewalker'],
    },
    {
      title: 'FiveM Scripts',
      description: 'Wenn Sie ein Hud oder ein anderes Skript für Ihren FiveM-Server benötigen, können Sie mich gerne kontaktieren.',
      image: '/hud.png',
      tags: ['Lua', 'Js', 'CSS'],
    },
    {
      title: 'Discord Bots',
      description: 'Ticket-Bots, Moderations-Bots und viele mehr.',
      image: '/discordbot.png',
      tags: ['Discord.js', 'Node.js', 'TypeScript'],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <span className="text-primary-600 font-medium">Portfolio</span>
            <h2 className="text-4xl font-bold text-neutral-850">
              Fivem Projekte
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-600/10 transition-opacity duration-300 hover:opacity-0" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-850 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects