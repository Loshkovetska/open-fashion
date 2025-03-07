<script setup lang="ts">
import ProductCard from '@/components/common/product-card.vue'
import Slider from '@/components/common/slider-comp.vue'
import TopTitle from '@/components/common/top-title.vue'
import { useProductStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { goodsList } = storeToRefs(useProductStore())

const list = computed(() => goodsList?.value.slice(0, 10))
</script>

<template>
  <section class="py-16 px-4">
    <TopTitle title="Just for you" />
    <div class="max-w-[1280px] mx-auto">
      <Slider :spaceBetween="10" slidesPerView="auto" sliderStyle="height: 100%" class="grey">
        <swiper-slide v-for="product in list" :key="product._id" class="max-w-[255px]">
          <ProductCard :product="product" vertical />
        </swiper-slide>
      </Slider>
    </div>
  </section>
</template>
