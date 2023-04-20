export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  reviews?: [],
  rating: number,
  images: string[],
}