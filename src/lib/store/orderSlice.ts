import { OrderSliceType } from "@/lib/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  } as OrderSliceType,
  reducers: {
    updatePromoCode(state, action) {
      state.promocode = action.payload;
      return state;
    },
    changeTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
      return state;
    },
    updateShippingAddress(
      state,
      action: PayloadAction<OrderSliceType["shippingAddress"]>
    ) {
      state.shippingAddress = action.payload;
      return state;
    },
    updateDeliveryType(
      state,
      action: PayloadAction<OrderSliceType["delivery"]>
    ) {
      state.delivery = action.payload;
      return state;
    },
    updateCardDetails(state, action: PayloadAction<OrderSliceType["card"]>) {
      state.card = action.payload;
      return state;
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
