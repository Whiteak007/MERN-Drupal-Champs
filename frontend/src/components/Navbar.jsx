import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      {/* Navbar with white background by default */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center mx-20">
            <img 
              src={logo} 
              alt="DrupalChamp Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
            />
          </div>
          <div className="hidden md:flex space-x-9 text-[19px] font-bold mx-20">
            <NavLink to="/" className="text-gray-800 hover:text-blue-600">Home</NavLink>
            <NavLink to="/about" className="text-gray-800 hover:text-blue-600">About Us</NavLink>
            <NavLink to="/blog" className="text-gray-800 hover:text-blue-600">Blog</NavLink>
            {/* <NavLink to="/portfolio" className="text-gray-800 hover:text-blue-600">Portfolio</NavLink> */}
            <NavLink to="/contact" className="text-gray-800 hover:text-blue-600">Contact Us</NavLink>
          </div>
          <button className="md:hidden text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Spacer div to push content below navbar */}
      <div className={`h-24 transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}></div>
    </>
  );
};

export default Navbar;