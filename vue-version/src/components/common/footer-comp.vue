<script setup lang="ts">
import CommonLink from '@/components/common/common-link.vue'
import Divider from '@/components/common/divider-comp.vue'
import Socials from '@/components/common/socials-comp.vue'
</script>
<template>
  <footer>
    <div class="py-6 px-14 flex flex-col items-center">
      <Socials />
      <Divider class="w-full max-w-[124px] mx-auto mb-5 mt-6" />
      <CommonLink external to="mailto:support@openui.design" class="text-center text-4">
        support@openui.design
      </CommonLink>
      <CommonLink external to="tel:+60 825 876" class="text-center"> +60 825 876 </CommonLink>
      <span class="text-center">08:00 - 22:00 - Everyday</span>
      <Divider class="w-full max-w-[124px] mx-auto mt-5" />
    </div>
    <div class="bg-[#c4c4c41a] py-3 px-6">
      <p class="text-sm leading-5 text-center">Copyright© OpenUI All Rights Reserved.</p>
    </div>
  </footer>
</template>
