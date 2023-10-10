import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    shippingAddress: null,
    promocode: "",
    delivery: {
      title: "Pickup at store",
      price: "FREE",
    },
    card: null,
    currentTab: 0,
  },
  reducers: {
    updatePromoCode(state, action) {
      state.promocode = action.payload;
    },
    changeTab(state, action) {
      state.currentTab = action.payload;
    },
    updateShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
    updateDeliveryType(state, action) {
      state.delivery = action.payload;
    },
    updateCardDetails(state, action) {
      state.card = action.payload;
    },
  },
});

export default orderSlice;

export const {
  updatePromoCode,
  changeTab,
  updateShippingAddress,
  updateDeliveryType,
  updateCardDetails,
} = orderSlice.actions;
