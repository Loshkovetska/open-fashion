<script setup lang="ts">
import CartItem from "@/components/common/cart-item.vue";
import ShopBag from "@/components/icons/shop-icon.vue";
import Button from "@/components/ui/button-ui.vue";
import ModalClose from "@/components/ui/modal-ui/modal-close.vue";
import Modal from "@/components/ui/modal-ui/modal-ui.vue";

import type { DialogPropType } from "@/shared/type";
import { getTotalPrice } from "@/shared/utils";
import { useCartStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

const { open, onOpenChange } = defineProps<DialogPropType>();

const { cartList } = storeToRefs(useCartStore());

const route = useRouter();

const totalPrice = computed(() => getTotalPrice(cartList || []));

const onSubmit = () => {
  onOpenChange();
  if (cartList.value.length) {
    route.push("/checkout");
  }
};
</script>

<template>
  <Modal :isOpen="open">
    <ModalClose :action="onOpenChange" />
    <span class="text-4 tracking-[3px] uppercase">Cart</span>
    <div
      class="flex-grow flex items-center justify-center"
      v-show="!!!cartList?.length"
    >
      <p class="text-4 text-gray-placeholder text-center">
        You have no items in your Shopping Bag.
      </p>
    </div>
    <div
      class="flex-grow flex flex-col gap-4 mt-5 h-full overflow-auto mb-[70px]"
      v-show="!!cartList?.length"
    >
      <CartItem
        :item="c"
        v-for="c in cartList"
        :key="c._id"
      />
      <div class="w-full h-[1px] bg-gray-light"></div>
      <div class="flex justify-between items-center">
        <span class="text-sm tracking-[3px] uppercase">Sub total</span>
        <span class="text-4 tracking-[3px] uppercase text-primary">
          ${{ totalPrice }}
        </span>
      </div>
      <p class="text-gray-placeholder text-sm pr-3">
        *shipping charges, taxes and discount codes are calculated at the time
        of accounting.
      </p>
    </div>
    <Button
      class="absolute bottom-0 left-0 w-full"
      :onClick="onSubmit"
    >
      <ShopBag class="[&>path]:stroke-[#FCFCFC] size-5" />
      {{ `${!cartList?.length ? "Continue shopping" : "BUY NOW"}` }}
    </Button>
  </Modal>
</template>
