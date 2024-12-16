import { CartItemType, CartSliceType } from "@/lib/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const updateLocaleStorage = (cartList: CartItemType[]) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    item: null,
  } as CartSliceType,
  reducers: {
    updateCount(state, action: PayloadAction<{ _id: number; num: number }>) {
      const { _id, num } = action.payload;
      const copy = state.cartList.slice();

      state.cartList = copy
        .map((c) => ({ ...c, count: c._id === _id ? c.count + num : c.count }))
        .filter((c) => c.count);

      updateLocaleStorage(state.cartList);
      return state;
    },
    changeModalState(state, action: PayloadAction<CartItemType | null>) {
      state.item = action.payload;
      return state;
    },
    setList(state) {
      const list = JSON.parse(localStorage.getItem("cart") || "[]");
      state.cartList = list as CartItemType[];
      return state;
    },
    addToCart(state, action: PayloadAction<CartItemType>) {
      const { _id, color, size } = action.payload;
      const present = state.cartList.find(
        (c) => c._id == _id && c.color == color && c.size == size
      );
      if (present) {
        state.cartList = state.cartList
          .slice()
          .map((c) => ({ ...c, count: c._id == _id ? c.count + 1 : c.count }));
      } else {
        state.cartList = [...state.cartList, action.payload];
      }

      updateLocaleStorage(state.cartList);
      return state;
    },
  },
});

export default cartSlice;

export const { setList, updateCount, addToCart, changeModalState } =
  cartSlice.actions;
