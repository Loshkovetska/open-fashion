import { createSlice } from "@reduxjs/toolkit";
import goods from "../mocks/goods";

const productSlice = createSlice({
  name: "products",
  initialState: {
    goodsList: Array(),
    filters: {
      sortBy: "New",
      dir: "down",
      view: "grid",
    },
    good: null,
  },
  reducers: {
    setGood(state, action) {
      state.good = state.goodsList.find((c) => c._id == action.payload);
    },
    setAllGoods(state) {
      state.goodsList = goods;
    },
    updateFilters(state, action) {
      state.filters = action.payload;

      switch (state.filters.sortBy) {
        case "New":
          state.goodsList = goods.filter((a: any) => a.isNew);
          break;
        case "Rating":
          state.goodsList = goods.slice().sort((a: any, b: any) => {
            return state.filters.dir == "down"
              ? a.rate - b.rate
              : b.rate - a.rate;
          });
          break;
        case "Price":
          state.goodsList = goods.slice().sort((a: any, b: any) => {
            return state.filters.dir == "down"
              ? a.price - b.price
              : b.price - a.price;
          });
          break;
      }
    },
  },
});

export const { setAllGoods, updateFilters, setGood } = productSlice.actions;

export default productSlice;
