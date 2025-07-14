import { Product } from "../models/product";
import { Currency } from "../enums/currency_enum";

export const products = [
  Product({ id: 1, title: "Poly Edge 550", price: 30, currency: Currency.POUNDS }),
  Product({ id: 2, title: "Poly Edge E320", price: 30, currency: Currency.POUNDS }),
  Product({ id: 3, title: "Poly Edge B30", price: 210, currency: Currency.POUNDS }),
  Product({ id: 4, title: "Nokia 3210", price: 2010, currency: Currency.POUNDS }),
  Product({ id: 5, title: "Blackwire 52xx", price: 29, currency: Currency.POUNDS }),
  Product({ id: 6, title: "Voyager 43xx", price: 29, currency: Currency.POUNDS }),
  Product({ id: 7, title: "Savi 72xx", price: 29, currency: Currency.POUNDS }),
  Product({ id: 8, title: "Voyager Free 60", price: 29, currency: Currency.POUNDS }),
];
