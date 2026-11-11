
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function OrderSummary() {
  const {
    cart,
    removeItem,
    changeQuantity,
    clearCart,
    subtotal,
  } = useContext(CartContext);

  const [confirmation, setConfirmation] = useState("");

  // Calculate tax and total
  const taxRate = 0.07;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  // Format prices
  function money(amount) {
    return `$${amount.toFixed(2)}`;
  }

  // Place order
  function placeOrder() {
    if (cart.length === 0) return;

    setConfirmation(`Your total is ${money(total)}.`);
    clearCart();
  }

  return (
    <div className="orderCard" id="orderSummary">
      <h2>Order</h2>

      {confirmation && (
        <div className="confirmation" role="status">
          {confirmation}
        </div>
      )}

      {cart.length === 0 ? (
        <div className="emptyOrder">
          <h3>No order yet</h3>
        </div>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((item) => (
              <article className="cartItem" key={item.id}>
                <div className="cartItemTop">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{money(item.price)} each</p>
                  </div>

                  <strong>
                    {money(item.price * item.quantity)}
                  </strong>
                </div>

                <div className="cartItemBottom">
                  <div className="quantity">
                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="removeBtn"
                    type="button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="total">
            <div>
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>

            <div>
              <span>Tax (7%)</span>
              <span>{money(taxAmount)}</span>
            </div>

            <div className="grandTotal">
              <strong>Total</strong>
              <strong>{money(total)}</strong>
            </div>
          </div>

          <button
            className="placeOrderButton"
            type="button"
            onClick={placeOrder}
          >
            Place order: {money(total)}
          </button>
        </>
      )}
    </div>
  );
}
