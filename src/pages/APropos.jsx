import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import AboutBanner from "../components/AboutBanner";

const APropos = () => {
  return (
    <div className="About">
      <Header />
      <AboutBanner />
      <About />
      <Footer />
    </div>
  );
};

export default APropos;
