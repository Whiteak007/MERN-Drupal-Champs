import React, { useState, useEffect } from 'react';
import { clients } from '../assets/resources';
const Clients = () => {
  // Clients Data Came from resources.js file 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // Show 5 clients at a time as per the image
  const itemsPerPage = 5;

  useEffect(() => {
    // Auto-scroll every 3 seconds
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const goToPrev = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const goToNext = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  return (
    <section className="py-16 bg-white"> {/* Changed background to white for better match */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our clients</h2>

        {/* Clients Carousel */}
        <div className="relative flex items-center justify-center p-10"> {/* Added flex, items-center, justify-center */}
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="z-10 bg-[#fe9900] p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous clients"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Clients Container with Animation */}
          <div className="relative overflow-hidden w-full max-w-5xl mx-4">
            <div
              className={`flex items-center ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {/* Repeat clients array to create a seamless loop for the carousel */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 flex justify-center items-center"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <img
                    src={client.logo}
                    alt={`Client ${client.id}`}
                    className="h-25 w-auto object-contain px-2 mx-10"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="z-10 bg-[#fe9900] p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next clients"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;