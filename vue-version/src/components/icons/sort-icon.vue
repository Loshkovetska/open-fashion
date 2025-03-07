<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    :class="props.class"
    @click="props.onClick"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7.5V8.5H21V7.5H3ZM10 16.5H14V15.5H10V16.5ZM18 12.5H6V11.5H18V12.5Z"
    />
  </svg>
</template>
