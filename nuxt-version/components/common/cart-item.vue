<script setup lang="ts">
import Counter from "@/components/common/counter/counter-index.vue";
import type { CartItemType } from "@/shared/type";
import { cn } from "@/shared/utils";
import { useCartStore } from "@/shared/stores";

const {
  withCount = true,
  class: className,
  item: cartItem,
} = defineProps<{ item: CartItemType; withCount?: boolean; class?: string }>();

const { updateCount } = useCartStore();

const handleCount = (num: number) => {
  updateCount({
    num,
    _id: cartItem._id,
  });
};
</script>

<template>
  <div
    :class="cn('flex items-center gap-3', className)"
    v-show="!!cartItem"
  >
    <img
      :src="cartItem?.src || ''"
      :alt="cartItem?.title"
      class="object-cover w-25"
      width="100"
      height="133"
    />
    <div class="flex flex-col flex-grow">
      <span class="text-sm text-black mb-1 uppercase">
        {{ cartItem?.title }}
      </span>
      <p class="text-[12px] text-gray-label line-clamp-1">
        {{ cartItem?.description }}
      </p>
      <Counter
        class="my-3"
        :count="cartItem?.count || 0"
        :onClick="handleCount"
        v-show="withCount"
      />
      <span :class="cn('text-primary text-sm', withCount ? '' : 'mt-[10px]')">
        ${{ cartItem?.price || 0 }}
      </span>
    </div>
  </div>
</template>
