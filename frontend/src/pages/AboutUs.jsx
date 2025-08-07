import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {timelineData} from '../assets/resources'
const AboutUs = () => {
  // About Data came from resources.js file

  return (
    <div className="max-w-full overflow-hidden ">
      {/* Who We Are Section */}
      <div className="flex flex-col lg:flex-row bg-[#00adef]">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 mx-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Who we are</h1>
          <p className="text-white mb-4">
            We are professionals who are passionate about working in cutting edge technologies available on this planet and our motto is to help clients to build systems so they can get profit from their business. Whenever a new technology is introduced to this world we make ourselves ready to develop and deliver web / mobile apps on that specific platform / technology.
          </p>
          <p className="text-white">
            We develop interactive world-class Drupal websites for all kind of businesses needs. We have expertise in development of Social network, E-commerce, Healthcare etc. kind of websites.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mx-20">
          <img
            src="https://www.drupalchamp.org/themes/custom/drupalchamp2022/images/about-banner.jpg"
            alt="Who we are"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Why Douce Infotech Section */}
      <div className="p-6 md:p-10 lg:p-16 bg-white mx-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Why Douce Infotech Pvt. Ltd.</h2>
        <p className="text-gray-700 mb-4">
          Douce Infotech Private Limited is a leading Drupal and WordPress development company that specializes in creating custom websites and web applications for businesses of all sizes. Our team of experienced developers has a deep understanding of both Drupal and WordPress platforms and is able to deliver top-quality solutions that meet the specific needs of each client.
        </p>
        <p className="text-gray-700 mb-4">
          We understand the importance of creating a website that not only looks great but also performs well in search engines. That's why we focus on optimizing our websites for Google SEO by incorporating the latest best practices and techniques. Our team has extensive experience in keyword research, meta tags, and on-page optimization, and we use this knowledge to ensure that your website is easily discoverable by your target audience.
        </p>
        <p className="text-gray-700 mb-4">
          We also understand the importance of responsive design, and all of our websites are optimized for different devices such as desktops, laptops, tablets, and smartphones. We also ensure that our websites are easy to navigate, load quickly, and are accessible to all users, including those with disabilities.
        </p>
        <p className="text-gray-700 mb-4">
          In addition to website development, we also offer a range of other services such as e-commerce development, website maintenance and support, and digital marketing. Our e-commerce development services include creating custom online stores, integrating with payment gateways, and developing custom modules to meet the unique needs of your business.
        </p>
        <p className="text-gray-700 mb-4">
          Our website maintenance and support services include regular backups, security updates, and bug fixes to keep your website running smoothly. We also offer digital marketing services such as search engine optimization, pay-per-click advertising, and social media marketing to help you reach your target audience and drive more traffic to your website.
        </p>
        <p className="text-gray-700 mb-4">
          At Douce Infotech Private Limited, we are committed to delivering high-quality solutions that meet the specific needs of each client. Our team of experienced developers is dedicated to providing excellent customer service and support, and we work closely with each client to ensure that their project is completed on time and within budget.
        </p>
        <p className="text-gray-700">
          If you're looking for a reliable and experienced Drupal and WordPress development company, look no further than Douce Infotech Private Limited. Contact us today to learn more about how we can help you create a website that drives business growth and success.
        </p>
      </div>

      {/* Custom Timeline Section */}
      <div className="p-6 md:p-10 lg:p-16 bg-[#f5f5f5]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">Douce Infotech timeline</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-blue-500 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                {/* Timeline content */}
                <div className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'mr-auto md:mr-0 md:pr-16' : 'ml-auto md:ml-0 md:pl-16'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.year}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Buttons Section */}
      <div className="p-6 md:p-10 lg:p-16 bg-white">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <button className="bg-[#0272ba] hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Browse Our Portfolio
          </button>
          <button className="bg-[#0272ba] hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Sign Up For Our Blogs
          </button>

          <button className="bg-[#0272ba] hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Call Us For A Free Estimate
          </button>
          <button className="bg-[#0272ba] hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Schedule A Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;