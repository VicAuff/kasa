import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeGallery from "../components/HomeGallery";
import data from "../data/data";

const Maison = () => {
  return (
    <div className="Maison">
      <Header />
      <HomeBanner />
      <HomeGallery logements={data} />
      <Footer />
    </div>
  );
};

export default Maison;
