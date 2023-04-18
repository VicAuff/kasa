import arrow from "../assets/arrow.svg";
import { useState } from "react";
import "../style/About.css";
import data from "../data/dataAbout";

export default function About() {
  // Cartographier les données pour créer les éléments du composant Collapse
  const aboutItems = data.map((item) => (
    <div className="AboutCollapseItem" key={item.id}>
      <Collapse title={item.title} content={item.content} />
    </div>
  ));

  // Renvoyer les éléments de Collapse dans un conteneur
  return <div className="AboutCollapse">{aboutItems}</div>;
}

function Collapse({ title, content }) {
  // Utilisation useState pour gérer l'état du composant
  const [isCollapsed, setIsCollapsed] = useState(true);
  // Fonction pour basculer l'état de isCollapsed
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  // Classes CSS pour la flèche
  const ArrowClass = `AboutArrow ${
    isCollapsed ? "AboutArrowDown" : "AboutArrowUp"
  }`;
  // Classes CSS pour le contenu
  const ContentClass = `AboutCollapseContent ${
    isCollapsed ? "hidden" : "visible"
  }`;

  // Fonction pour rendre le contenu en fonction du type de données
  const renderContent = () =>
    Array.isArray(content) ? (
      content.map((item, index) => <p key={index}>{item}</p>)
    ) : (
      <p>{content}</p>
    );

  // Rendu du composant avec le contenu et les événements
  return (
    <div className="Collapse">
      <h3 className="CollapseTitle" onClick={toggleCollapse}>
        {title}
        <img className={ArrowClass} src={arrow} alt="Afficher" />
      </h3>
      <div className={ContentClass}>{renderContent()}</div>
    </div>
  );
}
