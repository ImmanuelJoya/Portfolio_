import { motion } from 'framer-motion';

const certifications = [
  { title: "Advanced React Development", issuer: "Meta", year: "2024", status: "completed" },
  { title: "Workplace Health and Safety Awareness", issuer: "Ontario", year: "2024", status: "completed" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", year: "2024", status: "completed" },
  { title: "Azure DevOps", issuer: "LinkedIn", year: "2025", status: "completed" },
  { title: "Jira", issuer: "LinkedIn", year: "2025", status: "completed" },
  { title: "Machine Learning with Python", issuer: "FreeCodeCamp", year: "2025", status: "in-progress" },
  { title: "Docker Foundations Professional", issuer: "LinkedIn", year: "2025", status: "completed" },
  { title: "Time Management Essentials", issuer: "LinkedIn", year: "2025", status: "completed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const Certifications = () => {
  return (
    <section className="relative min-h-screen bg-gray-950 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-mono">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(0deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px),
                         repeating-linear-gradient(90deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px)`,
        opacity: 0.2
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-2 tracking-tight text-white">CERTIFICATIONS</h2>
          <p className="text-sm text-gray-500 max-w-md">Professional credentials validating expertise and continuous learning</p>
        </motion.div>

        {/* Brutalist Grid - Dark Theme */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gray-900 p-6 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex flex-col h-full"
            >
              {/* Status indicator */}
              <div className={`absolute top-3 left-3 w-2 h-2 ${cert.status === 'completed' ? 'bg-cyan-400' : 'bg-amber-400'} rounded-full`} />
              
              {/* Content */}
              <div className="pt-2 flex-1 flex flex-col">
                <h3 className="text-base font-bold mb-3 leading-snug text-white flex-1">{cert.title}</h3>
                <div className="flex items-end justify-between text-xs text-gray-400">
                  <span className="uppercase tracking-wide">{cert.issuer}</span>
                  <span className="font-mono text-cyan-400">{cert.year}</span>
                </div>
              </div>

              {/* Hover outline */}
              <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;