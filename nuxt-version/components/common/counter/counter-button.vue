<script setup lang="ts">
import Button from "@/components/ui/button-ui.vue";
import { cn } from "@/shared/utils";

const props = defineProps<{ disabled?: boolean; onClick: () => void }>();
</script>
<template>
  <Button
    :class="
      cn(
        '!size-5 border border-gray-light rounded-full bg-transparent !p-0',
        props.disabled ? 'pointer-events-none opacity-50' : ''
      )
    "
    :onClick="props.onClick"
  >
    <slot />
  </Button>
</template>
