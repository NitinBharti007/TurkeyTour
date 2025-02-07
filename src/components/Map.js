import React from "react";

const Map = () => {
  return (
    <section id="map" className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Explore <span className="text-blue-600">Turkey</span></h2>
      <div className="w-full h-96">
        <iframe
          title="Turkey Map"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932448.1585851063!2d28.63481389859279!3d39.92077715937052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac36fd1555555%3A0x23c5c6dc1cd1114b!2sTurkey!5e0!3m2!1sen!2s!4v1646256880000!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
