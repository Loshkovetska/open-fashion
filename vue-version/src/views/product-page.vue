<script setup lang="ts">
import { useRoute } from 'vue-router'
import FullScreenSlider from '@/components/common/fullscreen-slider.vue'
import ProductContent from '@/components/pages/product/product-content.vue'
import Similar from '@/components/pages/product/similiar-comp.vue'
import Layout from '@/components/common/layout-comp.vue'

const route = useRoute()
</script>

<template>
  <Layout>
    <ProductContent :pathname="route.fullPath" />
    <FullScreenSlider />
    <Similar />
  </Layout>
</template>
