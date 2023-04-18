import React from "react";
import logo from "../assets/logoFooter.svg";
import "../style/Footer.css";

// Rendu du composant Footer
function Footer() {
  return (
    <footer className="Footer">
      <img className="FooterLogo" src={logo} alt="Logo Kasa" />
      <p className="FooterText">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
