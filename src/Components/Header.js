import "../styles/header.css";

import { useState, useEffect } from "react";

const Header = ({ setNavbarClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const head = document.querySelector("header");
    if (toggleMenu === true) {
      head.classList.add("active");
    } else {
      head.classList.remove("active");
    }
  }, [toggleMenu]);

  return (
    <header className="container header ">
      <img src="/images/logo.png" alt="logo da shey pipocas gourmet" className="header__logo" />
      <button className="button__mobile" onClick={() => setToggleMenu(!toggleMenu)}>
        <span className="hamburguer"></span>
      </button>
      <nav className="menu">
        <ul className="menu-list">
          <li
            className="menu-list__item"
            onClick={() => {
              setNavbarClick("Home");
              setToggleMenu(!toggleMenu);
            }}
          >
            <a className="menu-list__link">Home</a>
          </li>
          <li
            className="menu-list__item"
            onClick={() => {
              setNavbarClick("Menu");
              setToggleMenu(!toggleMenu);
            }}
          >
            <a className="menu-list__link">Menu</a>
          </li>
          <li
            className="menu-list__item"
            onClick={() => {
              setNavbarClick("Fotos");
              setToggleMenu(!toggleMenu);
            }}
          >
            <a className="menu-list__link">Fotos</a>
          </li>
          <li
            className="menu-list__item"
            onClick={() => {
              setNavbarClick("Contatos");
              setToggleMenu(!toggleMenu);
            }}
          >
            <a className="menu-list__link">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
