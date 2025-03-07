<script setup lang="ts">
import Divider from '@/components/common/divider-comp.vue'
import Boss from '@/components/icons/boss-icon.vue'
import Burberry from '@/components/icons/burberry-icon.vue'
import Catier from '@/components/icons/catier-icon.vue'
import Gucci from '@/components/icons/gucci-icon.vue'
import Prada from '@/components/icons/prada-icon.vue'
import Tifany from '@/components/icons/tiffany-icon.vue'
</script>

<template>
  <section class="flex flex-col items-center px-4">
    <Divider class="w-[124px]" />
    <div class="grid grid-cols-3 my-[35px] gap-5 items-center justify-center max-w-[400px]">
      <Prada />
      <Burberry />
      <Boss />
      <Catier />
      <Gucci />
      <Tifany />
    </div>
    <Divider class="w-[124px]" />
  </section>
</template>
