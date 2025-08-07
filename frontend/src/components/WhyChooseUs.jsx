import React from 'react';
import { features } from '../assets/resources';
import Button from './Button';

const WhyChooseUs = () => {
    // Features Data came from resources.js file 
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Why Drupalchamp Only!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Bringing Your Ideas to Life with Drupal Solutions<br />
                        Revolutionize Your Business with Drupal Development Solutions from Drupalchamp.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-14">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Feature Image */}
                            <div className="h-48 overflow-hidden flex items-center justify-center bg-white">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="h-32 w-auto object-contain"
                                />
                            </div>

                            {/* Feature Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.description}</p>
                                <div className="text-center mt-12">
                                    <Button text="View More" path="/" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;