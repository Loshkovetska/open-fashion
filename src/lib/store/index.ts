import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import globalSlice from "./globalSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";

const store = () =>
  configureStore({
    reducer: {
      [globalSlice.name]: globalSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [productSlice.name]: productSlice.reducer,
      [orderSlice.name]: orderSlice.reducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
