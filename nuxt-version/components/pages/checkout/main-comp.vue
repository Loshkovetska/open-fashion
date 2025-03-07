<script setup lang="ts">
import DeliveryIcon from "@/components/icons/delivery-icon.vue";
import DiscountIcon from "@/components/icons/discount-icon.vue";
import InputUi from "@/components/ui/input-ui.vue";
import { useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import BottomBar from "./bottom-bar.vue";
import OrderList from "./order-list.vue";
import TabContainer from "./tab-container.vue";

const orderStore = useOrderStore();
const { promocode } = storeToRefs(orderStore);
</script>
<template>
  <TabContainer
    :tabNumber="0"
    topTitle="checkout"
  >
    <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
      <OrderList />
      <div
        className="flex items-center gap-2 py-4 px-7 border-b border-t border-gray-placeholder max-w-[900px] mx-auto"
      >
        <DiscountIcon />
        <InputUi
          className="placeholder:text-gray-body focus:outline-none flex-grow"
          placeholder="Add promo code"
          :value="promocode"
          :onChange="orderStore.updatePromoCode"
        />
      </div>
      <div
        className="flex items-center gap-2 py-4 px-7 border-b border-gray-placeholder justify-between max-w-[900px] mx-auto"
      >
        <div className="flex items-center gap-2">
          <DeliveryIcon />
          <span>Delivery</span>
        </div>
        <span>Free</span>
      </div>
    </div>
    <BottomBar
      buttonText="Checkout"
      :onClick="() => orderStore.changeTab(1)"
    />
  </TabContainer>
</template>
