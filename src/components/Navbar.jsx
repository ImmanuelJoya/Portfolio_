import { DocumentIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Updated import for v2
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:text-cyan-300 transition-colors duration-300"
        >
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { to: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5 mr-1" /> },
            { to: '/projects', label: 'Projects', icon: <DocumentIcon className="h-5 w-5 mr-1" /> },
            { to: '/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5 mr-1" /> },
          ].map((item) => (
            <motion.div key={item.to} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to={item.to}
                className={`flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 ${
                  isActive(item.to) ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md py-4 px-6 border-t border-gray-800`}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="exit"
          variants={menuVariants}
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 ${
                isActive(item.to) ? 'text-cyan-400' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;