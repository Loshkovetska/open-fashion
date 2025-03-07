<script setup lang="ts">
import CommonLink from '@/components/common/common-link.vue'
import Instagram from '@/components/icons/insta-icon.vue'
import Twitter from '@/components/icons/tw-icon.vue'
import Youtube from '@/components/icons/youtube-icon.vue'
</script>
<template>
  <div class="flex items-center justify-center gap-8">
    <CommonLink external to="https://twitter.com/" target="_blank">
      <Twitter />
    </CommonLink>
    <CommonLink external to="https://twitter.com/" target="_blank">
      <Instagram />
    </CommonLink>
    <CommonLink external to="https://twitter.com/" target="_blank">
      <Youtube />
    </CommonLink>
  </div>
</template>
