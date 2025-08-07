import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PageNotFound from './components/PageNotFound';
import Blogs from './pages/Blogs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;