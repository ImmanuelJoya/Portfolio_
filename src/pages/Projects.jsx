import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Import all images consistently
import ChatBottImg from '../assets/images/ChatBott.png';
import cosmicUpdate from '../assets/images/CU.png';
import HG from '../assets/images/HG.png';
import MINFO from '../assets/images/MovieINFO.png';
import RP from '../assets/images/RP.png';
import TaskM from '../assets/images/TaskM.png';
import Tesla from '../assets/images/Tesla.png';
import TP from '../assets/images/TP.png';
import WWF from '../assets/images/WWF.png';
import doom from '../assets/images/doom.png';

// Cleaned and consistent project data
const projects = [
  {
    id: 1,
    title: "ChatBott",
    description: "AI-powered chatbot using DeepSeek R1 API, with Express backend and Vue frontend. Features secure authentication and real-time responses.",
    image: ChatBottImg,
    tags: ["Vue", "Express", "DeepSeek", "Axios", "Tailwind","Vite", "Neon-Postgress"],
    github: "https://github.com/ImmanuelJoya/ChatBottUi",
    live: "https://chatbott-ypqs.onrender.com",
    category: "web",
  },
  { id: 2,
    title: "Doom",
    description: "This project runs Freedoom (a free, open-source Doom-compatible game) in your browser using Chocolate Doom compiled to WebAssembly.",
    image: doom,
    tags: ["Docker","Freedoom WAD ", "Chocolate Doom"],
    github: "https://github.com/ImmanuelJoya/BackToRetro",
    live: "https://backtoretro.onrender.com",
    category: "web",},
  {
    id: 3,
    title: "CosmicUpdate",
    description: "YouTube Music downloader with React frontend and FastAPI backend. Built with modern async patterns and responsive design.",
    image: cosmicUpdate,
    tags: ["React", "FastAPI", "TypeScript", "Axios"],
    github: "https://github.com/ImmanuelJoya/CosmicUpdates",
    live: "https://cosmic-updates.vercel.app",
    category: "web",
  },
  {
    id: 4,
    title: "Tesla Clone",
    description: "A responsive Tesla website clone built with JavaScript and modern web technologies.",
    image: Tesla,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web",
  },
  {
    id: 5,
    title: "Typing Practice",
    description: "A responsive typing practice website built with React+Vite and modern web technologies.",
    image: TP,
    tags: ["React+Vite", "Tailwind", "CSS"],
    github: "https://github.com/ImmanuelJoya/type_Practice",
    live: "https://typepractice.netlify.app/",
    category: "web",
  },
  {
    id: 6,
    title: "Movie App",
    description: "A responsive movie website built with jQuery, AJAX, and modern web technologies.",
    image: MINFO,
    tags: ["jQuery", "HTML", "Bootstrap", "AJAX", "Axios"],
    github: "https://github.com/ImmanuelJoya/MovieINFO",
    live: "https://movieiinfo.netlify.app",
    category: "web",
  },
  {
    id: 7,
    title: "Responsive Website",
    description: "A responsive website built with HTML and Bootstrap.",
    image: RP,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/ResponsivePage",
    live: "https://immanueljoya.github.io/ResponsivePage/",
    category: "design",
  },
  {
    id: 8,
    title: "HyperTrophyGuide",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: HG,
    tags: ["React + Vite", "fastAPI", "CSS"],
    github: "https://github.com/ImmanuelJoya/HyperTrophyGuide",
    live: "https://hyper-trophy-guide.vercel.app",
    category: "web",
  },
  {
    id: 9,
    title: "TaskManager",
    description: "A responsive website created with FastAPI and Python for managing tasks.",
    image: TaskM,
    tags: ["React", "Tailwind", "CSS", "FastAPI", "Python"],
    github: "https://github.com/ImmanuelJoya/TaskManager",
    live: "https://superb-brigadeiros-884056.netlify.app",
    category: "web",
  },
  {
    id: 10,
    title: "WWF",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: WWF,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/WWF",
    live: "https://immanueljoya.github.io/WWF/",
    category: "design",
  },
  {
    id: 11,
    title: "FetchMusic",
    description: "Download YouTube Music with shared link. React + FastAPI stack with responsive Tailwind styling.",
    image: "/tesla-clone.jpg", // Fallback example
    tags: ["React", "Tailwind", "FastAPI", "Python", "Axios"],
    github: "https://github.com/ImmanuelJoya/FetchMusic",
    live: "https://fetch-music.vercel.app",
    category: "web",
  },
  {
    id: 12,
    title: "JobMarket",
    description: "A simple full-stack web app built with React + Vite (TypeScript), Tailwind CSS, and an Express.js backend that fetches and displays the latest remote jobs using the Jobicy API.",
    image: "/tesla-clone.jpg", // Fallback example
    tags: ["React", "Tailwind", "Express", "TypeScript", "Firebase"],
    github: "https://github.com/ImmanuelJoya/JobMarket",
    live: "/",
    category: "web",
  }
];

const categories = ["all", "web", "design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Memoized filtering for performance
  const filteredProjects = useMemo(() => 
    projects.filter(p => activeCategory === "all" ? true : p.category === activeCategory),
    [activeCategory]
  );

  // URL validation and sanitization
  const sanitizeUrl = (url) => {
    try {
      return new URL(url).href;
    } catch {
      return `https://${url}`;
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-950 text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono">
      {/* Subtle background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(0deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px),
                        Frepeating-linear-gradient(90deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px)`,
        opacity: 0.15
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">PROJECTS</h2>
          <p className="text-sm text-gray-500 mt-1">A selection of recent work</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                activeCategory === category
                  ? "bg-cyan-500 text-gray-900"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
              aria-pressed={activeCategory === category}
              aria-label={`Filter ${category} projects`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onImageError={() => setImageErrors(prev => {
                  const next = new Set(prev);
                  next.add(project.id);
                  return next;
                })}
                imageHasError={imageErrors.has(project.id)}
                sanitizeUrl={sanitizeUrl}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/ImmanuelJoya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Extracted ProjectCard Component
const ProjectCard = ({ project, isHovered, onHoverStart, onHoverEnd, onImageError, imageHasError, sanitizeUrl }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-600 transition-colors cursor-pointer"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      aria-label={`${project.title} project`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-800">
        {!imageHasError ? (
          <img
            src={project.image}
            alt={`${project.title} - ${project.description}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={onImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-700 border-2 border-dashed border-gray-600 rounded-xl w-32 h-32 flex items-center justify-center">
              <span className="text-gray-500 text-xs">No Image</span>
            </div>
          </div>
        )}

        {/* Overlay Links */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-cyan-500 text-gray-900 rounded-md hover:bg-cyan-400 transition-colors"
            aria-label={`${project.title} GitHub repository`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
          <a
            href={sanitizeUrl(project.live)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-cyan-500 text-gray-900 rounded-md hover:bg-cyan-400 transition-colors"
            aria-label={`${project.title} live demo`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 text-xs text-cyan-300 rounded border border-cyan-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;