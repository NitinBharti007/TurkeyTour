import React from "react";

const reviews = [
  { name: "Sarah Khan", text: "Amazing experience! Everything was well-organized and seamless.", img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" },
  { name: "John Smith", text: "Loved every moment! The best tour I've ever been on.", img: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" },
  { name: "Aisha Patel", text: "Incredible service and beautiful destinations!", img: "https://cdn4.vectorstock.com/i/1000x1000/78/48/female-avatar-icon-young-attractive-woman-vector-14807848.jpg" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">What Our <span className="text-blue-600">Customers</span> Say</h2>
        <p className="text-lg text-gray-600">Read real reviews from travelers who booked with us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <img src={review.img} alt={review.name} className="w-16 h-16 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-700">{review.text}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
