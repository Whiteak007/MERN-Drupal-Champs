import React from "react";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import { blogs, tags, services } from "../assets/resources";
const Blogs = () => {
  //  Blogs data Came From resources.js file 

  return (
    <>
      <div className="h-[70px] bg-gray-50 shadow-md w-full flex flex-col items-start justify-center">
        <NavLink to="/">
          <div className="flex items-center mx-40">
            {/* Using the lucide-react icons here */}
            <FaHome size={16} />
            <TiChevronRightOutline size={16} />
            <TiChevronRightOutline size={16} />
            <span className="text-gray-700">Blogs</span>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 lg:mx-26">
        {/* Main content - Blogs */}
        <div className="w-full md:w-2/3">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
              {/* Blog Title */}
              <NavLink to={`/blog/${blog.id}`} className="block p-6 pb-0">
                <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
              </NavLink>

              {/* Blog Meta - MODIFIED SECTION */}
              <div className="flex items-center justify-between p-6 pt-3">
                {/* Left side: Comments & Share */}
                <div className="flex items-center space-x-4">
                  {/* Comment section */}
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>{blog.comments} comments</span>
                  </div>
                  {/* Share link */}
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </div>
                </div>

                {/* Center: Social Icons */}
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-red-500 hover:text-red-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                {/* Right side: Likes/Dislikes */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span>{blog.likes}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m0 0v11m0 0h2.764a2 2 0 001.789-2.894l-3.5-7A2 2 0 0015.263 3H11.05c-.163 0-.326.02-.485.06L7 4m7 10v5M7 4v5"
                      />
                    </svg>
                    <span>{blog.dislikes}</span>
                  </div>
                </div>
              </div>
              {/* End of MODIFIED SECTION */}

              {/* Blog Content */}
              <div className="flex flex-col md:flex-row p-6 pt-0">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-700 mb-4">{blog.description}</p>

                  {blog.points && (
                    <ol className="list-decimal pl-5 mb-4 text-gray-700">
                      {blog.points.map((point, index) => (
                        <li key={index} className="mb-2">{point}</li>
                      ))}
                    </ol>
                  )}

                  <NavLink
                    to={`/blog/${blog.id}`}
                    className="relative inline-block px-4 py-2 text-white font-semibold text-center tracking-widest bg-orange-400 rounded-md shadow-lg transition-all duration-300 transform-style-3d hover:bg-[#fe9900]
                     before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fe9900] before:z-[-1] before:transform before:skew-x-[-20deg] before:origin-top-left before:rounded-md before:transition-all before:duration-300
                     hover:before:bg-[#fe9900]"
                  >
                    <span className="relative z-10">Read More</span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8">
            <nav className="flex items-center">
              <button className="px-3 py-1 rounded-md bg-[#337ab7] text-white hover:bg-blue-500">
                1
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                4
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                5
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                6
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                7
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                8
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                9
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                ...
              </button>
              <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100">
                <span className="relative z-10 flex items-center gap-1">
                  Last <TiChevronRightOutline size={16} />
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-[330px]">
          {/* Tags */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <NavLink
                  key={index}
                  to={`/tag/${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-white text-orange-400 rounded-full border-1 border-orange-400 hover:text-white hover:bg-orange-400 transition-colors text-sm"
                >
                  {tag}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:w-[330px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <NavLink
                    to={`/service/${service.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:w-[330px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/create-slideshow"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  How to create slideshow using storyback and must
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create-nuxt-app"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  create-nuxt-app
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drupal-headless"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Drupal as a headless CMS with Gatsby
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drupal-development"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Configure a perfect Drupal development environment on local machine (Windows)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/facebook-posts"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  How can I display Facebook Public Page Posts on my website?
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;