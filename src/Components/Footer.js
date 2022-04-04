import "../styles/footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const Footer = ({ setNavbarClick }) => {
  return (
    <footer className="total-footer">
      <div className="footer-container">
        <div className="footer">
          <div className="contact-info">
            <div className="area-1">
              <h2>Contato</h2>
              <p>WhatsApp: (95) 99155-6906</p>
              <p>E-mail: pgdasherry@gmail.com</p>
            </div>
            <div className="area-2">
              <h2>Sobre</h2>
              <p>Empreendedora</p>
              <p>Proporcionar combinações, variedades e sabores irresistíveis</p>
              <p>Eventos, festas, brindes, lembrancinhas e consumo</p>
            </div>
            <div className="area-3">
              <h2>Horários de Funcionamento</h2>
              <p>Segunda à Sexta: 09:00 às 19:00</p>
            </div>
            <div className="area-4">
              <h2>Endereço</h2>
              <p>CEP: 69313582</p>
              <p>Roraima, Boa Vista, Caranã</p>
              <p>Rua moysés teixeira hausen, 567</p>
            </div>
          </div>
          <ul className="social-icon">
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.facebook.com/sheypipocasgourmet/?ref=page_internal"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.instagram.com/sheypipocasgourmet_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://api.whatsapp.com/send?phone=5595991556906&text=Ol%C3%A1!%20SheyPipocasGourmet%20agrade%C3%A7e%20seu%20contato.%20Em%20que%20posso%20ajudar%3F&fbclid=IwAR1GsmZ_9b99zB1fh3_0UoeA6HypEf_WUsshAXCZ95iVGMTTSnMuj29KQ5s"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
          <ul className="menu-footer">
            <li className="menu__item" onClick={() => setNavbarClick("Home")}>
              <p className="menu__link">Home</p>
            </li>
            <li className="menu__item" onClick={() => setNavbarClick("Menu")}>
              <p className="menu__link">Menu</p>
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
