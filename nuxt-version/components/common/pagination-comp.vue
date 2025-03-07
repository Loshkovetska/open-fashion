<script setup lang="ts">
import { ref, watchEffect } from "vue";

import Forward from "@/components/icons/forward-icon.vue";

type PaginationPropType = {
  countPerPage: number;
  totalCount: number;
  setOffsets: (val: { start: number; end: number }) => void;
};

const { countPerPage, totalCount, setOffsets } =
  defineProps<PaginationPropType>();

const currentPage = ref(1);

watchEffect(() => {
  const newOffset = ((currentPage.value - 1) * countPerPage) % totalCount;
  const endOffset = newOffset + countPerPage;
  setOffsets({ start: newOffset, end: endOffset });
});

const onClickHandler = (page: number) => (currentPage.value = page);
</script>
<template>
  <vue-awesome-paginate
    :total-items="totalCount"
    :items-per-page="countPerPage"
    :max-pages-shown="5"
    v-model="currentPage"
    class="flex items-center gap-[12px] justify-center mt-[50px]"
    paginate-buttons-class="flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-gray-body hover:text-white transition-all duration-300"
    hidePrevNextWhenEnds
    active-page-class="bg-gray-body text-white"
    @click="onClickHandler"
  >
    <template #prev-button>
      <span class="rotate-90 cursor-pointer">
        <Forward />
      </span>
    </template>
    <template #next-button>
      <span class="-rotate-90 cursor-pointer">
        <Forward />
      </span>
    </template>
  </vue-awesome-paginate>
</template>

<!-- flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-gray-body hover:text-white transition-all duration-300" -->
