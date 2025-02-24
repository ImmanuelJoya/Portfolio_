import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Tesla Clone",
    description: "A responsive Tesla website clone built with JavaScript and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web",
  },
  {
    id: 2,
    title: "Typing Practice",
    description: "A responsive typing practice website built with React+Vite and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["React+Vite", "Tailwind", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web",
  },
  {
    id: 3,
    title: "Movie App",
    description: "A responsive movie website built with jQuery, AJAX, and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["jQuery", "HTML", "Bootstrap"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web",
  },
  {
    id: 4,
    title: "Responsive Website",
    description: "A responsive website built with HTML and Bootstrap.",
    image: "/tesla-clone.jpg",
    tags: ["HTML", "Bootstrap"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "design",
  },
  {
    id: 5,
    title: "WWF",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: "/tesla-clone.jpg",
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "design",
  },
];

const categories = ["all", "web", "design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Holographic background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-30 pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-cyan-300 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-xl overflow-hidden bg-gray-800/40 backdrop-blur-md border border-gray-700/50 group hover:border-cyan-500/50 transition-all duration-300"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  {/* Neon overlay with glitch effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    animate={
                      hoveredProject === project.id
                        ? { x: [0, 5, -5, 0], transition: { duration: 0.5, repeat: Infinity } }
                        : { x: 0 }
                    }
                  />
                  <motion.div
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/70">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400 border border-cyan-500/30 group-hover:bg-gray-600/70 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Custom CSS for subtle pulse animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;