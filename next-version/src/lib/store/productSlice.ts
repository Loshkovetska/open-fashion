import goods from "@/lib/constants/mock";
import { ProductSliceType } from "@/lib/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    goodsList: [],
    filterGoods: [],
    filters: {
      sortBy: "New",
      dir: "down",
      view: "grid",
      q: "",
    },
    good: undefined,
  } as ProductSliceType,
  reducers: {
    setGood(state, action) {
      state.good = goods.find((c) => c._id === action.payload);
      return state;
    },
    setAllGoods(state, action: PayloadAction<string | undefined>) {
      if (!action.payload) {
        state.goodsList = goods;
        state.filterGoods = goods;

        return state;
      }
      const goodsByQuery = goods.filter((g) =>
        g.title
          .toLocaleLowerCase()
          .includes(action.payload?.toLowerCase() || "")
      );
      state.filters.q = action.payload;
      state.goodsList = goodsByQuery;
      state.filterGoods = goodsByQuery;
      return state;
    },
    updateFilters(state, action: PayloadAction<ProductSliceType["filters"]>) {
      state.filters = action.payload;

      switch (action.payload.sortBy) {
        case "New":
          state.filterGoods = state.goodsList.slice().filter((a) => a.isNew);
          break;
        case "Rating":
          state.filterGoods = state.goodsList.slice().sort((a, b) => {
            return action.payload.dir == "down"
              ? a.rate - b.rate
              : b.rate - a.rate;
          });
          break;
        case "Price":
          state.filterGoods = state.goodsList.slice().sort((a, b) => {
            return action.payload.dir == "down"
              ? a.price - b.price
              : b.price - a.price;
          });
          break;
      }

      return state;
    },
  },
});

export const { setAllGoods, updateFilters, setGood } = productSlice.actions;

export default productSlice;
