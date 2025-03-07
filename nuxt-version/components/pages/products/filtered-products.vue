<script setup lang="ts">
import Pagination from "@/components/common/pagination-comp.vue";
import ProductCard from "@/components/common/product-card.vue";
import { cn } from "@/shared/utils";
import { useProductStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

const COUNT_PER_PAGE = 12;

const { filterGoods, filters, goodsList } = storeToRefs(useProductStore());

const offsets = ref({ start: 0, end: 0 });

const currentItems = computed(() => {
  const { start, end } = offsets.value;
  return filterGoods.value?.slice(start, end ? end : filterGoods.value.length);
});

const setOffsets = (v: { start: number; end: number }) => {
  offsets.value.start = v.start;
  offsets.value.end = v.end;
};
</script>

<template>
  <section class="w-full px-4 pt-4 grow flex flex-col">
    <div
      v-if="goodsList.length > 0"
      :class="
        cn(
          'max-w-[1280px] mx-auto w-full gap-x-[12px] gap-y-4',
          filters.view == 'grid' ? 'grid grid-cols-auto' : 'flex flex-col'
        )
      "
    >
      <ProductCard
        v-for="c in currentItems"
        :product="c"
        :key="c._id"
        :vertical="filters.view === 'grid'"
      />
    </div>
    <Pagination
      :countPerPage="COUNT_PER_PAGE"
      :totalCount="goodsList.length || 0"
      :setOffsets="setOffsets"
      v-show="goodsList.length > COUNT_PER_PAGE"
    />
    <p
      class="text-md text-center py-10 self-center justify-center"
      v-show="!goodsList.length"
    >
      No Products Were Found
    </p>
  </section>
</template>
