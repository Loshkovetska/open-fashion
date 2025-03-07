<script setup lang="ts">
import InputUi from "@/components/ui/input-ui.vue";
import { cn } from "@/shared/utils";
import { useOrderStore } from "@/shared/stores";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";
import BottomBar from "./bottom-bar.vue";
import TabContainer from "./tab-container.vue";

const defaultValues = {
  fname: "",
  lname: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
};

const orderStore = useOrderStore();
const { shippingAddress } = storeToRefs(orderStore);

const values = reactive(defaultValues);

onMounted(() => {
  if (shippingAddress) {
    Object.entries(shippingAddress).forEach(([key, value]) => {
      values[key as keyof typeof values] = value;
    });
  }
});

const isValid = (vs: typeof values) => {
  const properties = Object.entries(vs).filter(([key]) =>
    Object.keys(defaultValues).includes(key)
  );
  return properties.every(([key, value]) => !!value);
};

const handleChange = (key: keyof typeof values) => (value: string) => {
  values[key] = value;
};

const onAddAddress = () => {
  orderStore.updateShippingAddress(values);
  orderStore.changeTab(1);
};

const inputStyle =
  "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none";
</script>

<template>
  <TabContainer
    :tabNumber="2"
    topTitle="Add Shipping Address"
  >
    <div class="flex flex-col gap-6 max-w-[900px] mx-auto mt-8 flex-grow">
      <div class="flex flex-wrap gap-3">
        <InputUi
          placeholder="First name"
          inputType="text"
          :class="cn(inputStyle, 'flex-grow')"
          :value="values.fname || ''"
          :onChange="handleChange('fname')"
        />
        <InputUi
          placeholder="Last name"
          inputType="text"
          :class="cn(inputStyle, 'flex-grow')"
          :value="values?.lname || ''"
          :onChange="handleChange('lname')"
        />
      </div>
      <InputUi
        :class="cn(inputStyle)"
        :value="values?.address || ''"
        placeholder="Address"
        :onChange="handleChange('address')"
      />
      <InputUi
        :class="cn(inputStyle)"
        :value="values?.city || ''"
        placeholder="City"
        inputType="text"
        :onChange="handleChange('city')"
      />
      <div class="flex flex-wrap gap-3">
        <InputUi
          placeholder="State"
          inputType="text"
          :class="cn(inputStyle, 'flex-grow')"
          :value="values?.state || ''"
          :onChange="handleChange('state')"
        />
        <InputUi
          :class="cn(inputStyle, 'flex-grow')"
          :value="values?.zipCode || ''"
          :onChange="handleChange('zipCode')"
          placeholder="ZIP code"
        />
      </div>
      <InputUi
        :class="cn(inputStyle)"
        :value="values?.phone || ''"
        :onChange="handleChange('phone')"
        placeholder="Phone"
        inputType="phone"
      />
    </div>
    <BottomBar
      :buttonText="`${!shippingAddress ? 'Add' : 'Update'} delivery`"
      :disabled="!isValid(values)"
      :onClick="onAddAddress"
    />
  </TabContainer>
</template>
