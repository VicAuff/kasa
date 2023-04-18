import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../style/Header.css";

// Rendu du composant Header & NavBar
function Header() {
  return (
    <header className="Header">
      <NavLink exact="true" to="/">
        <img src={logo} className="HeaderLogo" alt="Logo" />
      </NavLink>
      <nav className="HeaderNav">
        <ul>
          <li className="HeaderNavItem">
            <NavLink exact="true" to="/" className="ActiveLink">
              Accueil
            </NavLink>
          </li>
          <li className="HeaderNavItem">
            <NavLink to="/about" className="ActiveLink">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
