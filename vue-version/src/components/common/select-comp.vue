<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref } from 'vue'
import CaretDown from '../icons/caret-down.vue'

type SelectPropType = {
  value: string
  list: string[]
  onChange: (value: string) => void
}

const { value, list, onChange } = defineProps<SelectPropType>()

const isOpen = ref(false)

const onToggle = () => (isOpen.value = !isOpen.value)

const onSelect = (c: string) => {
  onChange(c)
  onToggle()
}
</script>

<template>
  <div class="flex flex-col relative">
    <div
      class="flex items-center justify-center w-fit px-3 py-2 bg-[#c4c4c41a] rounded-[33px] cursor-pointer"
      @click="onToggle"
    >
      {{ value }}
      <CaretDown :class="cn('transition-all', isOpen ? 'rotate-180' : '')" />
    </div>
    <div
      :class="
        cn(
          'absolute top-[100%] left-0 w-full bg-[#E7EAEF] gap-1 flex flex-col rounded-[10px] py-2 z-[1] px-3 transition-all',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )
      "
    >
      <div class="w-full cursor-pointer" v-for="c in list" :key="c" @click="() => onSelect(c)">
        {{ c }}
      </div>
    </div>
  </div>
</template>
