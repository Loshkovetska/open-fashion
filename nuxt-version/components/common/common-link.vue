<script setup lang="ts">
type LinkPropType = {
  to: string;
  external?: boolean;
  target?: "_blank" | "self";
  class?: string;
};

const { external = false, ...props } = defineProps<LinkPropType>();
</script>
<template>
  <a
    :href="props.to"
    :target="props.target"
    v-if="external"
    :class="props.class"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="props.to"
    :class="props.class"
  >
    <slot />
  </NuxtLink>
</template>
