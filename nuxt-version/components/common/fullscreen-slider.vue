<script setup lang="ts">
import Slider from "@/components/common/slider-comp.vue";
import { cn } from "@/shared/utils";
import { useGlobalStore, useProductStore } from "@/shared/stores";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { good } = storeToRefs(productStore);

const store = useGlobalStore();
const { isGalleryOpen } = storeToRefs(store);
</script>

<template>
  <section
    :class="
      cn(
        'w-screen h-screen bg-black/75 fixed top-0 left-0 z-50 px-4 py-32 transition-all',
        isGalleryOpen ? 'scale-100' : 'scale-0'
      )
    "
    @click="() => store.changeDialogState('isGalleryOpen')"
  >
    <div
      class="w-full h-full"
      @click="(e) => e.stopPropagation()"
    >
      <Slider
        direction="vertical"
        :slidesPerView="1"
        :spaceBetween="0"
        class="vertical"
        slideClass="h-screen flex justify-center items-center"
        sliderStyle="width: 100%; height: 100%"
      >
        <swiper-slide
          v-for="c in good?.src"
          :key="c"
        >
          <img
            :src="c"
            :alt="good?.title || ''"
            class="object-contain w-full h-full"
            width="500"
            height="500"
          />
        </swiper-slide>
      </Slider>
    </div>
  </section>
</template>
