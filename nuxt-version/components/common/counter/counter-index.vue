<script setup lang="ts">
import CounterButton from "@/components/common/counter/counter-button.vue";
import Minus from "@/components/icons/minus-icon.vue";
import Plus from "@/components/icons/plus-icon.vue";
import { cn } from "@/shared/utils";

type CounterPropType = {
  count: number;
  title?: string;
  class?: string;
  onClick: (num: number) => void;
};
const {
  onClick,
  title,
  class: className,
  count,
} = defineProps<CounterPropType>();
</script>

<template>
  <div :class="cn('flex flex-col gap-2', className)">
    <span v-show="!!title">{{ title }}</span>
    <div class="flex items-center gap-2">
      <CounterButton
        :disabled="!count"
        :onClick="() => onClick(-1)"
      >
        <Minus />
      </CounterButton>
      <span class="text-sm">{{ count }}</span>
      <CounterButton
        :disabled="count > 5"
        :onClick="() => onClick(1)"
      >
        <Plus />
      </CounterButton>
    </div>
  </div>
</template>
