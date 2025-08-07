import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0272ba] text-white pt-12 pb-8 flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-evenly">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-16">
          {/* First column: Connect With Us & Copyright */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-10 uppercase">Connect With Us</h3>
            <address className="not-italic text-sm md:text-base lg:text-lg mb-4">
              <p className="font-bold mb-4">Address:</p>
              <p>B-426, Tower B, Alphathum, Sector 90,</p>
              <p>Noida, Uttar Pradesh 201305, India</p>
            </address>
            <div className="text-sm md:text-base lg:text-lg mb-6">
              <p className="font-bold">Email: <a href="mailto:contact@drupalchamp.org" className="font-normal hover:underline">contact@drupalchamp.org</a></p>
              <p className="font-bold">Skype: <span className="font-normal">drupalchamp</span></p>
            </div>
            <div className="mt-8 text-sm md:text-base text-white">
              <p>Copyright © Douce Infotech Private Limited 2024.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Second column: Follow With Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-6 uppercase">Follow With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0272ba] transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0272ba] transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0272ba] transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0272ba] transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Third column: Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-6 uppercase">Information</h3>
            <ul className="space-y-2 text-sm md:text-base lg:text-lg">
              <li>
                <NavLink to="/" className="hover:underline transition-colors duration-300">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:underline transition-colors duration-300">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:underline transition-colors duration-300">Services</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:underline transition-colors duration-300">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="hover:underline transition-colors duration-300">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: '#fe9900',
          borderRadius: '50%',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      />
    </footer>
  );
};

export default Footer;