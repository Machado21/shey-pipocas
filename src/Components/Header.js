import "../styles/header.css";

const Header = (props) => {
  return (
    <header className="total-header">
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <img src="/images/logo-shey.jpeg" alt="logo da shey pipocas gourmet" />
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <li
                className="menu-list__item"
                onClick={() => props.setNavbarClick("Sobre")}
              >
                <p className="menu-list__link">Home</p>
              </li>
              <li
                className="menu-list__item"
                onClick={() => props.setNavbarClick("Planos")}
              >
                <p className="menu-list__link">Sobre</p>
              </li>
              <li
                className="menu-list__item"
                onClick={() => props.setNavbarClick("Modelos")}
              >
                <p className="menu-list__link">Fotos</p>
              </li>
              <li
                className="menu-list__item"
                onClick={() => props.setNavbarClick("Contatos")}
              >
                <p className="menu-list__link">Contato</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
