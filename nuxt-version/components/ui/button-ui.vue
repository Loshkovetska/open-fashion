<script setup lang="ts">
import { cn } from "@/shared/utils/index";
const props = defineProps<{
  class?: string;
  href?: string;
  onClick?: () => void;
}>();

const getStyle = (className?: string) =>
  cn(
    "w-full flex items-center justify-center uppercase py-4 px-5 text-4 gap-5 tracking-[1px] cursor-pointer hover:opacity-50 transition-all duration-300 bg-black text-white",
    className || ""
  );
</script>

<template>
  <NuxtLink
    v-if="!!props.href"
    :class="getStyle(props.class)"
    :to="props.href || ''"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="getStyle(props.class)"
    @click="props.onClick"
  >
    <slot />
  </button>
</template>
