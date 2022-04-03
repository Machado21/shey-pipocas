import "../styles/menu.css";

const Menu = ({ setNavbarClick }) => {
  return (
    <div className="menu">
      <h1 className="menu__title">Menu Pipocas Gourmet</h1>
      <table className="menu__flavors">
        <tr className="menu__flavors-item">
            <th>Sabor</th>
            <th>50g</th>
            <th>100g</th>
        </tr>
        <tr className="menu__flavors-item">
            <td>Ninho</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
        <tr className="menu__flavors-item">
            <td>Paçoca</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
        <tr className="menu__flavors-item">
            <td>Nutela</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
        <tr className="menu__flavors-item">
            <td>Ovomaltine</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
        <tr className="menu__flavors-item">
            <td>Maracujá</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
        <tr className="menu__flavors-item">
            <td>Oreo</td>
            <td>R$9,20</td>
            <td>R$18,40</td>
        </tr>
      </table>
    </div>
  );
};

export default Menu;
