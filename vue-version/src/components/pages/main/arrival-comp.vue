<script setup lang="ts">
import ProductsList from '@/components/common/products-list.vue'
import TopTitle from '@/components/common/top-title.vue'
import ForwardArrow from '@/components/icons/forward-arrow.vue'
import { cn } from '@/lib/utils'
import { useProductStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const productStore = useProductStore()
const { goodsList } = storeToRefs(productStore)

const tabs = ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag']

const tab = ref(tabs[0])

const getTabClass = (c: string) =>
  cn('flex flex-col items-center cursor-pointer', tab.value == c ? '' : 'text-[#888888]')

const goods = computed(() =>
  (goodsList?.value || [])?.filter(
    (c) => (tab.value === 'All' ? true : c.cat == tab.value) && c.isNew,
  ),
)

const onTabChange = (tabItem: string) => {
  tab.value = tabItem
}
</script>

<template>
  <section class="py-16 px-4">
    <TopTitle title="New Arrival" />
    <div class="flex items-center gap-6 justify-center mb-4">
      <div
        :class="getTabClass(tab)"
        v-for="tabItem in tabs"
        :key="tabItem"
        @click="onTabChange(tabItem)"
      >
        {{ tabItem }}
        <span class="size-[4px] rotate-45 bg-[#A8715A] flex" v-show="tab === tabItem"></span>
      </div>
    </div>
    <ProductsList :goods="goods" />
    <RouterLink to="/products" class="text-4 flex gap-2 items-center mx-auto justify-center mt-7">
      Explore More <ForwardArrow />
    </RouterLink>
  </section>
</template>
