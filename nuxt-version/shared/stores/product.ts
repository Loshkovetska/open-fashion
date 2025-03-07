import goods from "@/shared/constants/goods";
import type { ProductSliceType } from "@/shared/type";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () =>
    ({
      goodsList: [],
      filterGoods: [],
      filters: {
        sortBy: "New",
        dir: "down",
        view: "grid",
        q: "",
      },
      good: undefined,
    } as ProductSliceType),
  actions: {
    getProduct(action: number) {
      this.good = goods.find((c) => c._id === action);
    },
    getAllProducts(action?: string) {
      if (!action) {
        this.goodsList = goods;
        this.filterGoods = goods;

        return;
      }
      const goodsByQuery = goods.filter((g) =>
        g.title.toLocaleLowerCase().includes(action?.toLowerCase() || "")
      );

      this.filters = { ...this.filters, q: action };
      this.goodsList = goodsByQuery;
      this.filterGoods = goodsByQuery;
    },
    updateFilters(action: ProductSliceType["filters"]) {
      this.filters = action;

      switch (action.sortBy) {
        case "New":
          this.filterGoods = this.goodsList.slice().filter((a) => a.isNew);
          break;
        case "Rating":
          this.filterGoods = this.goodsList.slice().sort((a, b) => {
            return action.dir == "down" ? a.rate - b.rate : b.rate - a.rate;
          });
          break;
        case "Price":
          this.filterGoods = this.goodsList.slice().sort((a, b) => {
            return action.dir == "down" ? a.price - b.price : b.price - a.price;
          });
          break;
      }
    },
  },
});
