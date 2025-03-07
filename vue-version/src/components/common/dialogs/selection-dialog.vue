<script setup lang="ts">
import AddToCart from '@/components/common/add-to-cart.vue'
import CartItem from '@/components/common/cart-item.vue'
import Variants from '@/components/common/variants-comp.vue'
import ModalClose from '@/components/ui/modal-ui/modal-close.vue'
import type { DialogPropType } from '@/lib/type'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { open, onOpenChange } = defineProps<DialogPropType>()

const { item } = storeToRefs(useCartStore())

const cartItem = ref<{
  count: number
  color?: string
  size?: string
}>({ count: 1 })

const updateState = (prop: string, value: string) => {
  cartItem.value = {
    ...cartItem.value,
    [prop]: cartItem.value[prop as 'color'] == value ? '' : value,
  }
}

const changeCount = (num: number) => {
  cartItem.value = {
    ...cartItem.value,
    count: cartItem.value?.count + num,
  }
}

const handleClose = () => {
  onOpenChange()
  cartItem.value = {
    count: 1,
  }
}
</script>

<template>
  <section
    :class="
      cn(
        'fixed bottom-0 left-0 transition-all w-full h-screen bg-black/50 z-[1000] flex flex-col justify-end',
        open ? 'opacity-100 visible' : 'opacity-0 invisible',
      )
    "
    @click="handleClose"
  >
    <div
      :class="
        cn(
          'bg-white shadow-md transition-all',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full',
        )
      "
      @click="(e) => e.stopPropagation()"
    >
      <div class="py-6 px-4 w-full relative">
        <div class="flex justify-end absolute left-0 w-full top-0 py-6 px-4 pt-3">
          <ModalClose :action="handleClose" />
        </div>
        <CartItem :item="item" :withCount="false" class="mb-4" v-if="!!item" />
        <Variants
          :colors="item?.colors || []"
          :sizes="item?.sizes || []"
          :selectedColor="cartItem?.color || ''"
          :selectedSize="cartItem?.size || ''"
          :onSelect="updateState"
          :amount="cartItem?.count"
          :changeAmount="changeCount"
        />
        <AddToCart
          :item="{
            ...item,
            ...cartItem,
            count: 1,
          }"
          v-show="!!item"
        />
      </div>
    </div>
  </section>
</template>
