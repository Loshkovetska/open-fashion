<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    @click="props.onClick"
  >
    <path d="M11.3333 4L7.66659 0.666667L3.99992 4" stroke="#333333" />
    <line
      y1="-0.5"
      x2="8.66667"
      y2="-0.5"
      transform="matrix(0 1 1 0 8 0.666668)"
      stroke="#333333"
    />
    <path d="M2 8V14.6667H13.3333V8" stroke="#333333" />
  </svg>
</template>
