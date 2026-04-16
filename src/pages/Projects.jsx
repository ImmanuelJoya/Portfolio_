import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useRef } from 'react';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaReact, 
  FaPython, 
  FaDocker,
  FaCode,
  FaLayerGroup,
  FaPalette,
  FaGlobe,
  FaGamepad,
  FaMusic,
  FaBriefcase
} from 'react-icons/fa';
import { 
  SiVite, 
  SiTailwindcss, 
  SiTypescript, 
  SiFastapi, 
  SiExpress,
  SiJquery,
  SiBootstrap,
  SiAxios,
  SiPostgresql,
  SiFirebase,
  SiOpenai,
  SiJavascript,
  SiHtml5, 
} from 'react-icons/si';
import {FaCss3} from 'react-icons/fa';

// Import all images
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
import c4 from '../assets/images/c4.png';
import immg from '../assets/images/immg.png';

// Tech icon mapping
const techIcons = {
  'React': FaReact,
  'Vue': FaCode,
  'Python': FaPython,
  'Docker': FaDocker,
  'FastAPI': SiFastapi,
  'Express': SiExpress,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind': SiTailwindcss,
  'Vite': SiVite,
  'jQuery': SiJquery,
  'Bootstrap': SiBootstrap,
  'Axios': SiAxios,
  'Neon-Postgress': SiPostgresql,
  'Firebase': SiFirebase,
  'DeepSeek': SiOpenai,
  'HTML': SiHtml5,
  'CSS': FaCss3 ,
  'Pillow': FaCode,
  'Tkinter': FaCode,
  'yt-dlp': FaMusic,
  'FFmpeg': FaMusic,
  'Freedoom WAD': FaGamepad,
  'Chocolate Doom': FaGamepad,
};

// Category icons
const categoryIcons = {
  all: FaLayerGroup,
  web: FaGlobe,
  design: FaPalette,
  game: FaGamepad,
  tool: FaBriefcase
};

