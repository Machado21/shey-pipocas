import "../styles/menu.css";

const Menu = ({ setNavbarClick }) => {
  return (
    <div className="menu-table">
      <h1 className="menu__title">Menu Pipocas Gourmet</h1>
      <table className="menu__flavors">
        <thead>
          <tr className="table__head">
            <th>Sabor</th>
            <th>30g</th>
            <th>40g</th>
            <th>50g</th>
            <th>60g</th>
            <th>70g</th>
            <th>80g</th>
            <th>90g</th>
            <th>100g</th>
          </tr>
        </thead>
        <tbody>
          <tr className="menu__flavors-item">
            <td>Ninho</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
          <tr className="menu__flavors-item">
            <td>Paçoca</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
          <tr className="menu__flavors-item">
            <td>Nutela</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
          <tr className="menu__flavors-item">
            <td>Ovomaltine</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
          <tr className="menu__flavors-item">
            <td>Maracujá</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
          <tr className="menu__flavors-item">
            <td>Oreo</td>
            <td>R$5,52</td>
            <td>R$7,36</td>
            <td>R$9,20</td>
            <td>R$11,04</td>
            <td>R$12,88</td>
            <td>R$14,72</td>
            <td>R$16,56</td>
            <td>R$18,40</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
