import { formatPrice } from "../utils/formatter";

export const ProductCard = (props) => {
  const formattedPrice = formatPrice({
    num: props.price,
    currency: props.currency,
    showDecimals: false,
  });

  return (
    <div className="product_card">
      <img
        className="product_image"
        src={props.img}
        alt={props.title}
        draggable="false"
      />
      <h6 className="product_title">{props.title}</h6>
      <p className="product_price">
        <strong>{formattedPrice}</strong>
      </p>
      <button type="button" className="add_to_cart_button">
        Add to Cart
      </button>
    </div>
  );
};
