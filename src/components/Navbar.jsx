import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
=======
import { HomeIcon, DocumentIcon, PhoneIcon } from '@heroicons/react/outline'; // Import Tailwind Icons
>>>>>>> d219dde2391f5c47a1fedae9626dcc3128ea9442

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none"
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
        </button>

        {/* Desktop menu */}
<<<<<<< HEAD
        <div className={`hidden md:flex space-x-8`}>
          <Link
            to="/"
            className={`hover:text-blue-500 transition-colors ${
              isActive('/') ? 'text-blue-500' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`hover:text-blue-500 transition-colors ${
              isActive('/projects') ? 'text-blue-500' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`hover:text-blue-500 transition-colors ${
              isActive('/contact') ? 'text-blue-500' : ''
            }`}
          >
            Contact
=======
        <div className={`hidden md:flex space-x-8 items-center`}>
          <Link to="/" className={`flex items-center hover:text-blue-500 transition-colors ${isActive('/') ? 'text-blue-500' : ''}`}>
            <HomeIcon className="h-5 w-5 mr-1" /> Home
          </Link>
          <Link to="/projects" className={`flex items-center hover:text-blue-500 transition-colors ${isActive('/projects') ? 'text-blue-500' : ''}`}>
            <DocumentIcon className="h-5 w-5 mr-1" /> Projects
          </Link>
          <Link to="/contact" className={`flex items-center hover:text-blue-500 transition-colors ${isActive('/contact') ? 'text-blue-500' : ''}`}>
            <PhoneIcon className="h-5 w-5 mr-1" /> Contact
>>>>>>> d219dde2391f5c47a1fedae9626dcc3128ea9442
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 bg-gray-900 py-2 px-4`}
        >
          <Link
            to="/"
            className={`block py-2 hover:text-blue-500 transition-colors ${
              isActive('/') ? 'text-blue-500' : ''
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`block py-2 hover:text-blue-500 transition-colors ${
              isActive('/projects') ? 'text-blue-500' : ''
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`block py-2 hover:text-blue-500 transition-colors ${
              isActive('/contact') ? 'text-blue-500' : ''
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> d219dde2391f5c47a1fedae9626dcc3128ea9442
