import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' }
  },
};

const Certifications = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-20">
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Custom Certificate Icon */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-4 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Professional certifications that validate my expertise and commitment to continuous learning
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Certificate badge */}
                <motion.div
                  className="flex justify-center mb-6"
                  variants={iconVariants}
                >
                  <div className="relative p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    {/* Custom badge icon */}
                    <div className="w-8 h-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
                      <div className="absolute inset-1 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Floating sparkles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300 min-h-[3rem] flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {cert.title}
                </motion.h3>

                {/* Issuer */}
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
                    <p className="text-cyan-400 font-medium text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="flex-1 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {cert.description}
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-full border border-gray-700/40">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-gray-400 text-sm font-medium">Certified & Verified Skills</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;