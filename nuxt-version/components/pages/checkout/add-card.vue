<script setup lang="ts">
import InputUi from "@/components/ui/input-ui.vue";
import type { CardType } from "@/shared/type";
import { cn } from "@/shared/utils";
import { useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import AddCardView from "./add-card-view.vue";
import BottomBar from "./bottom-bar.vue";
import TabContainer from "./tab-container.vue";

const orderStore = useOrderStore();

const { card } = storeToRefs(orderStore);

const rotateCard = ref(false);

const cardDetails = reactive({
  cardOwner: "",
  cardNumber: "",
  expiredDate: "",
  CVV: "",
});

onMounted(() => {
  if (card) {
    Object.entries(card.value as CardType).forEach(([key, value]) => {
      cardDetails[key as keyof typeof cardDetails] = value;
    });
  }
});

const handleChange =
  (key: keyof typeof cardDetails, rotate?: boolean) => (value: string) => {
    cardDetails[key] = value;
    rotateCard.value = rotate || false;
  };

const isValid = () => Object.values(cardDetails).every(Boolean);

const onAddCard = () => {
  orderStore.updateCardDetails(cardDetails);
  orderStore.changeTab(1);
};

const inputStyle =
  "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none autofill:bg-none";
</script>

<template>
  <TabContainer
    :tabNumber="3"
    topTitle="Payment method"
  >
    <AddCardView
      :rotateCard="rotateCard"
      :cardDetails="cardDetails"
    />
    <div
      class="mt-8 max-w-[900px] w-full mx-auto gap-6 flex flex-grow flex-col"
    >
      <InputUi
        :class="cn(inputStyle)"
        placeholder="Name on Card"
        inputType="text"
        :value="cardDetails?.cardOwner"
        :onChange="handleChange('cardOwner')"
      />
      <InputUi
        :class="cn(inputStyle)"
        placeholder="Card Number"
        inputType="card_number"
        :value="cardDetails?.cardNumber"
        :onChange="handleChange('cardNumber')"
      />
      <InputUi
        :class="cn(inputStyle)"
        placeholder="Exp date"
        inputType="exp_date"
        :value="cardDetails?.expiredDate"
        :onChange="handleChange('expiredDate')"
      />

      <InputUi
        placeholder="CVV"
        inputType="ccv"
        :class="cn(inputStyle)"
        :value="cardDetails?.CVV"
        :onChange="handleChange('CVV', true)"
      />
    </div>
    <BottomBar
      :buttonText="`${!card ? 'Add' : 'Update'} Card`"
      :onClick="onAddCard"
      :disabled="!isValid()"
    />
  </TabContainer>
</template>
