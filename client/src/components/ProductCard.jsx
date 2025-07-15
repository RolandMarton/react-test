import { useState, useMemo } from "react";

import { tooltip_static, tooltip_hover } from "../assets";
import { formatPrice } from "../utils/formatter";
import { Tooltip } from "./Tooltip";

export const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  /*
  To prevent recalculations every render - value is memoized
  */
  const formattedPrice = useMemo(() => {
    return formatPrice({
      num: props.price,
      currency: props.currency,
      showDecimals: false,
    });
  }, [props.price, props.currency]);

  const formattedOriginalPrice = useMemo(() => {
    if (props.original_price != undefined && props.original_price != null) {
      return formatPrice({
        num: props.original_price,
        currency: props.currency,
        showDecimals: false,
      });
    }
    return null;
  }, [props.original_price, props.currency]);

  return (
    <div className="product_card">
      <img
        className="product_tooltip"
        src={isHovered ? tooltip_hover : tooltip_static}
        alt="Tooltip"
        draggable="false"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && <Tooltip {...props} />}

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
