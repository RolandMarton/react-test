import { useContext, useState } from "react";

import { cart } from "../assets";
import { Cart } from "./index.js";

import CartContext from "../store/cart-context";

const Header = () => {
  const [isActivated, setIsActivated] = useState(false);

  function toggleActivation() {
    return setIsActivated(!isActivated);
  }

  const cartCtx = useContext(CartContext);
  const totalItemsCount = cartCtx.items
    .map((el) => el.amount)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  return (
    <header className="header_container">
      <h6 className="header_title">HALLO WORLD</h6>
      <div className="shopping_cart_container" onClick={toggleActivation}>
        <Cart cart={cart} isActivated={isActivated} />

        {totalItemsCount > 0 && (
          <div className="shopping_cart_item_count_container">
            <p className="shopping_cart_item_count">{totalItemsCount}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
