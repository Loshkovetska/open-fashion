<script setup lang="ts">
import Forward from '@/components/icons/forward-icon.vue'
import type { MenuTab } from '@/lib/type'
import { cn } from '@/lib/utils'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { RouterLink } from 'vue-router'

const { item: c } = defineProps<{ item: MenuTab }>()

const mainRef = useTemplateRef<HTMLDivElement>('mainRef')
const open = ref(false)
onMounted(() => {
  if (mainRef.value) {
    mainRef.value.style.height = '0px'
  }
})

watch(open, () => {
  if (mainRef.value) {
    mainRef.value.style.height = `${open.value ? mainRef.value.scrollHeight : 0}px`
  }
})

const onOpen = () => (open.value = !open.value)
</script>

<template>
  <div :class="cn('overflow-hidden pt-5', open && 'pb-5')">
    <div class="flex gap-4 items-center justify-between pb-4 cursor-pointer" @click="onOpen">
      <span class="flex flex-grow text-4"> {{ c.title }}</span>
      <span :class="cn('transition-all', open ? 'rotate-180' : 'rotate-0')">
        <Forward />
      </span>
    </div>
    <div class="flex flex-col gap-4 transition-all pl-5" ref="mainRef">
      <RouterLink :to="ci.link" :key="ci.title" v-for="ci in c.list"> {{ ci.title }}</RouterLink>
    </div>
  </div>
</template>
