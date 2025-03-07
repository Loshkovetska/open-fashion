import type { OrderSliceType } from '@/lib/type'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () =>
    ({
      shippingAddress: null,
      promocode: '',
      delivery: {
        title: 'Pickup at store',
        price: 'FREE',
      },
      card: null,
      currentTab: 0,
    }) as OrderSliceType,
  actions: {
    updatePromoCode(action: string) {
      this.promocode = action
    },
    changeTab(action: number) {
      this.currentTab = action
    },
    updateShippingAddress(action: OrderSliceType['shippingAddress']) {
      if (!action || !this.shippingAddress) {
        this.shippingAddress = action
        return
      }

      Object.entries(action).forEach(([key, value]) => {
        if (!this.shippingAddress) return
        this.shippingAddress[key as keyof typeof this.shippingAddress] = value
      })
    },
    updateDeliveryType(action: OrderSliceType['delivery']) {
      this.delivery = action
    },
    updateCardDetails(action: OrderSliceType['card']) {
      this.card = action
    },
  },
})
