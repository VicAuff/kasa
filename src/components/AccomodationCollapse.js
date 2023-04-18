import React, { useState, useEffect } from "react";
import data from "../data/data";
import arrow from "../assets/arrow.svg";
import "../style/AccomodationAll.css";

const CollapseAccomodation = ({ id }) => {
  // State
  const [currentData, setCurrentData] = useState(null);
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  const [isEquipmentsCollapsed, setIsEquipmentsCollapsed] = useState(true);

  // Effect pour récupérer la data
  useEffect(() => {
    const currentAccommodation = data.find((item) => item.id === id);
    setCurrentData(currentAccommodation);
  }, [id]);

  // Fonctions pour gérer l'affichage du contenu
  const toggleDescriptionCollapse = () => {
    setIsDescriptionCollapsed(!isDescriptionCollapsed);
  };

  const toggleEquipmentsCollapse = () => {
    setIsEquipmentsCollapsed(!isEquipmentsCollapsed);
  };

  // Classes CSS pour le style des flèches et du contenu
  const ArrowDescriptionClass = `DescriptionArrow ${
    isDescriptionCollapsed ? "DescriptionArrowDown" : "DescriptionArrowUp"
  }`;
  const ContentDescriptionClass = `DescriptionCollapseContent ${
    isDescriptionCollapsed ? "DescriptionCollapseContentHidden" : ""
  }`;

  const ArrowEquipmentsClass = `DescriptionArrow ${
    isEquipmentsCollapsed ? "DescriptionArrowDown" : "DescriptionArrowUp"
  }`;
  const ContentEquipmentsClass = `DescriptionCollapseContent DescriptionCollapseEquipments ${
    isEquipmentsCollapsed ? "DescriptionCollapseContentHidden" : ""
  }`;

  // Styles pour le contenu
  const contentDescriptionStyle = {
    backgroundColor: isDescriptionCollapsed ? "transparent" : "#f7f7f7",
    borderRadius: isDescriptionCollapsed ? "0" : "0 0 5px 5px",
  };
  const contentEquipmentsStyle = {
    backgroundColor: isEquipmentsCollapsed ? "transparent" : "#f7f7f7",
    borderRadius: isEquipmentsCollapsed ? "0" : "0 0 5px 5px",
  };

  // Rendu du composant
  return (
    <div className="AccomodationEquipment">
      <div className="AccomodationEquipmentItem">
        <div className="CollapseTitle" onClick={toggleDescriptionCollapse}>
          Description{" "}
          <img src={arrow} alt="Fleche" className={ArrowDescriptionClass} />
        </div>
        <div
          className={ContentDescriptionClass}
          style={contentDescriptionStyle}
        >
          {currentData?.description}
        </div>
      </div>
      <div className="AccomodationEquipmentItem">
        <div className="CollapseTitle" onClick={toggleEquipmentsCollapse}>
          Équipements{" "}
          <img src={arrow} alt="Fleche" className={ArrowEquipmentsClass} />
        </div>
        <div className={ContentEquipmentsClass} style={contentEquipmentsStyle}>
          {currentData?.equipments && (
            <ul
              className="EquipmentsList"
              style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}
            >
              {currentData.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapseAccomodation;
