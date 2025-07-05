import {
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFastapi, SiFigma, SiJquery, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skills data organized like the reference image
const skills = [
  {
    id: 'frontend',
    category: "Frontend Mastery",
    icon: "🎨",
    items: [
      { name: "HTML5", icon: <FaHtml5 style={{ color: "orange" }} />, color: "from-orange-400 to-red-500" },
      { name: "CSS3", icon: <FaCss3Alt style={{ color: "blue" }} />, color: "from-blue-400 to-cyan-400" },
      { name: "JavaScript", icon: <IoLogoJavascript style={{ color: "gold" }} />, color: "from-yellow-400 to-orange-400" },
      { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178c6" }} />, color: "from-blue-500 to-indigo-500" },
      { name: "React", icon: <FaReact style={{ color: "#61DBFB" }} />, color: "from-cyan-400 to-blue-400" },
      { name: "Vue.js", icon: <FaVuejs style={{ color: "#42b883" }} />, color: "from-green-400 to-emerald-400" },
      { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#38bdf8" }} />, color: "from-teal-400 to-cyan-400" },
      { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} />, color: "from-purple-400 to-pink-400" },
      { name: "jQuery", icon: <SiJquery style={{ color: "#0769ad" }} />, color: "from-indigo-400 to-purple-400" },
      { name: "Figma", icon: <SiFigma style={{ color: "#F24E1E" }} />, color: "from-pink-400 to-rose-400" },
    ]
  },
  {
    id: 'backend',
    category: "Backend & Database",
    icon: "⚡",
    items: [
      { name: "Node.js", icon: <FaNode style={{ color: "green" }} />, color: "from-green-400 to-emerald-400" },
      { name: "Express", icon: <SiExpress style={{ color: "gray" }} />, color: "from-gray-400 to-slate-400" },
      { name: "Python", icon: <FaPython style={{ color: "yellow" }} />, color: "from-blue-400 to-green-400" },
      { name: "FastAPI", icon: <SiFastapi style={{ color: "green" }} />, color: "from-teal-400 to-green-400" },
      { name: "PHP", icon: <FaPhp style={{ color: "gray" }} />, color: "from-purple-400 to-indigo-400" },
      { name: "Go", icon: <FaGolang style={{ color: "cyan" }} />, color: "from-cyan-400 to-blue-400" },
      { name: "PostgreSQL", icon: <DiPostgresql style={{ color: "white" }} />, color: "from-blue-400 to-indigo-400" },
      { name: "MongoDB", icon: "🍃", color: "from-green-400 to-teal-400" },
      { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-400" }
    ]
  },
  {
    id: 'tools',
    category: "Tools & Platforms",
    icon: "🔧",
    items: [
      { name: "VS Code", icon: <VscVscode style={{ color: "blue" }} />, color: "from-blue-400 to-cyan-400" },
      { name: "Git", icon: <FaGit style={{ color: "gray" }} />, color: "from-orange-400 to-red-400" },
      { name: "GitHub", icon: <FaGithub style={{ color: "white" }} />, color: "from-gray-400 to-slate-400" },
      { name: "Docker", icon: <FaDocker style={{ color: "blue" }} />, color: "from-blue-400 to-indigo-400" },
      { name: "AWS", icon: <FaAws style={{ color: "orange" }} />, color: "from-yellow-400 to-orange-400" },
      { name: "Linux", icon: <FcLinux />, color: "from-gray-400 to-slate-400" },
      { name: "Postman", icon: <SiPostman style={{ color: "orange" }} />, color: "from-orange-400 to-red-400" },
    ]
  }
];

// Skill icon component
const SkillIcon = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Main skill container */}
      <div className={`
          relative w-16 h-16 rounded-2xl bg-gray-800/60 backdrop-blur-sm
          border border-gray-700/50 flex items-center justify-center
          transition-all duration-300 cursor-pointer
          hover:scale-110 hover:bg-gray-700/60 hover:border-gray-600/70
          hover:shadow-xl hover:shadow-black/25
          ${isHovered ? 'transform rotate-3' : ''}
        `}>
        {/* Skill icon */}
        <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {skill.icon}
        </div>

        {/* Subtle glow effect */}
        <div className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} 
            opacity-0 group-hover:opacity-10 transition-opacity duration-300
          `} />

        {/* Subtle outer glow */}
        <div className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} 
            opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300
          `} />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg border border-gray-700 shadow-lg">
            {skill.name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Category section component
const CategorySection = ({ category, index }) => {
  return (
    <div
      className="space-y-6 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-2xl">{category.icon}</div>
        <h3 className="text-white font-semibold text-xl tracking-wide">
          {category.category}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {category.items.map((skill, skillIndex) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>
    </div>
  );
};

// Floating background elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />

      {/* Floating dots */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-500/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

// Main component
const EnhancedSkillsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black relative overflow-hidden">
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide">Tech Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r 
              from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies I work with to build exceptional digital experiences
          </p>
        </div>

        {/* Skills sections */}
        <div className="space-y-16">
          {skills.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
        `}</style>
    </section>
  );
};

export default EnhancedSkillsSection;