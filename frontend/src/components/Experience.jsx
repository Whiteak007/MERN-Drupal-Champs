import React, { useState, useEffect } from 'react';

const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    // Calculate increment based on target and duration for a smoother animation
    const increment = target / (duration / 16); // Roughly 60fps

    let start = null;
    let currentCount = 0;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // Ensure currentCount doesn't exceed target
      currentCount = Math.min(target, increment * (progress / 16));
      setCount(Math.floor(currentCount));

      if (progress < duration) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure final count is exactly the target
      }
    };

    window.requestAnimationFrame(animate);
  }, [target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const Experience = () => {
  return (
    <section className="py-16 bg-white"> {/* Changed background to white */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between"> {/* Flex container for main layout */}
          {/* Left Section: 15+ Years of Experience */}
          <div className="text-[#0272ba] text-[20px] md:text-9xl font-bold mb-8 md:mb-0 md:mr-16 mx-20"> {/* Increased font size */}
            <Counter target={15} suffix="+" />
          </div>

          {/* Middle Section: Years of Experience Text and Button */}
          <div className="text-center md:text-left flex-1 max-w-xl mx-20"> {/* Adjusted width for text block */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Years of Experience
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Drupalchamp is a team of highly experienced Web / App designers and developers creating unique software for you.
            </p>
            <button className="bg-[#fe9900] hover:bg-[#0272ba] cursor-pointer text-white font-medium py-3 px-8 rounded transition duration-300"> {/* Changed button color and removed full border-radius */}
              Get in Touch
            </button>
          </div>

          {/* Right Section: Stats Grid */}
          <div className="grid grid-cols-2 gap-8 text-center md:ml-16 mx-2"> {/* Adjusted gap and margin */}
            <div className="p-4"> {/* Removed padding and background, added minimal border */}
              <h3 className="text-5xl font-bold text-gray-800 mb-1"> {/* Changed text color to gray and increased font size */}
                <Counter target={300} suffix="+" />
              </h3>
              <p className="text-gray-600 text-lg">Web/Mobile Apps developed</p>
            </div>

            <div className="p-4">
              <h3 className="text-5xl font-bold text-gray-800 mb-1">
                <Counter target={100} suffix="+" />
              </h3>
              <p className="text-gray-600 text-lg">Clients</p>
            </div>

            <div className="p-4">
              <h3 className="text-5xl font-bold text-gray-800 mb-1">
                <Counter target={50} suffix="K+" /> {/* Changed suffix for 50K */}
              </h3>
              <p className="text-gray-600 text-lg">Hours worked</p>
            </div>

            <div className="p-4">
              <h3 className="text-5xl font-bold text-gray-800 mb-1">
                <Counter target={30} />
              </h3>
              <p className="text-gray-600 text-lg">Employees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;