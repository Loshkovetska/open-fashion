<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    :class="props.class"
    @click="props.onClick"
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.324 11.5C22.324 17.0228 12.324 24.5 12.324 24.5C12.324 24.5 2.32404 17.0228 2.32404 11.5C2.32404 5.97715 6.80119 1.5 12.324 1.5C17.8469 1.5 22.324 5.97715 22.324 11.5Z"
      stroke="#555555"
    />
    <circle cx="12.324" cy="11.5" r="3" stroke="#555555" />
  </svg>
</template>
