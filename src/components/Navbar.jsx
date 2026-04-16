import { DocumentIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Head from '../assets/images/Head.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth opacity transition for navbar content
  const navOpacity = useMotionValue(1);
  const smoothNavOpacity = useSpring(navOpacity, { stiffness: 100, damping: 30 });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    
    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.08, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  const navItems = [
    { to: '/', label: 'Home', icon: HomeIcon, gradient: 'from-cyan-400 to-blue-500', glow: 'rgba(6,182,212,0.5)' },
    { to: '/projects', label: 'Projects', icon: DocumentIcon, gradient: 'from-purple-400 to-pink-500', glow: 'rgba(147,51,234,0.5)' },
    { to: '/contact', label: 'Contact', icon: PhoneIcon, gradient: 'from-emerald-400 to-teal-500', glow: 'rgba(16,185,129,0.5)' },
  ];

  return (
    <>
      {/* Progress bar at top - subtle */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 z-[60] origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }}
      />

      <motion.nav
        className="fixed w-full top-0 z-50 text-white"
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Transparent background - no blur, no solid color */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Optional: Very subtle gradient that fades in on scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo - transparent style */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div 
                  className="relative w-12 h-12" 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} 
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-80"
                    style={{
                      background: "conic-gradient(from 0deg, #06b6d4, #9333ea, #ec4899, #06b6d4)"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-1 bg-gray-900/80 backdrop-blur-sm rounded-full overflow-hidden">
                    <img src={Head} alt="Portfolio Head" className="w-full h-full object-cover" />
                  </div>
                </motion.div>

                <div className="text-2xl font-bold relative">
                  <motion.span 
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Portfolio
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - transparent pills */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.to);
                
                return (
                  <motion.div 
                    key={item.to} 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link to={item.to}>
                      <motion.div 
                        className={`relative px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all duration-300 ${
                          active ? 'text-white' : 'text-gray-300 hover:text-white'
                        }`} 
                        whileHover={{ scale: 1.05, y: -2 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Background - transparent with subtle border */}
                        <motion.div 
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient}`} 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: active ? 0.15 : 0 }} 
                          whileHover={{ opacity: 0.1 }} 
                          transition={{ duration: 0.3 }} 
                        />
                        <motion.div 
                          className="absolute inset-0 rounded-full border border-white/10" 
                          whileHover={{ borderColor: item.glow }} 
                          transition={{ duration: 0.3 }} 
                        />
                        
                        <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : ''}`} />
                        <span className="relative z-10">{item.label}</span>
                        
                        {active && (
                          <motion.div 
                            className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" 
                            initial={{ scale: 0, x: '-50%' }} 
                            animate={{ scale: 1, x: '-50%' }} 
                            transition={{ type: "spring", stiffness: 500, damping: 30 }} 
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* CTA Button - transparent style */}
              <motion.a
                href="/resume.pdf"
                download
                className="ml-4 px-5 py-2.5 rounded-full border border-cyan-500/50 text-cyan-400 font-medium text-sm relative overflow-hidden group hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative z-10">Hire Me</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button - transparent */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.1, borderColor: "rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-6">
                <motion.span 
                  className="absolute left-0 w-6 h-0.5 bg-white rounded-full" 
                  animate={{ top: isOpen ? '50%' : '25%', rotate: isOpen ? 45 : 0, translateY: isOpen ? '-50%' : 0 }} 
                  transition={{ duration: 0.3 }} 
                />
                <motion.span 
                  className="absolute left-0 top-1/2 w-6 h-0.5 bg-white rounded-full -translate-y-1/2" 
                  animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }} 
                  transition={{ duration: 0.3 }} 
                />
                <motion.span 
                  className="absolute left-0 w-6 h-0.5 bg-white rounded-full" 
                  animate={{ bottom: isOpen ? '50%' : '25%', rotate: isOpen ? -45 : 0, translateY: isOpen ? '50%' : 0 }} 
                  transition={{ duration: 0.3 }} 
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - semi-transparent */}
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 overflow-hidden"
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="exit"
          variants={menuVariants}
        >
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.to);
                
                return (
                  <motion.div 
                    key={item.to} 
                    variants={itemVariants} 
                    whileHover={{ x: 10, scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        active 
                          ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg` 
                          : 'text-gray-300 hover:text-white hover:bg-white/5 bg-white/5'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium text-lg">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;