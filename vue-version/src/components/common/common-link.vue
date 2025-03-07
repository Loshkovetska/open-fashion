<script setup lang="ts">
import { RouterLink } from 'vue-router'

type LinkPropType = {
  to: string
  external?: boolean
  target?: '_blank' | 'self'
  class?: string
}

const { external = false, ...props } = defineProps<LinkPropType>()
</script>
<template>
  <a :href="props.to" :target="props.target" v-if="external" :class="props.class">
    <slot>children</slot>
  </a>
  <RouterLink v-else :to="props.to" :class="props.class">
    <slot>children</slot>
  </RouterLink>
</template>
