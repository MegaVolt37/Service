import { defineStore } from "pinia";

export const productsStore = defineStore("products", {
  state: () => ({ cartItems: [], name: "Eduardo", count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addToCart(item: object) {
      console.log(item);
    },
    increment() {
      this.count++;
    },
  },
});
