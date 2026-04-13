import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  FaReact, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaMicrosoft,
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaClock,
  FaLinkedin,
  FaJira,
  FaCloud,
  FaCode
} from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const certifications = [
  { 
    title: "Advanced React Development", 
    issuer: "Meta", 
    year: "2024", 
    status: "completed",
    icon: FaReact,
    color: "#61DAFB",
    gradient: "from-cyan-400 to-blue-500",
    description: "Advanced hooks, patterns, and performance optimization",
    link: "#"
  },
  { 
    title: "Workplace Health and Safety Awareness", 
    issuer: "Ontario", 
    year: "2024", 
    status: "completed",
    icon: FaCertificate,
    color: "#10B981",
    gradient: "from-emerald-400 to-teal-500",
    description: "Workplace safety regulations and compliance",
    link: "#"
  },
  { 
    title: "Python for Data Science, AI & Development", 
    issuer: "IBM", 
    year: "2024", 
    status: "completed",
    icon: FaPython,
    color: "#3776AB",
    gradient: "from-yellow-400 to-blue-500",
    description: "Data analysis, ML fundamentals, and AI integration",
    link: "#"
  },
  { 
    title: "Azure DevOps", 
    issuer: "LinkedIn", 
    year: "2025", 
    status: "completed",
    icon: FaMicrosoft,
    color: "#0078D4",
    gradient: "from-blue-400 to-cyan-500",
    description: "CI/CD pipelines, cloud deployment, and automation",
    link: "#"
  },
  { 
    title: "Jira", 
    issuer: "LinkedIn", 
    year: "2025", 
    status: "completed",
    icon: FaJira,
    color: "#0052CC",
    gradient: "from-blue-600 to-indigo-500",
    description: "Project management and agile workflow mastery",
    link: "#"
  },
  { 
    title: "Machine Learning with Python", 
    issuer: "FreeCodeCamp", 
    year: "2025", 
    status: "in-progress",
    icon: FaCode,
    color: "#3776AB",
    gradient: "from-yellow-400 to-blue-500",
    description: "TensorFlow, neural networks, and deep learning",
    link: "#",
    progress: 65
  },
  { 
    title: "Docker Foundations Professional", 
    issuer: "LinkedIn", 
    year: "2025", 
    status: "completed",
    icon: FaDocker,
    color: "#2496ED",
    gradient: "from-blue-400 to-cyan-500",
    description: "Containerization, orchestration, and microservices",
    link: "#"
  },
  { 
    title: "Time Management Essentials", 
    issuer: "LinkedIn", 
    year: "2025", 
    status: "completed",
    icon: FaLinkedin,
    color: "#0A66C2",
    gradient: "from-blue-500 to-purple-500",
    description: "Productivity frameworks and prioritization",
    link: "#"
  },
  { 
    title: "AWS Cloud Practitioner", 
    issuer: "AWS Skill Builder", 
    year: "2025", 
    status: "completed",
    icon: FaAws,
    color: "#FF9900",
    gradient: "from-orange-400 to-yellow-500",
    description: "Cloud fundamentals and AWS core services",
    link: "#"
  },
  { 
    title: "AWS Certified Machine Learning - Specialty", 
    issuer: "AWS Skill Builder", 
    year: "2026", 
    status: "in-progress",
    icon: FaCloud,
    color: "#FF9900",
    gradient: "from-orange-500 to-red-500",
    description: "Advanced ML on AWS, SageMaker, and deployment",
    link: "#",
    progress: 30
  }
];

// 3D Tilt Card Component
function CertificationCard({ cert, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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

  const Icon = cert.icon;
  const isCompleted = cert.status === 'completed';

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { y: 60, opacity: 0, scale: 0.9 },
        visible: { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
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
        className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500`}
        animate={isHovered ? { opacity: 0.6 } : { opacity: 0 }}
      />
      
      {/* Card */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 overflow-hidden h-full flex flex-col">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${cert.color}20, transparent)` }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(${cert.color} 1px, transparent 1px), linear-gradient(90deg, ${cert.color} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

        {/* Top row: Icon and Status */}
        <div className="flex justify-between items-start mb-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} p-0.5`}>
              <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                <Icon className="w-7 h-7" style={{ color: cert.color }} />
              </div>
            </div>
            
            {/* Pulse ring for completed */}
            {isCompleted && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ border: `2px solid ${cert.color}` }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>

          <div className="flex flex-col items-end gap-2">
            <motion.div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                isCompleted 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {isCompleted ? <FaCheckCircle className="w-3 h-3" /> : <FaClock className="w-3 h-3" />}
              <span className="uppercase tracking-wider">{cert.status}</span>
            </motion.div>
            
            <span className="text-cyan-400 font-mono text-sm font-bold">{cert.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
            {cert.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
            {cert.description}
          </p>

          {/* Progress bar for in-progress */}
          {!isCompleted && cert.progress && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{cert.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${cert.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cert.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          )}

          {/* Footer: Issuer and Link */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {cert.issuer}
            </span>
            
            <motion.a
              href={cert.link}
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              whileHover={{ x: 3 }}
            >
              <span>View</span>
              <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Hover corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${cert.gradient} opacity-20`} 
               style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

const Certifications = () => {
  const completedCount = certifications.filter(c => c.status === 'completed').length;
  const inProgressCount = certifications.filter(c => c.status === 'in-progress').length;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, 30, 0]
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
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaCertificate className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">Professional Development</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Continuous learning and professional credentials that validate expertise in modern technologies
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-emerald-400">{completedCount}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Completed</div>
            </motion.div>
            <div className="w-px bg-white/10" />
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-amber-400">{inProgressCount}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">In Progress</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div 
          className="flex justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {['All', 'Completed', 'In Progress'].map((filter, i) => (
            <motion.button
              key={filter}
              className="px-6 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4">Want to see more credentials?</p>
          <motion.a
            href="https://linkedin.com/in/immanuel-joy-178b66294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" initial={{ x: '100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
            <FaLinkedin className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View LinkedIn Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;