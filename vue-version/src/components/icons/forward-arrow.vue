<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    @click="props.onClick"
  >
    <path d="M10.712 3.75L15.7498 9L10.712 14.25" stroke="#14142B" />
    <line x1="15.4709" y1="9.20667" x2="2.17115" y2="9.20667" stroke="#14142B" />
  </svg>
</template>
