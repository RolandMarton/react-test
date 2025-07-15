import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartContext from "../store/cart-context";

const CartContent = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const totalItemsCount = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const totalOrderValue = cartCtx.items.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-content-container">
      <p className="cart-content-items-count">
        You have {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} in
        your cart!
      </p>

      {totalItemsCount !== 0 && (
        <>
          <hr className="divider" />

          <div className="cart-content-header cart-row">
            <span className="col-name">Items</span>
            <span className="col-units">Units</span>
            <span className="col-price">Price</span>
          </div>

          <div className="cart-content-items-list">
            {cartCtx.items.map((item, idx) => (
              <div key={idx} className="cart-content-item-row">
                <div key={idx} className="cart-content-item-row">
                  <span className="col-name">{item.title}</span>
                  <span className="col-units">{item.amount}</span>
                  <span className="col-price">
                    £{(item.price * item.amount).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          <div className="cart-total-row">
            <span>Total Order Value</span>
            <span className="total-value">
              £{totalOrderValue.toLocaleString()}
            </span>
          </div>
        </>
      )}

      <button
        className="checkout-button"
        disabled={totalItemsCount === 0}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartContent;
