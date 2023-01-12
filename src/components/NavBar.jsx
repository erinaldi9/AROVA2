import React from "react";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./styles/NavBar.css";

const NavBar = ({ background }) => {
  const brand =
    "https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png";
  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
          <nav>
            <ul className="nav-container">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li className="products-item">
                <a href="/">
                  Productos <span className="arrow"></span>
                </a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </nav>

          <div className="logo-container">
            <img
              src="assets/img/logo terminado.jpg"
              alt="logo pagina"
              height="250"
              width="250"
            />
          </div>

          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar.jsx;
