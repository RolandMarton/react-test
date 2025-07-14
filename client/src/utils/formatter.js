export function formatPrice({
  num,
  currency,
  locale = "en-GB",
  showDecimals = true,
}) {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: showDecimals ? undefined : 0,
      maximumFractionDigits: showDecimals ? undefined : 0,
    }).format(num);
  } catch (error) {
    console.warn("Invalid currency or number format:", error);
    return num;
  }
}
