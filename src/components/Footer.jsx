import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Footer = () => {
  const socialLinks = [
    { href: '#', icon: <FaFacebook />, label: 'Facebook' },
    { href: '#', icon: <FaInstagram />, label: 'Instagram' },
    { href: '#', icon: <AiOutlineTwitter />, label: 'Twitter' },
    { href: '#', icon: <FaGithub />, label: 'GitHub' },
    { href: '#', icon: <FaYoutube />, label: 'YouTube' },
  ];

  const navLinks = [
    { href: '#', text: 'About' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Jobs' },
    { href: '#', text: 'Press' },
    { href: '#', text: 'Accessibility' },
    { href: '#', text: 'Partners' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-30 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        {/* Links */}
        <motion.div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-8" variants={footerVariants}>
          {navLinks.map((link) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300"
              variants={childVariants}
              whileHover={{ y: -2 }}
            >
              {link.text}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center gap-6 mb-8" variants={footerVariants}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="text-gray-400 text-2xl hover:text-cyan-400 transition-colors duration-300"
              variants={childVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-sm"
          variants={childVariants}
        >
          © {new Date().getFullYear()} Immanuel Joya. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;