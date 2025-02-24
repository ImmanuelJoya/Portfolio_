import { motion } from 'framer-motion';
import React from 'react';

// Certifications data
const certifications = [
  {
    title: "Advanced React",
    issuer: "Meta",
    description: "Mastered advanced React concepts including hooks, state management, and performance optimization.",
  },
  {
    title: "Python for Data Science and AI Development",
    issuer: "IBM",
    description: "Learned Python fundamentals, data analysis, and AI development techniques.",
  },
  {
    title: "Jira",
    issuer: "LinkedIn",
    description: "Gained expertise in project management and workflow optimization using Jira.",
  },
  {
    title: "Azure DevOps for Beginners",
    issuer: "LinkedIn",
    description: "Explored DevOps practices and CI/CD pipelines using Azure DevOps.",
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Certifications = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-30 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Issued by <span className="text-cyan-400">{cert.issuer}</span>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;