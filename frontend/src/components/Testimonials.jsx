import React from 'react';
import Button from './Button';
import { testimonials } from '../assets/resources';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto flex flex-col items-center justify-center">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Profile Image and Name */}
              <div className="flex items-center mb-4">
                <img
                  src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-4">{testimonial.text}</p>

              {/* Review Count */}
              <p className="text-gray-500 text-sm">{testimonial.count}</p>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <Button text="View More" path="/" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;