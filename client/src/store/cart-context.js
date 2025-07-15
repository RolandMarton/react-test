/* eslint-disable no-unused-vars */
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  resetState: () => {},
});

export default CartContext;
