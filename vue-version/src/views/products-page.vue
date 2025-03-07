<script setup lang="ts">
import Layout from '@/components/common/layout-comp.vue'
import ProductsFilter from '@/components/pages/products/products-filters.vue'
import ProductsList from '@/components/pages/products/products-list.vue'
</script>

<template>
  <Layout headerColor="bg-white">
    <ProductsFilter />
    <ProductsList />
  </Layout>
</template>
