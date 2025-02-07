import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Contact <span className="text-blue-600">Us</span></h2>
      <p className="text-lg text-gray-600">Have questions? We're here to help!</p>

      {/* Booking Form */}
      <form className="mt-6 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg mb-4 border" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg mb-4 border" required />
        <textarea placeholder="Your Message" className="w-full p-3 rounded-lg mb-4 border h-32" required></textarea>
        <button className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-yellow-400">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
