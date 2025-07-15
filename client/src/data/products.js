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
    description:
      "Modern desk phone designed for office professionals with mid-range call handling needs.",
    key_features: {
      Lines: "8 lines",
      Display: '3.5" Color',
      Bluetooth: "Yes",
      Connection: "2 x RJ45 (Gigabit Ethernet)",
      USB: "1 x USB-A",
      PoE: "Yes",
    },
  }),
  Product({
    id: 2,
    title: "Poly Edge E320",
    price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item2,
    description:
      "Entry-level desk phone with essential VoIP features and HD audio quality for everyday users.",
    key_features: {
      Lines: "4 lines",
      Display: '2.8" Color',
      Bluetooth: "No",
      Connection: "1 x RJ45 (Fast Ethernet)",
      USB: "1 x USB-C",
      PoE: "Yes",
    },
  }),
  Product({
    id: 3,
    title: "Poly Edge B30",
    price: 210,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item3,
    description:
      "High-end phone suitable for front of house and executive users.",
    key_features: {
      Lines: "12 lines",
      Display: '5" Color',
      Bluetooth: "Yes with Mobile Pairing",
      Connection: " 2 x RJ45 and Wi-FI",
      USB: "2 x USB-C",
      PoE: "Yes",
    },
  }),
  Product({
    id: 4,
    title: "Nokia 3210",
    price: 2010,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item4,
    description:
      "Classic mobile phone reimagined with a retro design, long battery life, and Snake game.",
    key_features: {
      Display: '2.4" TFT',
      Battery: "1200mAh Removable",
      Connectivity: "2G, Bluetooth",
      Storage: "16MB + microSD up to 32GB",
      Extras: "LED torch, FM Radio, Snake game",
    },
  }),
  Product({
    id: 5,
    title: "Blackwire 52xx",
    price: 29,
    original_price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item5,
    description:
      "Wired headset ideal for office use, featuring superior audio quality and all-day comfort.",
    key_features: {
      Connectivity: "USB-A / USB-C",
      Microphone: "Noise-cancelling boom mic",
      Audio: "Stereo with Dynamic EQ",
      "Wearing style": "Over-the-head",
      Compatibility: "PC and Mac",
    },
  }),
  Product({
    id: 6,
    title: "Voyager 43xx",
    price: 29,
    original_price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item6,
    description:
      "Wireless headset with long battery life, perfect for hybrid work and mobile professionals.",
    key_features: {
      Connectivity: "Bluetooth + USB Dongle",
      Range: "Up to 50 meters",
      "Battery life": "24 hours talk time",
      Microphone: "Noise-cancelling with Acoustic Fence",
      Compatibility: "PC, Mac, Mobile",
    },
  }),
  Product({
    id: 7,
    title: "Savi 72xx",
    price: 29,
    original_price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item7,
    description:
      "Professional DECT wireless headset with premium audio and multi-device connectivity.",
    key_features: {
      Connectivity: "DECT + USB + Desk Phone",
      Range: "Up to 180 meters",
      "Battery life": "Up to 13 hours",
      Audio: "Wideband audio with noise canceling",
      Base: "Multi-device switching",
    },
  }),
  Product({
    id: 8,
    title: "Voyager Free 60",
    price: 29,
    original_price: 30,
    currency_symbol: currencySymbols.POUNDS,
    currency: Currency.POUNDS,
    img: item8,
    description:
      "True wireless earbuds designed for professionals on the go with adaptive ANC and touch controls.",
    key_features: {
      Connectivity: "Bluetooth 5.3",
      "Battery life": "Up to 16.5 hours with case",
      "Noise cancellation": "Adaptive ANC",
      Microphone: "Triple-mic array with windsmart",
      Charging: "USB-C and Wireless Charging",
    },
  }),
];
