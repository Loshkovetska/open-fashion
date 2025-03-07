<script setup lang="ts">
import Slider from "@/components/common/slider-comp.vue";
import Button from "@/components/ui/button-ui.vue";
import { SLIDES } from "@/shared/constants";
import { cn } from "@/shared/utils";

const titleStyle =
  "font-serif text-[37px] text-gray-body font-bold italic tracking-[2px] uppercase leading-[43px] mix-blend-multiply	opacity-[0.7]";

const getSlideStyle = (slide: (typeof SLIDES)[0]) => {
  return {
    backgroundSize: "cover",
    backgroundImage: `url("${slide.src}")`,
  };
};
</script>

<template>
  <div class="w-full h-screen flex pt-[59px]">
    <ClientOnly>
      <Slider
        autoPlay
        :spaceBetween="0"
        :slidesPerView="1"
        sliderStyle="height:100%; width:100%"
      >
        <swiper-slide
          v-for="slide in SLIDES"
          :key="slide.id"
        >
          <div
            class="w-full h-full relative"
            :style="{
              backgroundSize: 'cover',
              backgroundImage: `url(&quot;${slide.src}&quot;)`,
            }"
          >
            <div
              class="relative z-10 pb-[40px] pt-[230px] pl-[32px] pr-4 h-full flex flex-col justify-between items-center"
            >
              <h1 class="flex flex-col">
                <span :class="cn(titleStyle, 'pl-2')">
                  {{ slide.title }}
                </span>
                <span :class="cn(titleStyle, 'pl-[24px]')">
                  {{ slide.title2 }}
                </span>
                <span :class="cn(titleStyle)">{{ slide.title3 }}</span>
              </h1>
              <Button
                href="/products"
                class="rounded-[30px] backdrop-blur-[2px] !bg-[#00000066] text-white !w-fit px-[30px]"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </swiper-slide>
      </Slider></ClientOnly
    >
  </div>
</template>
