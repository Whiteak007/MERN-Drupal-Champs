import React from 'react';
import Button from './Button';
import { latestblogs } from '../assets/resources';
const LatestBlogs = () => {
//    Blogs Data Came from resources.js file 

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Latest Blog Posts</h2>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mx-20">
                    {latestblogs.map((blog) => (
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
                    <Button text= "Read More" path="https://coderaklinks.ccbp.tech" />
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;