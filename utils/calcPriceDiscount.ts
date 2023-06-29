export const calcPriceDiscount = (price: number, discount: number) =>
  +((price / 100) * discount).toFixed(2);
