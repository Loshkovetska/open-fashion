<script setup lang="ts">
import Counter from "@/components/common/counter/counter-index.vue";
import Selector from "@/components/common/selector-comp.vue";
import { cn } from "@/shared/utils";

type VariantsPropType = {
  selectedColor: string;
  selectedSize: string;
  colors: { title: string; value: string }[];
  sizes: string[];
  amount?: number;
  class?: string;
  onSelect: (type: "size" | "color", value: string) => void;
  changeAmount?: (num: number) => void;
};

const {
  colors,
  sizes,
  selectedColor,
  selectedSize,
  amount,
  class: className,
  onSelect,
  changeAmount,
} = defineProps<VariantsPropType>();
</script>

<template>
  <div :class="cn('flex flex-col gap-2', className)">
    <Selector
      title="Color"
      :selected="selectedColor"
      :list="colors"
      :onSelect="(value) => onSelect('color', value)"
      v-show="colors?.length > 0"
    />
    <Selector
      title="Size"
      :selected="selectedSize"
      :list="sizes"
      :onSelect="(value) => onSelect('size', value)"
      v-show="sizes?.length > 0"
    />
    <Counter
      title="Count"
      :count="amount || 0"
      :onClick="() => changeAmount?.()"
      v-show="!!changeAmount"
    />
  </div>
</template>
