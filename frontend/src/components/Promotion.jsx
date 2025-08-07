import React from 'react';
import promotion from '../assets/images/Promotion-1.jpg'
import Button from './Button';
const Promotion = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image with Text Overlay */}
      <div className="relative ">
        {/* Background Image */}
        <img
          src={promotion} // Replace with your actual image URL
          alt="Promotion Background"
          className="w-full object-cover"
        />

        {/* Text Overlay - Positioned Exactly on Image */}
        <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-20 lg:pr-32">
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl lg:text-4xl  uppercase leading-tight">
              <p>LET'S DEVELOP YOUR</p>
              <p>NEXT GREAT</p>
            </div>
            <div className="text-5xl md:text-6xl lg:text-6xl font-bold uppercase text-white mt-4">
              <p>WEB / MOBILE APP</p>
            </div>
            <button className="mt-8 bg-[#fe9900] hover:bg-black cursor-pointer text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get in Touch
            </button>
            {/* <div className='flex items-center justify-center'>
              <div className='mt-8 bg-[#fe9900] hover:bg-black cursor-pointer text-white font-bold py-2 px-6 rounded-full transition duration-300'>
                <Button className="" text="Get in Touch" path="/" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;