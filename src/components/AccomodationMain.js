import React from "react";
import GreyStar from "../assets/GreyStar.svg";
import RedStar from "../assets/RedStar.svg";
import AccomodationCollapse from "../components/AccomodationCollapse";
import "../style/AccomodationAll.css";

const Accommodation = ({ accommodation }) => {
  // Décomposition du nom de l'hôte
  const hostName = accommodation.host.name.split(" ");
  // Récupération de la note de l'hôte
  const rating = accommodation.rating;

  // Fonction pour générer les tags button
  const renderTags = () => {
    return accommodation.tags.map((tag, index) => (
      <button key={index}>{tag}</button>
    ));
  };

  // Fonction pour générer les étoiles de notation
  const renderRatingStars = () => {
    return [...Array(5)].map((star, index) => {
      const ratingValue = index + 1;
      return (
        <img
          key={index}
          src={ratingValue <= rating ? RedStar : GreyStar}
          alt="Note globale de l'hôte"
        />
      );
    });
  };

  // Rendu du composant
  return (
    <>
      <main>
        <div className="AccomodationContent">
          <div className="AccomodationContentInfos">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
            <div>{renderTags()}</div>
          </div>
          <div className="AccomodationContentHost">
            <div className="AccomodationEnglobe">
              <div className="AccomodationContentHostName">
                <span>{hostName[0]}</span>
                <span>{hostName[1]}</span>
              </div>
              <img
                className="AccomodationHostPicture"
                src={accommodation.host.picture}
                alt="Hôte de ce logement"
              />
            </div>
            <div className="AccomodationContentHostStars">
              {renderRatingStars()}
            </div>
          </div>
        </div>
      </main>
      <AccomodationCollapse id={accommodation.id} />
    </>
  );
};

export default Accommodation;
