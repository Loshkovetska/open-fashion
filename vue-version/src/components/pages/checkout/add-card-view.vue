<script setup lang="ts">
import MasterIcon from '@/components/icons/master-icon.vue'
import VisaIcon from '@/components/icons/visa-icon.vue'
import type { CardType } from '@/lib/type'
import { cn, isMasterCard } from '@/lib/utils'
import { computed } from 'vue'

type AddCardViewPropType = {
  cardDetails: CardType
  rotateCard: boolean
}

const { cardDetails, rotateCard } = defineProps<AddCardViewPropType>()

const icon = computed(() => (isMasterCard(cardDetails?.cardNumber || '') ? MasterIcon : VisaIcon))
</script>
<template>
  <div class="max-w-[316px] h-[190px] mx-auto w-full relative">
    <div
      :class="
        cn(
          'transition-all duration-500 bg-gradient-to-r from-[#434343] to-[#000] h-full rounded-2xl absolute  mx-auto w-full p-3 items-end pb-5 flex justify-between',
        )
      "
      :style="{
        transform: rotateCard ? 'rotateY(90deg)' : 'rotateY(0deg)',
      }"
    >
      <component :is="icon" class="absolute top-3 right-3" />
      <div class="flex justify-between flex-col">
        <span class="text-4 text-white mb-2 flex leading-none"> {{ cardDetails?.cardOwner }} </span>
        <span class="text-lg text-white mb flex tracking-[1px] leading-none">
          {{ cardDetails?.cardNumber }}
        </span>
      </div>
      <span class="text-lg text-white mb flex"> {{ cardDetails?.expiredDate }} </span>
    </div>
    <div
      :style="{
        transform: !rotateCard ? 'rotateY(90deg)' : 'rotateY(0deg)',
      }"
      class="bg-gradient-to-r from-[#434343] to-[#000] rounded-2xl absolute mx-auto w-full h-full flex transition-all duration-500"
    >
      <div class="flex flex-col w-full">
        <div class="w-full h-8 bg-black mt-4/">
          <div class="w-full h-6 bg-white mt-4 px-4 text-right">
            {{ cardDetails?.CVV }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
