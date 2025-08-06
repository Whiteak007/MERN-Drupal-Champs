import React from 'react';

const Trial = () => {
    return (
        // Main section with dark blue background and rounded corners
        <section className='bg-[#0272ba] flex flex-col items-center justify-center shadow-lg h-[15vh]'>
            {/* Container to center content and apply padding */}
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-around'>

                {/* Left side: Heading and paragraph */}
                <div className="text-white text-center md:text-left mb-6 md:mb-0">
                    <h1 className='text-2xl md:text-4xl lg:text-4xl  leading-tight'>
                        Get 7 Days Free Trial
                    </h1>
                    <p className='mt-2 text-sm md:text-base lg:text-lg max-w-2xl'>
                        Hire Drupal developers for your current or new project at ZERO cost. You pay only if you like our work.
                    </p>
                </div>

                {/* Right side: The "Get in Touch" button */}
                <div className="flex-shrink-0">
                    <button className="bg-[#fe9900] hover:bg-orange-500 text-white font-semibold py-4 px-12 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                            <i class="fa-solid fa-envelope"></i>
                            <span>Get in Touch</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Trial;
