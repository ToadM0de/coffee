
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import menuItems from "../data/menu.json";

function money(amount) {
  return `$${amount.toFixed(2)}`;
}

export default function Menu() {
  const { addItem } = useContext(CartContext);
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section className="menuItems">
      <div className="sectionHeading">
        <div>
          <h2 id="menuHeading">Menu</h2>
        </div>
      </div>

      {categories.map((category) => (
        <div className="menuCategory" key={category}>
          <h3>{category}</h3>
          <div className="menuList">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <article className="menuItem" key={item.id}>
                  <div className="menuItemInfo">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <strong>{money(item.price)}</strong>
                  </div>

                  <button
                    className="addBtn"
                    type="button"
                    onClick={() => addItem(item)}
                  >
                    Add to order <span>+</span>
                  </button>
                </article>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
