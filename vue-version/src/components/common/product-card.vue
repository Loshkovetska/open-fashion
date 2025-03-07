<script setup lang="ts">
import Heart from '@/components/icons/heart-icon.vue'
import Star from '@/components/icons/star-icon.vue'
import type { ProductType } from '@/lib/type'

import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const { vertical, product: item } = defineProps<{
  vertical: boolean
  product: ProductType
}>()

const cartStore = useCartStore()
const { cartList } = storeToRefs(cartStore)

const isSaved = computed(() => cartList.value.some((c) => c._id == item._id))

const heartClass = computed(() =>
  cn(
    'size-4 cursor-pointer',
    vertical ? 'absolute bottom-2 right-2 z-[1]' : '',
    isSaved.value && 'fill-[#A8715A]',
  ),
)

const addToCart = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  cartStore.changeModalState({ ...item, count: 1, src: item.src[0] })
}
</script>

<template>
  <RouterLink
    :to="`/products/${item._id}`"
    :class="vertical ? 'flex flex-col w-full' : 'flex items-stretch'"
  >
    <div :class="vertical ? 'w-full relative mb-3' : ''">
      <img
        :src="item.src[0]"
        :alt="item.title"
        :width="vertical ? 120 : 100"
        :height="vertical ? 56 : 134"
        :class="
          vertical ? 'object-cover w-full h-56' : 'w-[100px] h-[134px] flex object-cover mr-[12px]'
        "
      />
      <Heart :class="heartClass" :onClick="addToCart" v-show="vertical" />
    </div>
    <div :class="cn('flex flex-col', vertical ? '' : 'grow')">
      <span
        :class="
          cn(
            'text-sm text-black uppercase line-clamp-2 h-10 flex items-center',
            vertical ? 'mb-1' : '',
          )
        "
      >
        {{ item.title }}
      </span>
      <p class="text-[12px] text-[#555555] line-clamp-1 mb-2">
        {{ item.description }}
      </p>
      <span :class="cn('text-[#A8715A] text-sm', !vertical ? 'mb-[10px] flex' : '')">
        ${{ item.price }}
      </span>

      <span class="flex items-center text-sm text-[#555555] gap-[3px]" v-show="!vertical">
        <Star />
        {{ item.rate }} Ratings
      </span>
      <div class="flex justify-between items-center mt-[11px]" v-show="!vertical">
        <div class="flex items-center gap-[6px]" v-if="!!item?.sizes?.length">
          <span class="text-[10px] text-[#555555]">Size</span>
          <span
            v-for="size in item.sizes"
            :key="size"
            class="flex items-center justify-center px-2 py-[6px] border border-[#DEDEDE] rounded-full text-[10px]"
          >
            <span class="size-4 flex items-center justify-center"> {{ size }} </span>
          </span>
        </div>
        <div class="flex" v-else>No sizes</div>
        <Heart :class="heartClass" :onClick="addToCart" v-show="!vertical" />
      </div>
    </div>
  </RouterLink>
</template>
