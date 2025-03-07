<script setup lang="ts">
import Divider from '@/components/common/divider-comp.vue'

import type { MenuTab } from '@/lib/type'
import { cn } from '@/lib/utils'
import { onMounted, ref, useTemplateRef, watch } from 'vue'

type NavTabsPropType = {
  tabs: {
    tab: string
    list: MenuTab[]
  }[]
  tabChange: (value: number) => void
}

const { tabs, tabChange } = defineProps<NavTabsPropType>()

const tabState = ref<number>(0)

const mainRef = useTemplateRef<HTMLDivElement[]>('mainRef'),
  lineRef = useTemplateRef('lineRef')

onMounted(updateStyles)

watch(tabState, updateStyles)

const onTabChange = (i: number) => {
  tabState.value = i
  tabChange(i)
}

function updateStyles() {
  if (!mainRef.value) return

  const child = mainRef.value[tabState.value] as HTMLDivElement
  const line = lineRef.value?.lineRef

  if (line) {
    line.style.width = child.getBoundingClientRect().width + 'px'
    line.style.transform = `translate(${child.offsetLeft}px,0)`
  }
}
</script>

<template>
  <div class="flex border border-t-0 border-x-0 relative">
    <div
      ref="mainRef"
      :class="
        cn(
          'font-sans text-lg pb-4 uppercase text-[#333333] text-center transition-all tracking-[3px] cursor-pointer',
          tabState == i ? 'opacity-100' : 'opacity-50',
          i + 1 == tabs?.length ? 'mr-0' : 'mr-10',
        )
      "
      v-for="(c, i) in tabs"
      :key="c.tab"
      @click="() => onTabChange(i)"
    >
      {{ c.tab }}
    </div>
    <Divider
      ref="lineRef"
      color="primary"
      class="translate-x-[0] w-[128px] !absolute !bottom-0 !left-0 transition-all"
    />
  </div>
</template>