const projects = [
  {
    id: 1,
    title: "ChatBott",
    description: "AI-powered chatbot using DeepSeek R1 API, with Express backend and Vue frontend. Features secure authentication and real-time responses.",
    image: ChatBottImg,
    tags: ["Vue", "Express", "DeepSeek", "Axios", "Tailwind", "Vite", "Neon-Postgress"],
    github: "https://github.com/ImmanuelJoya/ChatBottUi",
    live: "https://chatbott-ypqs.onrender.com",
    category: "web",
    featured: true,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    title: "YouTubeDownloader",
    description: "A python windows application for downloading mp3 and mp4 from YouTube and YouTube music. Light weight coupled with Vue friendly UI.",
    image: immg,
    tags: ["Python", "Pillow", "Tkinter", "yt-dlp", "FFmpeg"],
    github: "https://github.com/ImmanuelJoya/YoutubeDownloader.git",
    live: "https://github.com/ImmanuelJoya/YoutubeDownloader/releases/tag/v1.0.0",
    category: "tool",
    gradient: "from-red-400 to-pink-500"
  },
  {
    id: 3,
    title: "Connect4",
    description: "Connect 4 game built with React and Tailwind CSS. Features two-player mode, responsive design, and smooth animations.",
    image: c4,
    tags: ["React", "Typescript", "Tailwind", "Vite"],
    github: "https://github.com/ImmanuelJoya/Connect4",
    live: "https://connect4-lovat-seven.vercel.app",
    category: "game",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 4,
    title: "Doom",
    description: "This project runs Freedoom (a free, open-source Doom-compatible game) in your browser using Chocolate Doom compiled to WebAssembly.",
    image: doom,
    tags: ["Docker", "Freedoom WAD", "Chocolate Doom"],
    github: "https://github.com/ImmanuelJoya/BackToRetro",
    live: "https://backtoretro.onrender.com",
    category: "game",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: 5,
    title: "CosmicUpdate",
    description: "A responsive news website built with React, FastAPI, and TypeScript that fetches and displays the latest space-related news using NASA's official API.",
    image: cosmicUpdate,
    tags: ["React", "FastAPI", "TypeScript", "Axios"],
    github: "https://github.com/ImmanuelJoya/CosmicUpdates",
    live: "https://cosmic-updates.vercel.app",
    category: "web",
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    id: 6,
    title: "Tesla Clone",
    description: "A responsive Tesla website clone built with JavaScript and modern web technologies.",
    image: Tesla,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "design",
    gradient: "from-red-500 to-rose-500"
  },
  {
    id: 7,
    title: "Typing Practice",
    description: "A responsive typing practice website built with React+Vite and modern web technologies.",
    image: TP,
    tags: ["React", "Tailwind", "CSS", "Vite"],
    github: "https://github.com/ImmanuelJoya/type_Practice",
    live: "https://typepractice.netlify.app/",
    category: "web",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    id: 8,
    title: "Movie App",
    description: "A responsive movie website built with jQuery, AJAX, and modern web technologies.",
    image: MINFO,
    tags: ["jQuery", "HTML", "Bootstrap", "AJAX", "Axios"],
    github: "https://github.com/ImmanuelJoya/MovieINFO",
    live: "https://movieiinfo.netlify.app",
    category: "web",
    gradient: "from-blue-400 to-violet-500"
  },
  {
    id: 9,
    title: "Responsive Website",
    description: "A responsive website built with HTML and Bootstrap.",
    image: RP,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/ResponsivePage",
    live: "https://immanueljoya.github.io/ResponsivePage/",
    category: "design",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    id: 10,
    title: "HyperTrophyGuide",
    description: "A responsive website that provides workout plans built with React + Vite and FastAPI backend.",
    image: HG,
    tags: ["React", "Vite", "FastAPI", "CSS"],
    github: "https://github.com/ImmanuelJoya/HyperTrophyGuide",
    live: "https://hyper-trophy-guide.vercel.app",
    category: "web",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 11,
    title: "TaskManager",
    description: "A responsive website created with FastAPI and Python for managing tasks.",
    image: TaskM,
    tags: ["React", "Tailwind", "CSS", "FastAPI", "Python"],
    github: "https://github.com/ImmanuelJoya/TaskManager",
    live: "https://superb-brigadeiros-884056.netlify.app",
    category: "web",
    gradient: "from-green-400 to-teal-500"
  },
  {
    id: 12,
    title: "WWF",
    description: "A responsive website built with HTML, Bootstrap, and CSS.",
    image: WWF,
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/WWF",
    live: "https://immanueljoya.github.io/WWF/",
    category: "design",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    id: 13,
    title: "FetchMusic",
    description: "Download YouTube Music with shared link. React + FastAPI stack with responsive Tailwind styling.",
    image: immg,
    tags: ["React", "Tailwind", "FastAPI", "Python", "Axios"],
    github: "https://github.com/ImmanuelJoya/FetchMusic",
    live: "https://fetch-music.vercel.app",
    category: "tool",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    id: 14,  
    title: "JobMarket",
    description: "A simple full-stack web app built with React + Vite (TypeScript), Tailwind CSS, and an Express.js backend that fetches and displays the latest remote jobs using the Jobicy API.",
    image: immg,
    tags: ["React", "Tailwind", "Express", "TypeScript", "Firebase"],
    github: "https://github.com/ImmanuelJoya/JobMarket",
    live: "/",
    category: "web",
    gradient: "from-cyan-400 to-blue-600"
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: FaLayerGroup },
  { id: "web", label: "Web Apps", icon: FaGlobe },
  { id: "design", label: "Design", icon: FaPalette },
  { id: "game", label: "Games", icon: FaGamepad },
  { id: "tool", label: "Tools", icon: FaBriefcase }
];

// 3D Tilt Project Card
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateXSpring.get()}deg) rotateY(${rotateYSpring.get()}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.1s ease-out'
      }}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`}
      />
      
      {/* Card */}
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <motion.div 
              className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ★ Featured
            </motion.div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {!imageError ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <FaCode className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                <span className="text-gray-500 text-sm">{project.title}</span>
              </div>
            </div>
          )}

          {/* Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0.9 : 0.3 }}
            transition={{ duration: 0.3 }}
          />

          {/* Action buttons */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500 rounded-full text-gray-900 hover:bg-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Category icon */}
          <div className="absolute top-4 right-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} opacity-80`}>
              {(() => {
                const Icon = categoryIcons[project.category] || FaCode;
                return <Icon className="w-4 h-4 text-white" />;
              })()}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => {
              const Icon = techIcons[tag] || FaCode;
              return (
                <motion.span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-cyan-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6,182,212,0.1)' }}
                >
                  <Icon className="w-3 h-3" />
                  {tag}
                </motion.span>
              );
            })}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs text-gray-500">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* View project link */}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            whileHover={{ x: 3 }}
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const projectCount = filteredProjects.length;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaCode className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work across web development, design, and software engineering
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <span className="text-xs">{projectCount} projects</span>
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex justify-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      layoutId="activeCategory"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/30 transition-colors" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-4 px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-full hover:bg-cyan-500/30 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/ImmanuelJoya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-white font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FaGithub className="w-6 h-6 relative z-10" />
            <span className="relative z-10">View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;