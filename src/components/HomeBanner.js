import React from "react";
import "../style/HomeBanner.css";
import HomePicture from "../assets/imgHomeBanner.png";

// Rendu du composant de la bannière sur la page d'accueil
function HomeBanner() {
  return (
    <section className="BannerContainer">
      <div className="BannerOverlay"></div>
      <img src={HomePicture} alt="Bannière" className="BannerImage" />
      <div className="BannerTextContainer">
        <p className="BannerText">Chez vous, partout et ailleurs</p>
      </div>
    </section>
  );
}

export default HomeBanner;
