<script setup lang="ts">
import ProductsList from "@/components/common/products-list.vue";
import TopTitle from "@/components/common/top-title.vue";
import { useProductStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { good, goodsList } = storeToRefs(useProductStore());

const list = computed(() =>
  goodsList.value.filter((c) => c.cat == good?.value?.cat).slice(0, 10)
);
</script>

<template>
  <section class="py-16 px-4">
    <TopTitle title="You may also like" />
    <ProductsList :goods="list" />
  </section>
</template>
