import React from "react";
import "../style/HomeGallery.css";
import data from "../data/data";
import { Link } from "react-router-dom";

 // Rendu du composant de la la gallery des logements
function Gallery() {
  return (
    <section className="GalleryContainer">
      {data.map((item) => (
        <div className="Card" key={item.id}>
          <Link to={`/accomodation/${item.id}`}>
            <img src={item.cover} alt={item.title} />
            <div className="CardTitle">{item.title}</div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Gallery;
