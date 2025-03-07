<script setup lang="ts">
import ForwardIcon from "@/components/icons/forward-icon.vue";
import { DELIVERY_TYPES } from "@/shared/constants";
import { cn } from "@/shared/utils";
import { useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const isOpen = ref(false);

const orderStore = useOrderStore();
const { delivery } = storeToRefs(orderStore);

const onOpen = (v: boolean) => (isOpen.value = v);

const onUpdate = (c: { title: string; price: string | number }) => {
  orderStore.updateDeliveryType(c);
  onOpen(false);
};
</script>
<template>
  <div class="my-8">
    <span class="uppercase text-base text-gray-placeholder mb-3 flex">
      Shipping Method
    </span>
    <div class="relative">
      <div
        class="flex items-center justify-between py-[13px] px-5 bg-[#F9F9F9] rounded-[44px] cursor-pointer"
      >
        <div
          class="flex items-center justify-between flex-grow"
          @click="() => onOpen(!isOpen)"
        >
          <span>{{ delivery.title }}</span>
          <span>{{
            delivery.price == "FREE" ? delivery.price : `$${delivery.price}`
          }}</span>
        </div>
        <ForwardIcon />
      </div>
      <div
        :class="
          cn(
            'bg-[#F9F9F9] px-4 py-2 rounded-2 absolute top-full left-0 w-full mt-2 gap-2 transition-all flex flex-col',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )
        "
      >
        <div
          v-for="c in DELIVERY_TYPES"
          :key="c.title"
          class="flex items-center justify-between flex-grow"
          @click="() => onUpdate(c)"
        >
          <span>{{ c.title }}</span>
          <span>{{ c.price == "FREE" ? c.price : `$${c.price}` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
