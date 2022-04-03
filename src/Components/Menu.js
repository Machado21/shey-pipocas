import "../styles/menu.css";

const Menu = ({ setNavbarClick }) => {
  return (
    <div className="menu">
      <h1 className="menu__title">Menu Pipocas Gourmet</h1>
      <ul className="menu__flavors">
        <li className="menu__flavors-item">
            <h2>Ninho</h2>
            <h2>50g</h2>
            <h2>100g</h2>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
        <li className="menu__flavors-item">
            <p>Ninho</p>
            <p>R$9,20</p>
            <p>R$18,40</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
