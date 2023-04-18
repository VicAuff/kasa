import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../components/Error";

const Erreur = () => {
  return (
    <div className="Error">
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
};

export default Erreur;
