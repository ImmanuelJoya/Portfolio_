import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ChatBottImg from '../assets/images/ChatBott.png';
import cosmicUpdate from '../assets/images/CU.png';
import HG from '../assets/images/HG.png';
import MINFO from '../assets/images/MovieINFO.png';
import RP from '../assets/images/RP.png';
import TaskM from '../assets/images/TaskM.png';
import Tesla from '../assets/images/Tesla.png';
import TP from '../assets/images/TP.png';
import WWF from '../assets/images/WWF.png';


const projects = [

  {
    id: 9,
    title: "ChatBott",
    description: "A Chat bot Website with DeepSeek R1 API, Pinia and Express for backend and Vue and Tailwind for frontend.",
    image: ChatBottImg,
    tags: ["Vue", "tailwind", "CSS", "Express", "TypeScript", "Neon postgres", "Pinia"],
    github: "https://github.com/ImmanuelJoya/ChatBottUi",
    live: "https://chat-bott-ui-3o63.vercel.app",
    category: "web",
  },
  {
    id: 10,
    title: "CosmicUpdate",
    description: "A responsive website built with React and FastApi. Download YouTube Music with shared link.",
    image: { cosmicUpdate },
    tags: ["Vue", "CSS", "Axios", "TypeScript"],
    github: "https://github.com/ImmanuelJoya/CosmicUpdates",
    live: "https://cosmic-updates.vercel.app",
    category: "web",
  },
  {
    id: 1,
    title: "Tesla Clone",
    description: "A responsive Tesla website clone built with JavaScript and modern web technologies.",
    image: Tesla,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web",
  },
  {
    id: 2,
    title: "Typing Practice",
    description: "A responsive typing practice website built with React+Vite and modern web technologies.",
    image: TP,
    tags: ["React+Vite", "Tailwind", "CSS"],
    github: "https://github.com/ImmanuelJoya/type_Practice",
    live: "https://typepractice.netlify.app/",
    category: "web",
  },
  {
    id: 3,
    title: "Movie App",
    description: "A responsive movie website built with jQuery, AJAX, and modern web technologies.",
    image: MINFO,
    tags: ["jQuery", "HTML", "Bootstrap", "AJAX", "Axios"],
    github: "https://github.com/ImmanuelJoya/MovieINFO",
    live: "movieiinfo.netlify.app",
    category: "web",
  },
  {
    id: 4,
    title: "Responsive Website",
    description: "A responsive website built with HTML and Bootstrap.",
    image: RP,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/ResponsivePage?tab=readme-ov-file",
    live: "https://immanueljoya.github.io/ResponsivePage/",
    category: "design",
  },
  {
    id: 5,
    title: "HyperTrophyGuide",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: HG,
    tags: ["React + Vite", "fastAPI", "CSS"],
    github: "https://github.com/ImmanuelJoya/HyperTrophyGuide",
    live: "https://hyper-trophy-guide.vercel.app",
    category: "web",
  },
  {
    id: 6,
    title: "TaskManager",
    description: "A responsive website created with fastApi and python and tailwind, react and css for managing tasks.",
    image: TaskM,
    tags: ["React", "tailwind", "CSS", "FastAPI", "Python"],
    github: "https://github.com/ImmanuelJoya/TaskManager",
    live: "superb-brigadeiros-884056.netlify.app",
    category: "web",
  },
  {
    id: 7,
    title: "WWF",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: WWF,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/WWF",
    live: "https://immanueljoya.github.io/WWF/",
    category: "design",
  },
  {
    id: 8,
    title: "FetchMusic",
    description: "A responsive website built with React and FastApi. Download YouTube Music with shared link.",
    image: "/tesla-clone.jpg",
    tags: ["React", "tailwind", "CSS", "FastAPI", "Python", "Axios"],
    github: "https://github.com/ImmanuelJoya/FetchMusic",
    live: "https://fetch-music.vercel.app",
    category: "web",
  }
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
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${activeCategory === category
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
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
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

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="https://github.com/ImmanuelJoya"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300"
        >
          <FaGithub className="mr-2" size={18} />
          View More on GitHub
        </motion.a>
      </motion.div>


      {/* Custom CSS for subtle pulse animation */}
      <style >{`
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