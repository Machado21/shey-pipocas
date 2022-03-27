import "../styles/header.css";

const Header = ({ setNavbarClick }) => {
  return (
    <header className="header container">
      <img src="/images/logo.png" alt="logo da shey pipocas gourmet" className="header__logo" />

      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list__item" onClick={() => setNavbarClick("Home")}>
            <a className="menu-list__link">Home</a>
          </li>
          <li className="menu-list__item" onClick={() => setNavbarClick("Sobre")}>
            <a className="menu-list__link">Sobre</a>
          </li>
          <li className="menu-list__item" onClick={() => setNavbarClick("Fotos")}>
            <a className="menu-list__link">Fotos</a>
          </li>
          <li className="menu-list__item" onClick={() => setNavbarClick("Contatos")}>
            <a className="menu-list__link">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
