import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Skills data remains unchanged
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind", level: 88 },
      { name: "Jquery", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: 60 },
      { name: "Python", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Go", level: 55 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
    ],
  },
];

// SkillBar component with enhanced visuals
const SkillBar = ({ name, level, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-6 group"
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2.5 overflow-hidden relative shadow-inner">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 relative"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "anticipate" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500/40 blur-md rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main SkillsSection component
const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A dynamic showcase of my technical prowess and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2, ease: "easeOut" }}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                {skillCategory.category}
              </h3>
              <div className="space-y-2">
                {skillCategory.items.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;