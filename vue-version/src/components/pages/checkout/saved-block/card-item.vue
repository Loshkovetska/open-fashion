<script setup lang="ts">
import MasterIcon from '@/components/icons/master-icon.vue'
import VisaIcon from '@/components/icons/visa-icon.vue'
import type { CardType } from '@/lib/type'
import { isMasterCard } from '@/lib/utils'
import { computed } from 'vue'

const { card } = defineProps<{
  card: CardType
}>()

const cardType = computed(() => isMasterCard(card.cardNumber))
</script>

<template>
  <div class="flex items-center gap-2">
    <MasterIcon v-if="!cardType" />
    <VisaIcon class="[&>path]:fill-black" v-else />
    {{ cardType ? 'Mastercard' : 'Visa' }}
    ending &bull;&bull;&bull;&bull; {{ card?.cardNumber.slice(-2) }}
  </div>
</template>
