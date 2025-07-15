import { useContext } from "react";
import { cart } from "../assets";
import CartContext from "../store/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalItemsCount = cartCtx.items
    .map((el) => el.amount)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  console.log(cartCtx.items);

  return (
    <header className="header_container">
      <h6 className="header_title">HALLO WORLD</h6>
      <div className="shopping_cart_container">
        <img src={cart} alt="Shopping cart" draggable="false" />
        <p className="shopping_cart_text">Shopping Cart</p>

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
