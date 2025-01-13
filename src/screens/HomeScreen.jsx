import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceSection from "../sections/Home/ServiceSection";
import Partwo from "../sections/Home/Partwo";
import ProductSection from "../sections/Home/ProductSection";

function HomeScreen() {
  return (
    <div>
      <Header />
      <div className="bg-secondary-light text-black p-3 text-center">
        <p className="text-md font-semibold">
          🎄 is simply dummy text of the printing and typesetting industry.
          Lorem
        </p>
      </div>
      <ServiceSection />
      <Partwo />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default HomeScreen;
