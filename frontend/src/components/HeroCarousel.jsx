import React, { useState, useEffect } from 'react';
import { carouselimages } from '../assets/resources';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50;

  useEffect(() => {
    // Only auto-rotate when not hovered (on desktop) and not touched (on mobile)
    if (!isHovered && touchStart === null) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselimages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, touchStart]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselimages.length) % carouselimages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselimages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    // Reset touch events
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselimages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Image with responsive height */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
              style={{
                height: 'calc(100vh - 80px)',
                maxHeight: '800px',
                minHeight: '400px'
              }}
            />
            {/* Optional: Add content overlay for each slide */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white p-4">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Slide Title</h2>
                <p className="text-sm md:text-lg mb-6">Slide description goes here</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
        {carouselimages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${currentIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;