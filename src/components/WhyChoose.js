import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Bustling Cities",
    description: "Experience the vibrant energy of Istanbul and its rich history.",
    image: "https://freedesignfile.com/upload/2013/09/Bustling-city-design-vector-04.jpg",
  },
  {
    title: "Stunning Beaches",
    description: "Relax in Antalya with crystal-clear waters and golden sands.",
    image: "https://hips.hearstapps.com/hmg-prod/images/arrival-jetty-dusit-thani-maldives-royalty-free-image-1655669825.jpg?crop=0.668xw:1.00xh;0.0850xw,0&resize=980:*",
  },
  {
    title: "Hot Air Balloon Rides",
    description: "Float above Cappadocia’s fairy chimneys for breathtaking views.",
    image: "https://traveltomorrow.com/wp-content/uploads/2021/08/victoria-rokita-f7oe3-tlm0I-unsplash-scaled.jpg",
  },
  {
    title: "Ancient Landmarks",
    description: "Discover historical wonders like Ephesus & Pamukkale.",
    image: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/780be300-aef7-432f-9812-e4d895aa65cb-great-sphinx-giza-modern.jpg",
  },
];

const WhyVisitTurkey = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Why Visit <span className="text-blue-600">Turkey?</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          A journey of culture, adventure, and breathtaking landscapes—experience the magic of Turkey like never before!
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>

              {/* Title & Description Below Image */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisitTurkey;
