<script setup lang="ts">
import AddToCart from '@/components/common/add-to-cart.vue'
import Slider from '@/components/common/slider-comp.vue'
import Variants from '@/components/common/variants-comp.vue'
import ProductContentInfo from '@/components/pages/product/product-content-info.vue'
import { useGlobalStore } from '@/stores'

import Export from '@/components/icons/export-icon.vue'
import Resize from '@/components/icons/resize-icon.vue'

import { useProductStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { pathname } = defineProps<{ pathname: string }>()

const { changeDialogState } = useGlobalStore()

const { good } = storeToRefs(useProductStore())

const chosen = ref<{ color: string; size: string }>({
  color: '',
  size: '',
})

const copy = () => navigator.clipboard.writeText(pathname)

const updateState = (prop: string, value: string) => {
  chosen.value = {
    ...chosen.value,
    [prop]: chosen.value[prop as 'color'] == value ? '' : value,
  }
}
</script>

<template>
  <section class="pt-[90px] px-4 max-w-[1124px] mx-auto">
    <div class="flex gap-4 flex-wrap mb-8">
      <div class="flex w-2/3 product-content-slider relative">
        <Slider
          :spaceBetween="0"
          :slidesPerView="1"
          class="grey"
          sliderStyle="width:100%"
          slideClass="grey"
        >
          <swiper-slide v-for="c in good?.src" :key="c">
            <img
              :src="c"
              :alt="good?.title"
              class="object-cover w-full h-full"
              :width="500"
              :height="500"
            />
          </swiper-slide>
        </Slider>
        <span
          class="absolute bottom-4 right-4 flex justify-center items-center p-3 rounded-full bg-black/50 z-[1] cursor-pointer"
          @click="() => changeDialogState('isGalleryOpen')"
        >
          <Resize />
        </span>
      </div>
      <div class="flex gap-1 flex-grow justify-between">
        <div class="flex flex-col flex-grow relative">
          <Export :onClick="copy" class="cursor-pointer absolute right-0 top-0 z-[1]" />
          <span class="text-sm text-black mb-1 uppercase pr-6">
            {{ good?.title }}
          </span>
          <p class="text-[12px] text-[#555555] line-clamp-1 mb-2">
            {{ good?.description }}
          </p>
          <span class="text-[#A8715A] text-sm">${{ good?.price }}</span>
          <Variants
            class="mt-6"
            :colors="good?.colors || []"
            :sizes="good?.sizes || []"
            :selectedColor="chosen.color"
            :selectedSize="chosen.size"
            :onSelect="updateState"
          />
          <AddToCart
            v-if="!!good"
            class="w-full"
            :canBeAdded="Object.values(chosen).every(Boolean)"
            :item="{ ...good, ...chosen, count: 1, src: good.src[0] }"
          />
        </div>
      </div>
    </div>
    <ProductContentInfo />
  </section>
</template>
