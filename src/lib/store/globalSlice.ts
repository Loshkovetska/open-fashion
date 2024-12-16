import { GlobalSliceType } from "@/lib/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isMenuOpen: false,
    isSearchOpen: false,
    isGalleryOpen: false,
    isCartOpen: false,
  } as GlobalSliceType,
  reducers: {
    changeDialogState(
      state,
      action: PayloadAction<
        "isMenuOpen" | "isSearchOpen" | "isGalleryOpen" | "isCartOpen"
      >
    ) {
      state[action.payload] = !state[action.payload];
    },
  },
});

export default globalSlice;

export const { changeDialogState } = globalSlice.actions;
