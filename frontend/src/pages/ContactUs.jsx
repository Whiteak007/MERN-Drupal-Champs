import React from "react";

const ContactUs = () => {
  return (
    // Main container for the entire page, setting the background color and font
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Top section with the main content (image and form) */}
      <div className="flex flex-col lg:flex-row flex-grow items-center justify-center py-12 px-4 lg:px-20">
        {/* Left Section: Contact Graphic */}
        {/* This section holds the illustrative "CONTACT US" graphic */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12">

          <img
            src="https://www.drupalchamp.org/sites/default/files/inline-images/contact-us-banner.png" // Blue background, white text for CONTACT US
            alt="Contact Us Graphic"
            className="max-w-full h-auto rounded-lg" // Added rounded-lg for consistency
          />
        </div>

        {/* Right Section: Contact Form */}
        {/* This section contains the contact form itself */}
        <div className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-md"> {/* Increased padding and added shadow */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Adjusted margin-bottom */}
            Reach Out to Us: Send Us a Message
          </h1>
          <p className="text-gray-700 text-lg mb-8"> {/* Increased font size for paragraph */}
            Please tell us about your project. We will respond to you right away!
          </p>

          <form className="space-y-6">
            {/* First Name and Last Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">First Name</label> {/* Adjusted font size */}
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" // Lighter blue border and focus ring
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email and Phone Number fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">How can we help you?</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* "I'm not a robot" checkbox and reCAPTCHA */}
            {/* New container for the reCAPTCHA section with border and flex properties */}
            <div className="flex items-center justify-between border border-gray-300 rounded-md p-4 mb-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="robot-check"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="robot-check" className="block text-gray-700 text-sm">
                  I'm not a robot
                </label>
              </div>
              {/* reCAPTCHA logo and text aligned to the right */}
              <div className="flex flex-col items-end"> {/* Use flex-col and items-end for right alignment */}
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png" // Generic reCAPTCHA logo
                  alt="reCAPTCHA"
                  className="w-6 h-6" // Removed margin-left
                />
                <p className="text-gray-500 text-xs">reCAPTCHA</p> {/* Adjusted font size */}
                <p className="text-gray-500 text-xs">Privacy - Terms</p> {/* Adjusted font size */}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0272ba] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Contact Info Section */}
      {/* This section is now a separate footer-like area */}
      <div className="bg-gray-100 py-8 px-4 lg:px-20 flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* CALL US */}
        <div className="flex items-center md:items-start">
          {/* Placeholder for call icon */}
          <div className="flex flex-col justify-center items-center">

            <img
              src="https://www.drupalchamp.org/sites/default/files/inline-images/call-icon.png" // Gold-like color for icon background
              alt="Call Us"
              className="w-8 h-8 mb-2 mt-2 mr-2"
            />
          </div>
          <div>

            <h3 className="text-lg font-bold text-gray-800 mb-1">CALL US</h3>
            <p className="text-gray-700 text-base">+91-8969768695</p>
          </div>
        </div>

        {/* EMAIL US */}
        <div className="flex items-center md:items-start">
          {/* Placeholder for email icon */}
          <img
            src="https://www.drupalchamp.org/sites/default/files/inline-images/email-icon.png" // Gold-like color for icon background
            alt="Email Us"
            className="w-8 h-8 mb-2 mr-2 mt-2"
          />
          <div>

            <h3 className="text-lg font-bold text-gray-800 mb-1">EMAIL US</h3>
            <p className="text-gray-700 text-base">contact@drupalchamp.org</p>
          </div>
        </div>

        {/* OUR ADDRESS */}
        <div className="flex items-center md:items-start">
          {/* Placeholder for address icon */}
          <img
            src="https://www.drupalchamp.org/sites/default/files/inline-images/address-icon.png" // Gold-like color for icon background
            alt="Our Address"
            className="w-8 h-8 mb-2 mr-2 mt-6"
          />
          <div>

            <h3 className="text-lg font-bold text-gray-800 mb-1">OUR ADDRESS</h3>
            <p className="text-gray-700 text-base max-w-xs"> {/* Added max-w-xs to control width */}
              B-426, Tower B, Alphathum, Sector 90, Noida, Uttar Pradesh 201305, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
