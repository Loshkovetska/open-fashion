import type { CartItemType, CartSliceType } from "@/shared/type";
import { defineStore } from "pinia";

const updateLocaleStorage = (cartList: CartItemType[]) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

export const useCartStore = defineStore("cart", {
  state: () => ({ cartList: [], item: null } as CartSliceType),
  actions: {
    updateCount(action: { _id: number; num: number }) {
      const { _id, num } = action;
      const copy = this.cartList.slice();

      this.cartList = copy
        .map((c) => ({ ...c, count: c._id === _id ? c.count + num : c.count }))
        .filter((c) => c.count);

      updateLocaleStorage(this.cartList);
    },

    changeModalState(action: CartItemType | null) {
      this.item = action;
    },

    setList() {
      const list = JSON.parse(localStorage.getItem("cart") || "[]");
      this.cartList = list as CartItemType[];
    },
    addToCart(action: CartItemType) {
      const { _id, color, size } = action;
      const present = this.cartList.find(
        (c) => c._id == _id && c.color == color && c.size == size
      );
      if (present) {
        this.cartList = this.cartList
          .slice()
          .map((c) => ({ ...c, count: c._id == _id ? c.count + 1 : c.count }));
      } else {
        this.cartList = [...this.cartList, action];
      }

      updateLocaleStorage(this.cartList);
    },
  },
});
