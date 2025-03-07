<script setup lang="ts">
import Cart from '@/components/common/dialogs/cart-dialog.vue'
import Nav from '@/components/common/dialogs/menu-dialog/menu-dialog.vue'
import Search from '@/components/common/dialogs/search-dialog.vue'
import SelectionModal from '@/components/common/dialogs/selection-dialog.vue'
import { useCartStore, useGlobalStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { q } = defineProps<{ q?: string }>()

const store = useGlobalStore()
const { isMenuOpen, isSearchOpen, isCartOpen } = storeToRefs(store)

const cartStore = useCartStore()
const { item } = storeToRefs(cartStore)

store.$subscribe((mutation, state) => {
  const classList = document.body.classList

  const isOpen = Object.values(state).some(Boolean)
  if (isOpen) {
    return classList.add('overflow-hidden')
  }
  classList.remove('overflow-hidden')
})
</script>

<template>
  <Nav :open="isMenuOpen" :onOpenChange="() => store.changeDialogState('isMenuOpen')" />
  <Cart :open="isCartOpen" :onOpenChange="() => store.changeDialogState('isCartOpen')" />
  <Search
    :open="isSearchOpen"
    :onOpenChange="() => store.changeDialogState('isSearchOpen')"
    :q="q || ''"
  />
  <SelectionModal :open="!!item" :onOpenChange="() => cartStore.changeModalState(null)" />
</template>
