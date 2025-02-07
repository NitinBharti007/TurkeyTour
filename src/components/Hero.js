import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
          Explore <span className="text-yellow-400">Turkey</span> Like Never Before
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mt-4 font-medium tracking-wide text-gray-200 max-w-2xl mx-auto px-4">
          6 Nights & 7 Days of luxury travel in Istanbul, Cappadocia, Antalya, and more!
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#book-now"
            className="px-6 sm:px-8 py-3 bg-yellow-500 text-blue-900 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition transform duration-300 ease-in-out"
          >
            Book Your Trip ✈️
          </a>
          <a
            href="#learn-more"
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition transform duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
