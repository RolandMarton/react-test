import CartContent from "./CartContent";

export const Cart = (props) => {
  return (
    <>
      <div className="shopping_cart_inner">
        <img src={props.cart} alt="Shopping cart" draggable="false" />
        <p className="shopping_cart_text">Shopping Cart</p>
      </div>
      {props.isActivated && <CartContent />}
    </>
  );
};
