<script setup lang="ts">
import 'swiper/css'
import { register } from 'swiper/element/bundle'

register()

type SliderPropType = {
  autoPlay?: boolean
  slidesPerView: number | 'auto'
  spaceBetween: number
  class?: string
  sliderStyle?: string
  direction?: 'vertical' | 'horizontal'
}

const {
  autoPlay = false,
  slidesPerView = 1,
  spaceBetween = 10,
  class: className = '',
  sliderStyle = '',
  direction,
} = defineProps<SliderPropType>()
</script>

<template>
  <swiper-container
    :pagination="autoPlay"
    :autoplay="autoPlay"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :class="className"
    :direction="direction"
    mousewheel-force-to-axis="true"
    :style="sliderStyle"
  >
    <slot>Slide 1</slot>
  </swiper-container>
</template>
