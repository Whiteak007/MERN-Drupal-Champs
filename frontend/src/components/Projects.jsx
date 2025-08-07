import React from 'react';
import Button from './Button';
import { projects } from '../assets/resources';
const Projects = () => {
  // Sample project data - replace with your actual projects

  return (
    // Projects Data came from resources.js file 
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Latest Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We develop interactive world-class Drupal/WordPress websites for all kind of business needs.
            We have expertise in development of Social Network, E-commerce, Healthcare, College and
            almost any kind of complex websites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Title */}
              <a
                href={project.link}
                className="block p-4 text-center bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </a>
            </div>
          ))}
        </div>

        {/* View More Button (optional) */}
        <div className="text-center mt-12">
          <Button text="View Project" path="/" />
        </div>
      </div>
    </section>
  );
};

export default Projects;