<script setup lang="ts">
import HeadLine2 from '@/components/common/headline2-comp.vue'
import { TREND_TAGS } from '@/lib/constants'
</script>
<template>
  <section class="py-16 px-4 max-w-[1280px] mx-auto">
    <div class="w-fit flex flex-col items-center justify-center mx-auto">
      <HeadLine2>@trending</HeadLine2>
    </div>
    <div class="flex flex-wrap gap-[10px] mt-2 items-center">
      <span
        class="block px-[10px] py-2 rounded-[30px] bg-[#F9F9F9]"
        v-for="tag in TREND_TAGS"
        :key="tag"
      >
        {{ tag }}
      </span>
    </div>
  </section>
</template>
