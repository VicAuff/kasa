import React from "react";
import "../style/AboutBanner.css";
import AboutBannerPicture from "../assets/imgAPropos.png";

 // Rendu du composant de la bannière
function AboutBanner() {
  return (
    // Section de la bannière À propos
    <section className="AboutBanner">
      <img
        src={AboutBannerPicture}
        alt="Bannière"
        className="AboutBannerPicture"
      />
    </section>
  );
}

export default AboutBanner;
