<script setup lang="ts">
import AddCard from '@/components/pages/checkout/add-card.vue'
import AddDelivery from '@/components/pages/checkout/add-delivery.vue'
import MainComp from '@/components/pages/checkout/main-comp.vue'
import ShipAddress from '@/components/pages/checkout/ship-address/ship-address.vue'
</script>
<template>
  <section className="flex w-full pt-[90px] h-full flex-grow overflow-hidden relative">
    <MainComp />
    <ShipAddress />
    <AddDelivery />
    <AddCard />
  </section>
</template>
