export const formatToCurrency = (price: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "RUB",
  }).format(price);
