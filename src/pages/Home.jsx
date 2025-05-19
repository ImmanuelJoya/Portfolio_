import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// import reactIcon from '../assets/images/react-icon.svg'; // Example
import { ReactSVG } from 'react-svg';
import img1 from '../assets/images/img1.png'; // Example
import Certifications from '../components/Certifications';
import ParticlesBackground from '../components/ParticlesBackground';
import SkillsSection from '../components/SkillsSection';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-0" />

        {/* Floating Tech Icons */}
        <motion.div
          src={img1}

          className="w-12 h-12 absolute top-12 left-10 opacity-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <ReactSVG src="/path/to/react-icon.svg" />
        </motion.div>
        <motion.img
          src={img1}
          alt="Tailwind"
          className="w-12 h-12 absolute bottom-12 right-10 opacity-40"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        {/* <ReactSVG src="/path/to/react-icon.svg" /> */}
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 animate-bounce text-gray-400 text-2xl z-10">
          ↓
        </div>

        <div className="max-w-7xl mx-auto z-10">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen py-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
              variants={childVariants}
              transition={{ duration: 0.8 }}
            >
              Hi, I&apos;m Immanuel
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-gray-200 mb-8"
              variants={childVariants}
              transition={{ duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2002,
                  'UI/UX Enthusiast', 2002,
                  'Problem Solver', 2002,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-md"
              />
            </motion.div>

            {/* Glassmorphism Intro */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-4"
              variants={childVariants}
              transition={{ duration: 0.8 }}
            >
              I craft stunning, responsive, and user-centric web applications with cutting-edge technologies and a passion for seamless design.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-8"
              variants={childVariants}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  href: 'https://github.com/ImmanuelJoya',
                  icon: <FaGithub />,
                  label: 'GitHub',
                },
                {
                  href: 'https://www.linkedin.com/in/immanuel-joy-178b66294/',
                  icon: <FaLinkedin />,
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:immanueljoy107@gmail.com',
                  icon: <FaEnvelope />,
                  label: 'Email',
                },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.includes('mailto') ? '_self' : '_blank'}
                  rel={link.href.includes('mailto') ? '' : 'noopener noreferrer'}
                  className="text-3xl text-gray-300 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
      <Certifications />
    </>
  );
};

export default Home;
