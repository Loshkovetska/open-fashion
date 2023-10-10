import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [orderSlice.name]:orderSlice.reducer
  },
});

export default store;
