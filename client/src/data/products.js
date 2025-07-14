import { Product } from "../models/product";
import { Currency, currencySymbols } from "../enums/currency_enum";
import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
} from "../assets";

export const products = [
  Product({
    id: 1,
    title: "Poly Edge 550",
    price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item1,
  }),
  Product({
    id: 2,
    title: "Poly Edge E320",
    price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item2,
  }),
  Product({
    id: 3,
    title: "Poly Edge B30",
    price: 210,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item3,
  }),
  Product({
    id: 4,
    title: "Nokia 3210",
    price: 2010,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item4,
  }),
  Product({
    id: 5,
    title: "Blackwire 52xx",
    price: 29,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item5,
  }),
  Product({
    id: 6,
    title: "Voyager 43xx",
    price: 29,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item6,
  }),
  Product({
    id: 7,
    title: "Savi 72xx",
    price: 29,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item7,
  }),
  Product({
    id: 8,
    title: "Voyager Free 60",
    price: 29,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item8,
  }),
];
