import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactSVG } from 'react-svg';
import { TypeAnimation } from 'react-type-animation';
import img1 from '../assets/images/img1.png';
import ppImage from '../assets/images/PP.png';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ParticlesBackground from '../components/ParticlesBackground';
import SkillsSection from '../components/SkillsSection';
import WaveBackground from '../components/WaveBackground';

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black-950 to-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background effects */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* waveBegins */}

        <WaveBackground className="absolute inset-0 z-10 relative" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-60 pointer-events-none z-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Glass overlay with enhanced effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-30" />

        {/* Floating Tech Icons - Enhanced */}
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 absolute top-12 left-4 sm:left-10 opacity-30"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="relative">
            <ReactSVG src={img1} className="drop-shadow-[0_0_20px_rgba(0,212,255,0.8)]" />
            <motion.div
              className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"
              variants={pulseVariants}
              animate="animate"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-10 h-10 sm:w-14 sm:h-14 absolute top-1/4 right-8 sm:right-16 opacity-30"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        >
          <img
            src={img1}
            alt="Tech"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,150,0.6)]"
          />
        </motion.div>

        <motion.div
          className="w-8 h-8 sm:w-12 sm:h-12 absolute bottom-20 left-8 sm:left-16 opacity-25"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1]
          }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        >
          <img
            src={img1}
            alt="Tech"
            className="w-full h-full drop-shadow-[0_0_12px_rgba(0,255,150,0.6)]"
          />
        </motion.div>

        <motion.img
          src={img1}
          alt="Tailwind"
          className="w-8 h-8 sm:w-12 sm:h-12 absolute bottom-12 right-6 sm:right-10 opacity-40"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -90, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="w-6 h-6 sm:w-8 sm:h-8 absolute top-1/3 left-1/4 opacity-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        <motion.div
          className="w-4 h-4 sm:w-6 sm:h-6 absolute bottom-1/3 right-1/4 opacity-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />




        <div className="max-w-7xl mx-auto z-40 w-full">
          <motion.div
            className="flex items-center justify-center min-h-screen py-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

              {/* Left Column - Text Content */}
              <div className="flex flex-col items-start text-left space-y-6 sm:space-y-8">
                {/* Enhanced Name moved to left */}
                <motion.h1
                  className="top-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent relative"
                  variants={childVariants}
                  transition={{ duration: 1.2 }}
                  style={{
                    filter: ""
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: []
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Hi, I'm Immanuel
                  </motion.span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-700 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </motion.h1>

                {/* Enhanced TypeAnimation */}
                <motion.div
                  className="top-16 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 relative w-full"
                  variants={childVariants}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer', 2500,
                      'UI/UX Enthusiast', 2500,
                      'Problem Solver', 2500,
                      'Creative Innovator', 2500,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                    className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 relative z-10 font-medium tracking-wide text-center sm:text-left"
                  />
                </motion.div>

                {/* Enhanced description */}
                <motion.p
                  className="top-14 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed relative max-w-2xl"
                  variants={childVariants}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/10"
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      borderColor: "rgba(255,255,255,0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative z-10 block p-4 sm:p-6">
                    I craft stunning, responsive, and user-centric web applications with cutting-edge technologies and a passion for seamless design that transforms ideas into extraordinary digital experiences.
                  </span>
                </motion.p>

                {/* Social Links moved to bottom center - keeping this for desktop layout */}
                <div className='relative left-80 top-5 fixed'>
                  <motion.div
                    className="hidden relative left-full top-20 w-50px lg:flex space-x-6"
                    variants={childVariants}
                    transition={{ duration: 1 }}
                  >
                    {[
                      {
                        href: 'https://github.com/ImmanuelJoya',
                        icon: <FaGithub />,
                        label: 'GitHub',
                        color: 'from-gray-400 to-gray-600',
                        hoverColor: 'rgba(100,100,100,0.8)'
                      },
                      {
                        href: 'https://www.linkedin.com/in/immanuel-joy-178b66294/',
                        icon: <FaLinkedin />,
                        label: 'LinkedIn',
                        color: 'from-blue-400 to-blue-600',
                        hoverColor: 'rgba(0,119,181,0.8)'
                      },
                      {
                        href: 'mailto:immanueljoy107@gmail.com',
                        icon: <FaEnvelope />,
                        label: 'Email',
                        color: 'from-red-400 to-red-600',
                        hoverColor: 'rgba(234,67,53,0.8)'
                      },
                    ].map((link, index) => (
                      <motion.div
                        key={link.label}
                        className="relative group"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-full blur-xl opacity-0 group-hover:opacity-60`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.3 }}
                        />

                        <motion.a
                          href={link.href}
                          target={link.href.includes('mailto') ? '_self' : '_blank'}
                          rel={link.href.includes('mailto') ? '' : 'noopener noreferrer'}
                          className="relative z-10 flex items-center justify-center w-14 h-14 text-xl text-gray-300 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300"
                          whileHover={{
                            scale: 1.15,
                            rotate: 5,
                            boxShadow: `0 0 30px ${link.hoverColor}`,
                            borderColor: "rgba(255,255,255,0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>

                        {/* Label */}
                        <motion.span
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                        >
                          {link.label}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Image */}
              <motion.div
                className="flex justify-center lg:justify-end"
                variants={childVariants}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Futuristic glow effect around image */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Image container with glassmorphism */}
                  <div className="relative">
                    <motion.img
                      src={ppImage}
                      alt="Profile"
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />

                    {/* Subtle overlay gradient */}
                    <motion.div
                      className="absolute inset-4 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none"
                      animate={{
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section >

      <SkillsSection />
      <Certifications />
      <Education />
      <Experience />
    </>
  );
};

export default Home;