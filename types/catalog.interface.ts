export interface ICatalog {
  id: number,
  name: string,
  items?: ICatalog[],
}
