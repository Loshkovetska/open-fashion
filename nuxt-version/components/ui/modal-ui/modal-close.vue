<script setup lang="ts">
import Close from '@/components/icons/close-icon.vue'
const { action } = defineProps<{ action: () => void }>()
</script>

<template>
  <span @click="action" class="mb-4 cursor-pointer">
    <Close />
  </span>
</template>
