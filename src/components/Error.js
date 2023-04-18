import React from "react";
import "../style/Error.css";
import { Link } from "react-router-dom";

// Rendu du composant d'erreur de path
function Error() {
  return (
    <section className="NotFound">
      <div>
        <h1 className="NotFoundNumber">404</h1>
        <p className="NotFoundReason">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="NotFoundReturn">
          <Link to="/">Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </section>
  );
}

export default Error;
