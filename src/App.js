import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Maison";
import Error from "./pages/Erreur";
import About from "./pages/APropos";
import Accomodation from "./pages/FicheLogement";

// Configuration des routes pour les différentes pages
  // Utilisation de BrowserRouter pour gérer la navigation
    // Route pour la page d'accueil
    // Route pour la page À propos
    // Route pour la page Fiche Logement avec un paramètre d'identifiant
    // Route pour la page d'erreur (404) lorsque le chemin ne correspond à aucune route définie
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
