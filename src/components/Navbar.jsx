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

  const bgOpacity = useMotionValue(0);
  const smoothBgOpacity = useSpring(bgOpacity, { stiffness: 100, damping: 30 });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setScrolled(latest > 50);
    bgOpacity.set(latest > 50 ? 1 : 0);
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
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 z-[60] origin-left" style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }} />

      <motion.nav className="fixed w-full top-0 z-50 text-white" animate={{ y: hidden ? '-100%' : '0%' }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}>
        {/* Glassmorphism background */}
        <motion.div className="absolute inset-0 backdrop-blur-xl" style={{ backgroundColor: useTransform(smoothBgOpacity, [0, 1], ['rgba(17, 24, 39, 0.7)', 'rgba(17, 24, 39, 0.85)']), borderBottom: useTransform(smoothBgOpacity, [0, 1], ['1px solid rgba(255,255,255,0)', '1px solid rgba(255,255,255,0.1)']) }} />

        {/* Animated gradient */}
        <motion.div className="absolute inset-0 opacity-30" animate={{ background: ["linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(147,51,234,0.15) 50%, rgba(236,72,153,0.15) 100%)", "linear-gradient(135deg, rgba(147,51,234,0.15) 0%, rgba(236,72,153,0.15) 50%, rgba(6,182,212,0.15) 100%)", "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(6,182,212,0.15) 50%, rgba(147,51,234,0.15) 100%)"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />

        {/* Mouse spotlight */}
        <motion.div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, rgba(6,182,212,0.3), transparent)`) }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with 3D effects */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div className="relative w-12 h-12" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <motion.div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, #06b6d4, #9333ea, #ec4899, #06b6d4)" }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                  <div className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden">
                    <img src={Head} alt="Portfolio Head" className="w-full h-full object-cover" />
                  </div>
                  <motion.div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                </motion.div>

                <div className="text-2xl font-bold relative">
                  <motion.span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ backgroundSize: "200% 200%" }}>
                    Portfolio
                  </motion.span>
                  <motion.div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.to);
                
                return (
                  <motion.div key={item.to} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                    <Link to={item.to}>
                      <motion.div className={`relative px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all duration-300 ${active ? 'text-white' : 'text-gray-400 hover:text-white'}`} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <motion.div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient}`} initial={{ opacity: 0 }} animate={{ opacity: active ? 0.2 : 0 }} whileHover={{ opacity: 0.15 }} transition={{ duration: 0.3 }} />
                        <motion.div className="absolute inset-0 rounded-full border border-white/10" whileHover={{ borderColor: item.glow, boxShadow: `0 0 20px ${item.glow}` }} transition={{ duration: 0.3 }} />
                        <motion.div animate={active ? { rotate: [0, 360], scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.6 }}>
                          <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : ''}`} />
                        </motion.div>
                        <span className="relative z-10">{item.label}</span>
                        {active && <motion.div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" initial={{ scale: 0, x: '-50%' }} animate={{ scale: 1, x: '-50%' }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.a href="/resume.pdf" download className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm relative overflow-hidden group" whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" initial={{ x: '100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                <span className="relative z-10">Hire Me</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="md:hidden relative p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20" whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(34,211,238,0.4)", borderColor: "rgba(34,211,238,0.5)" }} whileTap={{ scale: 0.9 }}>
              <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20" animate={{ opacity: isOpen ? 1 : 0.5, scale: isOpen ? 1.1 : 1 }} transition={{ duration: 0.3 }} />
              <div className="relative w-6 h-6">
                <motion.span className="absolute left-0 w-6 h-0.5 bg-white rounded-full" animate={{ top: isOpen ? '50%' : '25%', rotate: isOpen ? 45 : 0, translateY: isOpen ? '-50%' : 0 }} transition={{ duration: 0.3 }} />
                <motion.span className="absolute left-0 top-1/2 w-6 h-0.5 bg-white rounded-full -translate-y-1/2" animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }} transition={{ duration: 0.3 }} />
                <motion.span className="absolute left-0 w-6 h-0.5 bg-white rounded-full" animate={{ bottom: isOpen ? '50%' : '25%', rotate: isOpen ? -45 : 0, translateY: isOpen ? '50%' : 0 }} transition={{ duration: 0.3 }} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 overflow-hidden" initial="hidden" animate={isOpen ? 'visible' : 'hidden'} exit="exit" variants={menuVariants}>
          <div className="relative bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <motion.div className="absolute inset-0" animate={{ background: ["radial-gradient(circle at 0% 0%, rgba(6,182,212,0.15) 0%, transparent 50%)", "radial-gradient(circle at 100% 100%, rgba(147,51,234,0.15) 0%, transparent 50%)", "radial-gradient(circle at 0% 0%, rgba(6,182,212,0.15) 0%, transparent 50%)"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
            <div className="relative p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.to);
                
                return (
                  <motion.div key={item.to} variants={itemVariants} whileHover={{ x: 10, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to={item.to} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${active ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg` : 'text-gray-300 hover:text-white hover:bg-white/10 bg-white/5'}`}>
                      <motion.div animate={active ? { rotate: 360, scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.6 }}>
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="font-medium text-lg">{item.label}</span>
                      {active && <motion.div className="ml-auto" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}><div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" /></motion.div>}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants}>
                <a href="/resume.pdf" download className="flex items-center justify-center gap-2 p-4 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium" onClick={() => setIsOpen(false)}>
                  <span>Download Resume</span>
                  <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;