<script setup lang="ts">
import Forward from '@/components/icons/forward-icon.vue'
import PlusIcon from '@/components/icons/plus-icon.vue'
import type { AddressType, CardType } from '@/lib/type'
import AddressItem from './address-item.vue'
import CardItem from './card-item.vue'

type SavedBlockPropType = {
  address?: AddressType | null
  card?: CardType | null
  type: 'card' | 'address'
  onClick: () => void
}

const { address, card, type, onClick } = defineProps<SavedBlockPropType>()

const TITLE = type === 'address' ? 'Shipping address' : 'Payment Method'
const EMPTY_TITLE = type === 'address' ? 'Add shipping address' : 'Add payment method'
</script>

<template>
  <span class="uppercase text-base text-[#888888] mb-3 flex">
    {{ TITLE }}
  </span>
  <div class="flex items-center justify-between" @click="onClick" v-if="address || card">
    <AddressItem :address="address" v-if="!!address" />
    <CardItem :card="card" v-if="!!card" />
    <Forward class="-rotate-90" />
  </div>
  <div
    class="flex items-center justify-between py-[13px] px-5 bg-[#F9F9F9] rounded-[44px] cursor-pointer"
    @click="onClick"
    v-show="!address && !card"
  >
    {{ EMPTY_TITLE }}
    <PlusIcon />
  </div>
</template>
