<script setup lang="ts">
const props = defineProps<{ class?: string; onClick?: () => void }>()
</script>

<template>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    @click="props.onClick"
  >
    <path d="M0.306763 12.7537H15.9824" stroke="#14142B" />
    <path d="M0.306641 5.75366H23.6931" stroke="#14142B" />
    <path d="M0.306641 19.7537H23.6931" stroke="#14142B" />
  </svg>
</template>
