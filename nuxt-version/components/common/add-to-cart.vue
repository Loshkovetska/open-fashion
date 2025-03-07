<script setup lang="ts">
import Button from "@/components/ui/button-ui.vue";
import type { CartItemType } from "@/shared/type";
import { cn } from "@/shared/utils";
import { useCartStore } from "@/shared/stores";

type AddToCartPropType = {
  class?: string;
  item: CartItemType;
  canBeAdded?: boolean;
};

const {
  class: className,
  item,
  canBeAdded = true,
} = defineProps<AddToCartPropType>();

const { addToCart, changeModalState } = useCartStore();

const onAdd = () => {
  if (canBeAdded) {
    addToCart({
      ...item,
      _id: item._id,
      title: item.title,
      description: item.description,
      price: item.price,
      src: item.src,
    });
    changeModalState(null);
  }
};
</script>

<template>
  <Button
    :class="cn('mt-6', className)"
    :onClick="onAdd"
  >
    Add To cart
  </Button>
</template>
