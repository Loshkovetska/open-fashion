<script setup lang="ts">
import SelectComp from "@/components/common/select-comp.vue";
import GridView from "@/components/icons/grid-icon.vue";
import ListView from "@/components/icons/list-icon.vue";
import Sort from "@/components/icons/sort-icon.vue";
import { cn } from "@/shared/utils";
import { useProductStore } from "@/shared/stores";
import { storeToRefs } from "pinia";

const FILTERS = ["New", "Rating", "Price"];

const productStore = useProductStore();
const { goodsList, filters } = storeToRefs(productStore);

const onFilterChange = (key: "view" | "sortBy" | "dir", value: string) => {
  productStore.updateFilters({
    ...filters.value,
    [key]: value,
  });
};
</script>

<template>
  <div
    class="px-4 py-1 pt-[77px] flex items-center justify-between max-w-[1280px] mx-auto w-full"
  >
    <span class="text-base uppercase leading-4 text-gray-body">
      {{ goodsList?.length }} apparel
    </span>
    <div class="flex items-center gap-3">
      <SelectComp
        :value="filters.sortBy || ''"
        :list="FILTERS"
        :onChange="(value) => onFilterChange('sortBy', value)"
      />
      <div
        class="flex items-center justify-center w-fit px-3 py-3 bg-gray-opacity rounded-[33px] cursor-pointer"
        @click="
          () => onFilterChange('view', filters.view == 'grid' ? 'list' : 'grid')
        "
      >
        <GridView v-if="filters.view == 'grid'" />
        <ListView v-else />
      </div>
      <div
        class="flex items-center justify-center w-fit px-3 py-3 bg-gray-opacity rounded-[33px] cursor-pointer"
        @click="
          () => onFilterChange('dir', filters.dir == 'down' ? 'up' : 'down')
        "
      >
        <Sort
          :class="
            cn('size-5', filters.dir == 'down' ? 'fill-black' : 'fill-primary')
          "
        />
      </div>
    </div>
  </div>
</template>
