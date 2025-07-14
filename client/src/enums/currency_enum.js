// This behaves like an enum, but in reality typescript has enum
export const Currency = {
  POUNDS: "GBP",
  DOLLAR: "USD",
  FORINT: "HUF",
};

export const currencySymbols = {
  [Currency.POUNDS]: "£",
  [Currency.DOLLAR]: "$",
  [Currency.FORINT]: "Ft",
};
