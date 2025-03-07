<script setup lang="ts">
import { cn } from '@/lib/utils'

type SelectorPropType = {
  title?: string
  list: Array<string | { title: string; value: string }>
  selected: string
  onSelect: (val: string) => void
}

const { title, list, selected, onSelect } = defineProps<SelectorPropType>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <span v-show="!!title">{{ title }}</span>
    <div class="flex items-center flex-wrap gap-3">
      <span
        v-for="c in list"
        :key="typeof c === 'object' ? c.title : c"
        :class="
          cn(
            'size-6 rounded-full border cursor-pointer flex items-center justify-center text-sm text-sm',
            typeof c !== 'object' && selected === c
              ? 'border-none text-white bg-[#333333]'
              : typeof c === 'object' && selected === c.title
                ? 'text-white border-[#333333]'
                : 'border-[#DEDEDE]',
          )
        "
        @click="() => onSelect(typeof c === 'object' ? c.title : c)"
      >
        {{ typeof c === 'object' ? null : c }}
        <span
          class="flex w-4 h-4 rounded-full"
          :style="{
            backgroundColor: c.value,
          }"
          v-if="typeof c === 'object'"
        />
      </span>
    </div>
  </div>
</template>
