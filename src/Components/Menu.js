import "../styles/menu.css";

const Menu = ({ setNavbarClick }) => {
  return (
    <div className="menu-table">
      <h1 className="menu__title">Menu Pipocas Gourmet</h1>
      {/* Colocar sabores em uma linha 
      fazer uma tabela apenas com peso e valor */}
      <h2>Sabores</h2>
      <div className="div__flavors">
        <div>Ninho</div>
        <div>Paçoca</div>
        <div>Nutella</div>
        <div>Ovomaltine</div>
        <div>Maracujá</div>
        <div>Oreo</div>
      </div>
      <h3>Preços</h3>
      <table className="menu__flavors">
        <th className="weight__table">
          <tr className="title__table">Peso</tr>
          <tr>30g</tr>
          <td>40g</td>
          <tr>50g</tr>
          <tr>60g</tr>
          <tr>70g</tr>
          <tr>80g</tr>
          <tr>90g</tr>
          <tr>100g</tr>
        </th>
        <th className="value__table">
          <tr className="title__table">Valor</tr>
          <tr>R$5,52</tr>
          <tr>R$7,36</tr>
          <tr>R$9,20</tr>
          <tr>R$11,04</tr>
          <tr>R$12,88</tr>
          <tr>R$14,72</tr>
          <tr>R$16,56</tr>
          <tr>R$18,40</tr>
        </th>
      </table>
    </div>
  );
};

export default Menu;
