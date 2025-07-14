import { formatPrice } from "../utils/formatter";

export const ProductCard = (props) => {
  const formattedPrice = formatPrice({
    num: props.price,
    currency: props.currency,
    showDecimals: false,
  });

  let formattedOriginalPrice;
  if (props.original_price != undefined && props.original_price != null) {
    formattedOriginalPrice = formatPrice({
      num: props.original_price,
      currency: props.currency,
      showDecimals: false,
    });
  }

  return (
    <div className="product_card">
      <img
        className="product_image"
        src={props.img}
        alt={props.title}
        draggable="false"
      />

      {formattedOriginalPrice != null && formattedOriginalPrice != undefined ? (
        <span className="product_title_container">
          <h6 className="product_title">{props.title}</h6>
          <p className="product_price">{formattedOriginalPrice}</p>
        </span>
      ) : (
        <h6 className="product_title">{props.title}</h6>
      )}

      <p className="product_price">
        <strong>{formattedPrice}</strong>
      </p>
      <button type="button" className="add_to_cart_button">
        Add to Cart
      </button>
    </div>
  );
};
