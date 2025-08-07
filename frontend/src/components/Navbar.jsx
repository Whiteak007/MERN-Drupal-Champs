import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 300); // Match this with your transition duration
    } else {
      setMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('nav');
      if (mobileMenuOpen && nav && !nav.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navbar with white background by default */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center lg:mx-20 md:mx-10 mx-4">
            <img
              src={logo}
              alt="DrupalChamp Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'} w-auto`}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-9 text-sm lg:text-[15px] font-bold lg:mx-20 md:mx-10">
            <NavLink 
              to="/" 
              onClick={scrollToTop} 
              className={({ isActive }) => `text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us" 
              onClick={scrollToTop} 
              className={({ isActive }) => `text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={scrollToTop} 
              className={({ isActive }) => `text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact-us" 
              onClick={scrollToTop} 
              className={({ isActive }) => `text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Contact Us
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="bg-white shadow-lg py-4 px-6">
            <NavLink 
              to="/" 
              onClick={scrollToTop} 
              className={({ isActive }) => `block py-3 text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us" 
              onClick={scrollToTop} 
              className={({ isActive }) => `block py-3 text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={scrollToTop} 
              className={({ isActive }) => `block py-3 text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact-us" 
              onClick={scrollToTop} 
              className={({ isActive }) => `block py-3 text-gray-800 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Spacer div to push content below navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}></div>
    </>
  );
};

export default Navbar;