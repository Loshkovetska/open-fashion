<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    :class="props.class"
    @click="props.onClick"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path d="M19.5781 9L12.615 15.9632L5.65178 9" stroke="#333333" />
    </g>
  </svg>
</template>
