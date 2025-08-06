import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Detail",
            description: "We understand that, it is important to have accurate information before taking any step.",
            image: "https://www.drupalchamp.org/sites/default/files/inline-images/Detail.png",
            link: "#"
        },
        {
            id: 2,
            title: "Design",
            description: "We have a team of creative designers who are proficient in creating stunning designs that are both aesthetically.",
            image: "https://www.drupalchamp.org/sites/default/files/inline-images/Design.png",
            link: "#"
        },
        {
            id: 3,
            title: "Develop",
            description: "We are a team of passionate professionals who are committed to providing our customers with a comprehensive range.",
            image: "https://www.drupalchamp.org/sites/default/files/inline-images/Develop.png",
            link: "#"
        },
        {
            id: 4,
            title: "Deliver",
            description: "We have set certain rules and regulations for the team members to follow and complete the task in the set time frame.",
            image: "https://www.drupalchamp.org/sites/default/files/inline-images/Deliver.png",
            link: "#"
        }
    ];

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
                                    <button
                                        onClick={() => window.location.href = feature.link}
                                        className="bg-[#fe9900] hover:bg-[#0272ba] cursor-pointer text-white font-medium py-2 px-8 rounded-full transition duration-300">
                                        View More
                                    </button>
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