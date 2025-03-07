<script setup lang="ts">
import Close from '@/components/icons/close-icon.vue'
import SearchIcon from '@/components/icons/search-icon.vue'
import Input from '@/components/ui/input-ui.vue'
import Modal from '@/components/ui/modal-ui/modal-ui.vue'
import type { DialogPropType } from '@/lib/type'
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const SEARCH_ITEMS = ['Trend']

const { open, q, onOpenChange } = defineProps<{ q?: string } & DialogPropType>()

const inputValue = ref('')
const route = useRouter()

const onSubmit = (e: Event) => {
  e.preventDefault()
  if (inputValue.value.length) {
    route.push({ name: 'products', query: { q: inputValue.value } })
    onOpenChange()
  }
}

const onChange = (v: string) => (inputValue.value = v)

onMounted(() => {
  inputValue.value = q || ''
})
</script>

<template>
  <Modal :isOpen="open">
    <form
      class="flex border-[#555555] border-b pb-2 placeholder:text-[#555555] placeholder:text-sm mt-2 gap-3"
      @submit="onSubmit"
    >
      <SearchIcon />
      <Input
        :value="inputValue"
        :onChange="onChange"
        class="flex-grow"
        placeholder="Search items"
      />
      <Close :onClick="onOpenChange" class="cursor-pointer" />
    </form>
    <span class="text-sm text-[#888888] my-3">Recent search</span>
    <div class="flex flex-wrap gap-4">
      <span
        class="flex gap-1 text-[13px] text-[#555555] rounded-[33px] bg-[#c4c4c41a] py-[10px] px-[12px] items-center"
      >
        Dress <Close />
      </span>
    </div>
    <span class="text-sm text-[#888888] mt-4 mb-3"> Popular search items </span>
    <RouterLink to="/" :key="c" v-for="c in SEARCH_ITEMS" class="leading-3"> {{ c }} </RouterLink>
  </Modal>
</template>
