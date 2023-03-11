import "./Header.scss";
import React from "react";
import logo from "../../assets/logos/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Codenected Logo" />
      <nav className="header__nav">
        <ul className="header__list-items">
          <li className="header__list-item">
            <a className="header__list-item-link" href="index.html">
              Home
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__list-item-link" href="about.html">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
