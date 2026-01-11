import { DocumentIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useMotionValueEvent  } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Head from '../assets/images/Head.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Enhanced animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))",
      transition: { duration: 0.3 }
    }
  };

  const { scrollY } = useScroll();
const [hidden, setHidden] = useState(false);

useMotionValueEvent(scrollY, 'change', (latest) => {
  const previous = scrollY.getPrevious();

  if (latest > previous && latest > 100) {
    // scrolling down
    setHidden(true);
  } else {
    // scrolling up
    setHidden(false);
  }
});

  return (
    <motion.nav
      className="bg-gradient-to-br from-gray-900 via-black-950 to-black text-white py-4 px-6 fixed w-full top-0 z-50 backdrop-blur-md"
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
      animate={{
    y: hidden ? '-110%' : '0%',
  }}
  transition={{
    duration: 0.35,
    ease: 'easeInOut',
  }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 opacity-50"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(6,182,212,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(59,130,246,0.1) 100%)",
            "linear-gradient(90deg, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(6,182,212,0.1) 100%)",
            "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 50%, rgba(147,51,234,0.1) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        {/* Enhanced Logo with Image */}
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          className="relative"
        >
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            {/* Head Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative"
            >
              <img
                src={Head}
                alt="Portfolio Head"
                className="w-10 h-10 "
              />
              {/* Animated ring around image */}
              <motion.div
                className="absolute inset-0 "
                animate={{
                  borderColor: [
                    "rgba(6,182,212,0.8)",
                    "rgba(147,51,234,0.8)",
                    "rgba(6,182,212,0.8)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Portfolio Text */}
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0,255,255,0.5)",
                    "0 0 20px rgba(147,51,234,0.5)",
                    "0 0 10px rgba(0,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Portfolio
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Enhanced Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0,255,255,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <motion.path
                d="M6 18L18 6M6 6l12 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </motion.g>
            )}
          </motion.svg>
        </motion.button>

       {/* Desktop segmented navbar */}
<div className="hidden md:flex items-center">
  <div className="
    flex items-center
    rounded-full
    border border-white/20
    bg-white/5 backdrop-blur-xl
    shadow-lg
    overflow-hidden
  ">
    {[
      { to: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
      { to: '/projects', label: 'Projects', icon: <DocumentIcon className="h-5 w-5" /> },
      { to: '/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> },
    ].map((item, index) => (
      <div key={item.to} className="flex items-center">
        
        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={item.to}
            className={`
              flex items-center gap-2 px-6 py-3
              text-sm font-medium
              transition-all duration-300
              ${
                isActive(item.to)
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white'
              }
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </motion.div>

        {/* Divider (not after last item) */}
        {index !== 2 && (
          <div className="h-6 w-px bg-white/20" />
        )}
      </div>
    ))}
  </div>
</div>

        {/* Enhanced Mobile menu */}
        <motion.div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden`}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="exit"
          variants={menuVariants}
        >
          {/* Mobile menu background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(236,72,153,0.05) 100%)",
                "radial-gradient(circle at 70% 70%, rgba(147,51,234,0.05) 0%, rgba(236,72,153,0.05) 50%, rgba(6,182,212,0.05) 100%)",
                "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(236,72,153,0.05) 100%)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 p-4 space-y-2">
            {[
              {
                to: '/',
                label: 'Home',
                icon: <HomeIcon className="h-5 w-5" />,
                gradient: 'from-cyan-400 to-blue-500'
              },
              {
                to: '/projects',
                label: 'Projects',
                icon: <DocumentIcon className="h-5 w-5" />,
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                to: '/contact',
                label: 'Contact',
                icon: <PhoneIcon className="h-5 w-5" />,
                gradient: 'from-emerald-400 to-teal-500'
              },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={item.to}
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${isActive(item.to)
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10 bg-white/5'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    animate={isActive(item.to) ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium tracking-wide">{item.label}</span>

                  {/* Mobile active indicator */}
                  {isActive(item.to) && (
                    <motion.div
                      className="ml-auto w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;