import React, { useEffect, useState } from "react";

const packages = [
  {
    name: "Turkey - 6 Nights, 7 Days",
    price: "₹1,31,500 INR",
    img: "https://www.holidaymonk.com/wp-content/uploads/2023/10/Turkey-Tour-Package.jpg",
    details: [
      "2N Stay in Istanbul in 4 Star Hotel",
      "2N Stay in Cappadocia in 3 Star Hotel",
      "2N Stay in Antalya in 4 Star Hotel",
      "06 Open Buffet Breakfasts",
      "Evening Bosphorus Cruise with Dinner & Soft Drinks",
      "Full Day Istanbul City Tour (Entrance Excluded)",
      "Full Day Cappadocia North Tour",
      "Full Day Pamukkale & Hierapolis Tour",
      "All Airport Transfers on Private Basis",
      "All Tours on SIC Basis",
      "Domestic & International Flights Included",
      "Visa Included",
    ],
    validity: "Valid Till: 01 FEB 2025 - 31 MAR 2025",
    contact: {
      phone: "+91 9205777097",
      email: "info@holidayadvisor.co.in",
    },
  },
  {
    name: "Luxury Europe Tour - 10 Days",
    price: "₹2,49,000 INR",
    img: "https://www.trips.pk/main-root/transferImages/01HYJNPE21J7TCZJ5MTTAH2JNS-Best-of-Eastern-&-Western-Europe-Tour.webp",
    details: [
      "3N Stay in Paris in 5 Star Hotel",
      "2N Stay in Rome in 5 Star Hotel",
      "2N Stay in Venice in 4 Star Hotel",
      "3N Stay in Switzerland in Luxury Chalet",
      "Daily Breakfast & 4 Dinners",
      "Seine River Cruise & Eiffel Tower Visit",
      "Colosseum & Vatican City Tour",
      "Swiss Alps Excursion & Jungfraujoch Tour",
      "All Airport Transfers on Private Basis",
      "All Tours on SIC Basis",
      "International Flights Included",
      "Schengen Visa Included",
    ],
    validity: "Valid Till: 01 APR 2025 - 30 JUN 2025",
    contact: {
      phone: "+91 9823445566",
      email: "info@luxurytours.com",
    },
  },
];

const FeaturedPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    if (selectedPackage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedPackage]);

  return (
    <section id="packages" className="py-12 bg-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Featured <span className="text-blue-600">Packages</span>
        </h2>
        <p className="text-lg text-gray-600">
          Choose the perfect travel package for your dream trip.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={pkg.img}
              alt={pkg.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {pkg.name}
              </h3>
              <p className="text-lg font-bold text-yellow-500">{pkg.price}</p>

              <ul className="list-disc text-gray-700 mt-4 ml-5 space-y-2">
                {pkg.details.slice(0, 5).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button
                className="mt-4 text-blue-600 underline font-semibold"
                onClick={() => setSelectedPackage(pkg)}
              >
                View More
              </button>

              <p className="mt-4 text-gray-600 font-bold">{pkg.validity}</p>

              {/* Contact Info */}
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">📞 Contact:</p>
                <p className="text-blue-600 font-bold">{pkg.contact.phone}</p>
                <p className="text-blue-600">{pkg.contact.email}</p>
              </div>

              <a
                href="#booking"
                className="mt-4 inline-block bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg mt-24 max-w-xl w-full h-[80vh] p-6 overflow-y-scroll scrollbar-none relative lg:mt-16">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setSelectedPackage(null)}
            >
              &times;
            </button>

            <img
              src={selectedPackage.img}
              alt={selectedPackage.name}
              className="w-full h-56 object-cover rounded"
            />

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              {selectedPackage.name}
            </h3>
            <p className="text-lg font-bold text-yellow-500">
              {selectedPackage.price}
            </p>

            <ul className="list-disc text-gray-700 mt-4 ml-5 space-y-2">
              {selectedPackage.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="mt-4 text-gray-600 font-bold">
              {selectedPackage.validity}
            </p>

            <div className="mt-4">
              <p className="text-gray-800 font-semibold">📞 Contact:</p>
              <p className="text-blue-600 font-bold">
                {selectedPackage.contact.phone}
              </p>
              <p className="text-blue-600">{selectedPackage.contact.email}</p>
            </div>

            <a
              href="#booking"
              className="mt-4 inline-block bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPackages;
