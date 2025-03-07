<script setup lang="ts">
import Forward from '@/components/icons/forward-icon.vue'
import { cn } from '@/lib/utils'
import { onMounted, ref, useTemplateRef, watch, type VNode } from 'vue'

type ProductAccordionPropType = {
  icon: VNode
  title: string
  text: string
}

const textRef = useTemplateRef('textRef')

const { icon, title, text } = defineProps<ProductAccordionPropType>()

const isOpen = ref(false)

onMounted(applyStyle)

watch(isOpen, applyStyle)

function applyStyle() {
  if (textRef.value) {
    textRef.value.style.height = isOpen.value ? textRef.value.scrollHeight + 'px' : '0px'
  }
}
</script>

<template>
  <div class="flex gap-2 border-b border-[#555555]/20">
    <component :is="icon" />
    <div :class="cn('flex-grow transition-all', !isOpen && 'overflow-hidden')">
      <span
        class="text-base mb-1 leading-5 uppercase flex items-center justify-between gap-1"
        @click="() => (isOpen = !isOpen)"
      >
        {{ title }}<Forward :class="cn(isOpen && 'rotate-180')" />
      </span>
      <p
        :class="
          cn('text-base leading-6 mb-4 text-[#555555] transition-all', !isOpen && 'overflow-hidden')
        "
        ref="textRef"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>
