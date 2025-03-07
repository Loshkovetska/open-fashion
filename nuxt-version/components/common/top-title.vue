<script setup lang="ts">
import Divider from './divider-comp.vue'
import HeadLine2 from './headline2-comp.vue'

const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div class="w-fit flex flex-col items-center justify-center mx-auto gap-2 mb-5">
    <HeadLine2>{{ title }}</HeadLine2>
    <Divider />
  </div>
</template>
