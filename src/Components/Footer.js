import "../styles/footer.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = ({ setNavbarClick }) => {
  return (
    <footer className="total-footer">
      <div className="footer-container">
        <div className="footer">
          <ul className="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="/">
                <BsFacebook />
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="/">
                <BsTwitter />
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="/">
                <BsLinkedin />
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu__item" onClick={() => setNavbarClick("Home")}>
              <p className="menu__link">Home</p>
            </li>
            <li className="menu__item" onClick={() => setNavbarClick("Sobre")}>
              <p className="menu__link">Sobre</p>
            </li>
            <li className="menu__item" onClick={() => setNavbarClick("Fotos")}>
              <p className="menu__link">Fotos</p>
            </li>
            <li className="menu__item" onClick={() => setNavbarClick("Contatos")}>
              <p className="menu__link">Contatos</p>
            </li>
          </ul>
          <p>&copy;Rodrigues Desenvolvimento</p>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
