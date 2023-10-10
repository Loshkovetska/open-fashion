import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isMenuOpen: false,
    isSearchOpen: false,
    isFullScreenSliderOpen: false,
  },
  reducers: {
    changeMenuState(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    changeSearchState(state) {
      state.isSearchOpen = !state.isSearchOpen;
    },
    changeFullScreenState(state) {
      state.isFullScreenSliderOpen = !state.isFullScreenSliderOpen;
    },
  },
});

export default globalSlice;

export const {
  changeMenuState,
  changeSearchState,
  changeFullScreenState,
} = globalSlice.actions;
