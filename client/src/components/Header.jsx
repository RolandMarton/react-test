import { cart } from "../assets";

const Header = () => {
  return (
    <header className="header_container">
      <h6 className="header_title">HALLO WORLD</h6>
      <div className="shopping_cart_container">
        <img src={cart} alt="Shopping cart" />
        <p className="shopping_cart_text">Shopping Cart</p>
      </div>
    </header>
  );
};

export default Header;
