import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseTurkey from "./components/WhyChoose";
import Destinations from "./components/Destinations";
import FeaturedPackages from "./components/FeaturedPackages";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseTurkey />
      <Destinations />
      <FeaturedPackages />
      <Testimonials />
      <Map />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
