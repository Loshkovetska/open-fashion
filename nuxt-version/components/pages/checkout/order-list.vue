<script setup lang="ts">
import CartItem from "@/components/common/cart-item.vue";
import { useCartStore } from "@/shared/stores";
import { storeToRefs } from "pinia";

const { cartList } = storeToRefs(useCartStore());
</script>

<template>
  <div className="flex flex-col gap-2 mb-4 max-w-[900px] mx-auto">
    <CartItem
      :item="c"
      v-for="c in cartList"
      :key="c._id"
    />
  </div>
</template>
