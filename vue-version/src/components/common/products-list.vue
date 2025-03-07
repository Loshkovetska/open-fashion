<script setup lang="ts">
import ProductCard from '@/components/common/product-card.vue'
import type { ProductType } from '@/lib/type'

type ProductsListPropType = {
  goods: ProductType[]
}

const { goods } = defineProps<ProductsListPropType>()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(167px,1fr))] gap-4 max-w-[1280px] mx-auto">
    <ProductCard :product="good" vertical v-for="good in goods" :key="good._id" />
  </div>
</template>
