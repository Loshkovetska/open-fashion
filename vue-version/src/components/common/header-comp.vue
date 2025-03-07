<script setup lang="ts">
import Logo from '@/components/icons/logo-icon.vue'
import Menu from '@/components/icons/menu-icon.vue'
import Search from '@/components/icons/search-icon.vue'
import ShopBag from '@/components/icons/shop-icon.vue'
import { cn } from '@/lib/utils'
import { useGlobalStore } from '@/stores'
import { RouterLink } from 'vue-router'

const props = defineProps<{ headerColor?: string }>()
const { changeDialogState } = useGlobalStore()
</script>
<template>
  <header
    :class="
      cn(
        'w-full flex items-center justify-between fixed top-0 left-0 pr-6 pl-4 pt-5 pb-2 z-20',
        props.headerColor,
      )
    "
  >
    <Menu @click="() => changeDialogState('isMenuOpen')" class="cursor-pointer" />
    <RouterLink to="/" class="cursor-pointer ml-10">
      <Logo />
    </RouterLink>
    <div class="flex items-center gap-4">
      <Search @click="() => changeDialogState('isSearchOpen')" class="cursor-pointer" />
      <ShopBag @click="() => changeDialogState('isCartOpen')" class="cursor-pointer" />
    </div>
  </header>
</template>
