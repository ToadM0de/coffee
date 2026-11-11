import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Header() {
  const { itemCount } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <a className="brand" href="/">
      </a>

      <div className="actiona">
        <a className="cart" href="#orderSummery">
          Your order <span className="cartOrder">{itemCount}</span>
        </a>
        <button className="themeBtn" onClick={toggleTheme} type="button">
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </header>
  );
}
