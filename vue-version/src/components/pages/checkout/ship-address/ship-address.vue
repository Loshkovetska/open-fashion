<script setup lang="ts">
import { useOrderStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import BottomBar from '../bottom-bar.vue'
import DeliverySelect from '../delivery-select.vue'
import OrderList from '../order-list.vue'
import SavedBlock from '../saved-block/saved-block.vue'
import TabContainer from '../tab-container.vue'

const router = useRouter()

const store = useOrderStore()
const { shippingAddress, card } = storeToRefs(store)
</script>

<template>
  <TabContainer :tabNumber="1" topTitle="Checkout">
    <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
      <div className="max-w-[900px] mx-auto mb-7">
        <SavedBlock type="address" :address="shippingAddress" :onClick="() => store.changeTab(2)" />
        <DeliverySelect />
        <SavedBlock type="card" :card="card" :onClick="() => store.changeTab(3)" />
      </div>
      <OrderList />
    </div>
    <BottomBar withTotal buttonText="Place order" :onClick="() => router.push('/products')" />
  </TabContainer>
</template>
