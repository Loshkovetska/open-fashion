<script setup lang="ts">
import TopTitle from "@/components/common/top-title.vue";
import { cn } from "@/shared/utils";
import { useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";

type TabContainerPropType = {
  topTitle: string;
  tabNumber: number;
};

const { topTitle, tabNumber } = defineProps<TabContainerPropType>();

const { currentTab } = storeToRefs(useOrderStore());
</script>

<template>
  <div
    :class="
      cn(
        'transition-all px-4 flex-grow  absolute w-full h-full top-0 left-0 duration-1000 pt-[90px] pb-[100px]',
        currentTab == tabNumber
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      )
    "
  >
    <TopTitle :title="topTitle" />
    <slot />
  </div>
</template>
