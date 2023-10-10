import { createSlice } from "@reduxjs/toolkit";

const updateLocaleStorage = (cartList: Array<any>) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    cartList: Array(),
    item: null,
    isModalOpen: false,
  },
  reducers: {
    updateCount(state, action) {
      const { _id, method } = action.payload;
      if (method == "minus") {
        state.cartList = state.cartList
          .slice()
          .map((c: any) => {
            if (c._id == _id) {
              if (c.count - 1) {
                c.count--;
              } else {
                return null;
              }
            }
            return c;
          })
          .filter((c) => c);
      } else {
        state.cartList = state.cartList.slice().map((c) => {
          if (c._id == _id) {
            c.count = c.count + 1;
          }

          return c;
        });
      }
      updateLocaleStorage(state.cartList);
    },
    changeModalState(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.item = action.payload;
    },

    changeCartState(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    setList(state) {
      if (localStorage.getItem("cart")) {
        const list = JSON.parse(localStorage.getItem("cart")!);
        if (list) {
          state.cartList = list;
        }
      }
    },
    addToCart(state, action) {
      if (
        state.cartList.find(
          (c) =>
            c._id == action.payload._id &&
            c.color == action.payload.color &&
            c.size == action.payload.size
        )
      ) {
        state.cartList = state.cartList.slice().map((c) => {
          if (
            c._id == action.payload._id &&
            c.color == action.payload.color &&
            c.size == action.payload.size
          ) {
            c.count++;
          }
          return c;
        });
      } else {
        state.cartList = [
          ...state.cartList,
          {
            ...action.payload,
          },
        ];
      }

      updateLocaleStorage(state.cartList);
    },
  },
});

export default cartSlice;

export const {
  changeCartState,
  setList,
  updateCount,
  addToCart,
  changeModalState,
} = cartSlice.actions;
