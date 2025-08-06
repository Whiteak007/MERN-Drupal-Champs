import React from 'react';

const Testimonials = () => {
  const Testimonials = [
    {
      id: 1,
      name: "Peterparson",
      text: "I have found the Vikas and he is amazing developer, he had always delivered the product under the timeline, on budget and with 100% accuracy. He is totally problem solving guys.",
      count: "[39]"
    },
    {
      id: 2,
      name: "Paul Ghiron",
      text: "Vikas is a professional who works diligently to complete all assignments. He is meticulous about all that he works on. Highly recommend him.",
      count: "[39]"
    },
    {
      id: 3,
      name: "Kodjo Houmake",
      text: "Great experience, fast, diligent, and high-quality work. Thank you for a great job was a pleasure.",
      count: "[39]"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container  px-4 mx-20">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {Testimonials.map((testimonial) => (
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
          <button className="bg-[#fe9900] hover:bg-[#0272ba] cursor-pointer text-white font-medium py-2 px-8 rounded-full transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;