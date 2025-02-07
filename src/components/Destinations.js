import React from "react";

const destinations = [
  {
    name: "Istanbul",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSbbqtaaIPkIvYJW0CDkC_HIEZaFVghhfDmGHjCqCQjF2uuAdsuUU8-RKRWsXiNAhToU20vAVtW7OmXy0V8fbLgHZrd_DfZADUTb9o4eA",
  },
  {
    name: "Cappadocia",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSlxy9lXYlZQNC_rB036mQWzPXxRNkqEHKVARMQIGoi8O333qz4gMm3m20eHok-ApISqXCgETK__OMJcN8wzpyUxJlceoTHG-LsZsdhgfg",
  },
  {
    name: "Antalya",
    image: "https://img.spotblue.com/app/uploads/2019/12/Antalya-city.jpg.webp",
  },
  {
    name: "Bodrum",
    image:
      "https://reliancetourturkey.com/wp-content/uploads/2024/12/DALL%C2%B7E-2024-12-02-12.08.49-A-photorealistic-landscape-image-of-Bodrum-Turkey.-The-scene-features-the-iconic-Bodrum-Castle-overlooking-a-tranquil-marina-filled-with-luxury-yacht.jpg",
  },
  {
    name: "Kusadasi",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/18/kusadasi.jpg?w=1200&h=700&s=1",
  },
  {
    name: "Bosphorus Cruise",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ef/4b/7e.jpg",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Top <span className="text-blue-600">Destinations</span>
        </h2>
        <p className="text-lg text-gray-600">
          Discover the most beautiful places in Turkey
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {place.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
