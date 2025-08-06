import React from 'react';

const LatestBlogs = () => {
    const blogs = [
        {
            id: 1,
            title: "New website developed by us with the latest Drupal9.5.2_version",
            image: "https://www.drupalchamp.org/sites/default/files/styles/blog_homepage_listing/public/2023-01/newest.png?itok=xG5jTKOR",
            category: "Drupal"
        },
        {
            id: 2,
            title: "Upgrading drupal7 to drupal9",
            image: "https://www.drupalchamp.org/sites/default/files/styles/blog_homepage_listing/public/2023-01/migration4_0.png?itok=QnNzAOlA",
            category: "Drupal"
        },
        {
            id: 3,
            title: "Drupal9 to Drupal10 upgrade",
            image: "https://www.drupalchamp.org/sites/default/files/styles/blog_homepage_listing/public/2023-01/drupal-9-vs-drupal-10.jpg?itok=VUwsWqSf",
            category: "Drupal"
        },
        {
            id: 4,
            title: "NUXTJS + Storybook: How to create slideshow using storyblok and nuxt",
            image: "https://www.drupalchamp.org/sites/default/files/styles/blog_homepage_listing/public/2021-02/1_8vntpfJ8_FQ1XkeMVggasQ.png?itok=8hFjkkS8",
            category: "Frontend"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Latest Blog Posts</h2>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mx-20">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Blog Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                                    {blog.category}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                            </div>
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

export default LatestBlogs;