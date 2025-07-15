// Factory function
export function Product({
  id,
  title,
  price,
  original_price,
  currency,
  currency_symbol,
  img,
  description,
  key_features,
}) {
  return {
    id,
    title,
    price,
    original_price,
    currency,
    currency_symbol,
    img,
    description,
    key_features,
  };
}
