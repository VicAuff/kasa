import { useState } from "react";
import ArrowRight from "../assets/arrowDroit.svg";
import ArrowLeft from "../assets/arrowGauche.svg";
import "../style/AccomodationAll.css";

const Carousel = ({ accommodationData }) => {
  // Initialiser l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changer l'image actuelle en fonction de la direction
  const changeSlide = (direction) =>
    setCurrentIndex(
      (currentIndex + direction + accommodationData.pictures.length) %
        accommodationData.pictures.length
    );

  // Obtenir l'URL de l'image actuelle
  const imageUrl = accommodationData.pictures[currentIndex];

  // Rendu du composant
  // Bouton pour afficher l'image suivante et précédente
  // Afficher le numéro de l'image actuelle et le nombre total d'images
  return (
    <section
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="Carousel"
    >
      {accommodationData.pictures.length > 1 && (
        <>
          <img
            className="CarouselRight"
            src={ArrowRight}
            alt="Suivant"
            onClick={() => changeSlide(1)}
          />
          <img
            className="CarouselLeft"
            src={ArrowLeft}
            alt="Précédent"
            onClick={() => changeSlide(-1)}
          />
          <p className="Slide">
            {currentIndex + 1} / {accommodationData.pictures.length}
          </p>
        </>
      )}
    </section>
  );
};

export default Carousel;
