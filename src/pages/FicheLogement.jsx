import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import Header from "../components/Header";
import AccomodationCarousel from "../components/AccomodationCarousel";
import AccomodationMain from "../components/AccomodationMain";
import Footer from "../components/Footer";

const FicheLogement = ({ history }) => {
  // Récupération de l'id du logement depuis les paramètres de l'URL
  const { id } = useParams();

  // Gére le state pour le logement actuel
  const [dataCurrentAccomodation, setDataCurrentAccomodation] = useState(null);

  // Utilisation de l'effect pour MAJ le logement actuel lors du changement d'ID
  useEffect(() => {
    // Trouver le logement correspondant à l'ID
    const currentData = data.find((data) => data.id === id);

    // MAJ du state du logement actuel
    setDataCurrentAccomodation(currentData);
  }, [id]);

  return (
    <>
      <Header />
      {dataCurrentAccomodation && (
        <>
          <AccomodationCarousel accommodationData={dataCurrentAccomodation} />
          <AccomodationMain accommodation={dataCurrentAccomodation} />
        </>
      )}
      <Footer />
    </>
  );
};

export default FicheLogement;
