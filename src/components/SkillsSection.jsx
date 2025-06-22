import {
  Code,
  Container,
  Cpu,
  Database,
  Figma,
  GitBranch,
  Globe,
  Monitor,
  Palette,
  Send,
  Server,
  Terminal
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Enhanced skills data with icons and mastery levels
const skills = [
  {
    category: "Frontend Mastery",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    glowColor: "purple-500",
    items: [
      { name: "React/Vue", icon: <Code className="w-5 h-5" />, mastery: "expert" },
      { name: "JavaScript", icon: <Globe className="w-5 h-5" />, mastery: "expert" },
      { name: "HTML/CSS", icon: <Palette className="w-5 h-5" />, mastery: "master" },
      { name: "Tailwind/Bootstrap", icon: <Palette className="w-5 h-5" />, mastery: "expert" },
      { name: "jQuery", icon: <Code className="w-5 h-5" />, mastery: "advanced" },
    ],
  },
  {
    category: "Backend Power",
    icon: <Server className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    glowColor: "blue-500",
    items: [
      { name: "FastAPI", icon: <Server className="w-5 h-5" />, mastery: "intermediate" },
      { name: "Python", icon: <Cpu className="w-5 h-5" />, mastery: "advanced" },
      { name: "PHP", icon: <Server className="w-5 h-5" />, mastery: "advanced" },
      { name: "Go", icon: <Cpu className="w-5 h-5" />, mastery: "intermediate" },
      { name: "SQL/Postgres", icon: <Database className="w-5 h-5" />, mastery: "intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    glowColor: "green-500",
    items: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" />, mastery: "master" },
      { name: "Docker", icon: <Container className="w-5 h-5" />, mastery: "intermediate" },
      { name: "Figma", icon: <Figma className="w-5 h-5" />, mastery: "expert" },
      { name: "Postman", icon: <Send className="w-5 h-5" />, mastery: "expert" },
      { name: "VS Code", icon: <Terminal className="w-5 h-5" />, mastery: "master" },
      { name: "Linux", icon: <Terminal className="w-5 h-5" />, mastery: "intermediate" },
    ],
  },
];

const masteryLevels = {
  beginner: {
    label: "Learning",
    color: "from-gray-400 to-gray-600",
    glow: "gray-400",
    intensity: 1
  },
  intermediate: {
    label: "Proficient",
    color: "from-yellow-400 to-orange-500",
    glow: "yellow-400",
    intensity: 2
  },
  advanced: {
    label: "Advanced",
    color: "from-blue-400 to-purple-500",
    glow: "blue-400",
    intensity: 3
  },
  expert: {
    label: "Expert",
    color: "from-green-400 to-emerald-500",
    glow: "green-400",
    intensity: 4
  },
  master: {
    label: "Master",
    color: "from-pink-400 to-red-500",
    glow: "pink-400",
    intensity: 5
  }
};

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${particle.speed + 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced skill item component
const SkillItem = ({ skill, index, categoryColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mastery = masteryLevels[skill.mastery];

  return (
    <div
      className={`group relative p-4 rounded-xl bg-gray-800/40 backdrop-blur-md border border-gray-700/50 
        hover:border-${mastery.glow}/50 transition-all duration-500 cursor-pointer transform hover:scale-105
        hover:shadow-2xl hover:shadow-${mastery.glow}/25`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${mastery.color} opacity-0 
        group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />

      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${mastery.color} opacity-0 
        group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-xl`} />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${mastery.color} 
            shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <div className="text-white">
              {skill.icon}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium group-hover:text-transparent 
              group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 
              group-hover:bg-clip-text transition-all duration-300">
              {skill.name}
            </h4>
            <p className={`text-sm text-gray-400 group-hover:text-${mastery.glow} 
              transition-colors duration-300`}>
              {mastery.label}
            </p>
          </div>
        </div>

        {/* Mastery indicator - animated orbs */}
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i < mastery.intensity
                ? `bg-gradient-to-r ${mastery.color} shadow-lg shadow-${mastery.glow}/50`
                : 'bg-gray-600'
                } ${isHovered && i < mastery.intensity ? 'animate-pulse scale-125' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Ripple effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl">
          <div className={`absolute inset-2 rounded-lg bg-gradient-to-br ${mastery.color} 
            opacity-20 animate-ping`} />
        </div>
      )}
    </div>
  );
};

// Main skills section component
const EnhancedSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(120,_119,_198,_0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,_119,_198,_0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(99,_102,_241,_0.2),_transparent_50%)]" />
      </div>

      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r 
            from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent
            animate-pulse">
            Skills Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and creative mastery
          </p>

          {/* Animated underline */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 p-2 bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50">
            {skills.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.glowColor}/25`
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                {category.icon}
                <span className="font-medium">{category.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.category}
              className={`space-y-4 transition-all duration-500 ${activeCategory === categoryIndex
                ? 'opacity-100 scale-100'
                : 'opacity-60 scale-95 blur-sm'
                }`}
            >
              {/* Category header */}
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${skillCategory.color} 
                shadow-2xl shadow-${skillCategory.glowColor}/25 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 flex items-center space-x-3">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Animated particles in header */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" />
                <div className="absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: '1s' }} />
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {skillCategory.items.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryColor={skillCategory.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;