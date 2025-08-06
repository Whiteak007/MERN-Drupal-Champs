import React from 'react';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Alnylam Pharmaceuticals",
      image: "https://tse2.mm.bing.net/th/id/OIP.xYVzh-vFDxQtohoyAbKl-QHaE7?w=800&h=533&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare Portal",
      image: "https://www.healthcare-communications.com/wp-content/uploads/2019/04/Barnsley-new-patient-portal-1024x779.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      image: "https://tse4.mm.bing.net/th/id/OIP.HZl99Up2wIcaHIztLLmttAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "#"
    },
    {
      id: 4,
      title: "University Website",
      image: "https://ctfimages.intoglobal.com/xw2h6mjophtz/731sOVK2X4DrG83SK4jXAf/395ba54e3dc059a2fbb5b1fa5ca33cf3/Contentful_-_Campus_LifeUOM.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Social Network",
      image: "https://tse1.mm.bing.net/th/id/OIP.dVcfH8a37CgHpkO6td-9gwHaEd?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "#"
    },
    {
      id: 6,
      title: "Corporate Portal",
      image: "https://www.allbusiness.com/media-library/corporate-meeting.jpg?id=32090748&width=1200&height=744",
      link: "#"
    }
  ];

  return (
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
          <button className="bg-[#fe9900] hover:bg-[#0272ba] cursor-pointer text-white font-medium py-2 px-8 rounded-full transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;