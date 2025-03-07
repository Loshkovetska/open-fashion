<script setup lang="ts">
import ShopIcon from "@/components/icons/shop-icon.vue";
import ButtonUi from "@/components/ui/button-ui.vue";
import { getTotalPrice } from "@/shared/utils";
import { useCartStore, useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { computed } from "vue";

type BottomPartPropType = {
  withTotal?: boolean;
  buttonText: string;
  disabled?: boolean;
  onClick: () => void;
};

const {
  withTotal = false,
  buttonText,
  disabled,
  onClick,
} = defineProps<BottomPartPropType>();

const { delivery } = storeToRefs(useOrderStore());
const { cartList } = storeToRefs(useCartStore());

const totalPrice = computed(() => getTotalPrice(cartList));
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full">
    <div
      class="flex items-center justify-between px-4 py-6 bg-white"
      v-if="withTotal"
    >
      <span class="text-sm tracking-[3px] uppercase">Total</span>
      <span class="text-4 tracking-[3px] uppercase text-primary">
        $
        {{
          totalPrice +
          (delivery.price === "FREE" ? 0 : (delivery.price as number))
        }}
      </span>
    </div>
    <ButtonUi
      :onClick="onClick"
      :class="disabled ? 'pointer-events-none opacity-50' : ''"
    >
      <ShopIcon class="[&>path]:stroke-[#FCFCFC] size-5" />
      {{ buttonText }}
    </ButtonUi>
  </div>
</template>
