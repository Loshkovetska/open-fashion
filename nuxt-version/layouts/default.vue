<script setup lang="ts">
import Dialogs from "@/components/common/dialogs/dialogs-index.vue";
import Footer from "@/components/common/footer-comp.vue";
import Header from "@/components/common/header-comp.vue";
const route = useRoute();
</script>
<template>
  <Header :headerColor="undefined" />
  <!-- <Dialogs :q="route.query.q" /> -->
  <slot />
  <Footer v-show="true" />
</template>
