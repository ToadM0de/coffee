import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="container">
        <section className="intro">
          <h1>Order some coffee</h1>
          <p>Oh yum yum I could really use a coffee rn</p>
        </section>

        <div className="grid">
          <Menu />
          <OrderSummary />
        </div>
      </main>
      <footer className="footer">@2026 footer</footer>
    </div>
  );
}
