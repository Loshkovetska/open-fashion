<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useTemplateRef } from 'vue'
type DividerPropType = {
  color?: string
  class?: string
}

const { color, class: className } = defineProps<DividerPropType>()
const lineRef = useTemplateRef<HTMLDivElement>('lineRef')

defineExpose({
  lineRef,
})

const bgColor = color == 'gray-label' ? 'transparent' : 'primary'

const wrapperClassName = cn(
  `flex relative border-[0.5px] border-${color} border-x-0 border-b-0 justify-center w-full`,
  className,
)

const lineClassName = `flex w-2 h-2 border-[0.5px] border-${color} rotate-45 -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 bg-${bgColor}`
</script>

<template>
  <div ref="lineRef" :class="wrapperClassName">
    <span :class="lineClassName"></span>
  </div>
</template>
