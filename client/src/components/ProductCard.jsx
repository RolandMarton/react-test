import { useState, useMemo, useRef, useContext } from "react";

import { tooltip_static, tooltip_hover } from "../assets";
import { formatPrice } from "../utils/formatter";
import { Tooltip } from "./Tooltip";

import CartContext from "../store/cart-context";

export const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState("tooltip-right");

  const cardRef = useRef(null);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      if (!cardRef.current) {
        console.log("Not current");
        return;
      }

      const rect = cardRef.current.getBoundingClientRect();
      const tooltipWidth = 350;
      const screenWidth = window.innerWidth;

      if (screenWidth - rect.right < tooltipWidth) {
        if (rect.left > tooltipWidth) {
          setTooltipPosition("tooltip-left");
        } else {
          setTooltipPosition("tooltip-bottom");
        }
      } else {
        setTooltipPosition("tooltip-right");
      }
    }, 0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTooltipPosition("tooltip-right");
  };

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
    <div className="product_card" ref={cardRef}>
      <img
        className="product_tooltip"
        src={isHovered ? tooltip_hover : tooltip_static}
        alt="Tooltip"
        draggable="false"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && <Tooltip positionClass={tooltipPosition} {...props} />}

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

      <button
        type="button"
        onClick={addToCartHandler}
        className="add_to_cart_button"
      >
        Add to Cart
      </button>
    </div>
  );
};
