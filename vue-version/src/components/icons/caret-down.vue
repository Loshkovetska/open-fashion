<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    @click="props.onClick"
  >
    <g opacity="0.5">
      <path d="M8.71492 11.2747L5.23566 6.57455L12.1942 6.57455L8.71492 11.2747Z" fill="#333333" />
    </g>
  </svg>
</template>
