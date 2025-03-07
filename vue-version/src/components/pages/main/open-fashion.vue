<script setup lang="ts">
import Divider from '@/components/common/divider-comp.vue'
import About from '@/components/icons/about-icon.vue'
import Logo from '@/components/icons/logo-icon.vue'
import { OPEN_FASHION_LIST } from '@/lib/constants'
</script>

<template>
  <section class="bg-[#f2f2f280] py-[28px] px-4">
    <div class="flex flex-col items-center justify-center max-w-[285px] mx-auto">
      <Logo />
      <p class="text-base mt-4 text-center tracking-[0.14px] leading-5 mb-[5px]">
        Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
      </p>
      <Divider class="max-w-[124px] w-full" />
    </div>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(167px,1fr))] w-full mx-auto max-w-[720px] mt-4 gap-4"
    >
      <div
        class="flex flex-col items-center justify-center"
        v-for="c in OPEN_FASHION_LIST"
        :key="c"
      >
        <img :src="c.src" :alt="c.text" class="w-14 h-[36px] mb-3" width="56" height="36" />
        <p class="text-center text-[13px] leading-5">{{ c.text }}</p>
      </div>
    </div>
    <About class="mx-auto mt-8" />
  </section>
</template>
