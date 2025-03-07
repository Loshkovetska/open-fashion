<script setup lang="ts">
import { formateInputValue, handleInputValue } from "@/shared/utils";
import type { InputHTMLAttributes } from "vue";

const { inputType, onChange, ...props } = defineProps<
  {
    inputType?: "ccv" | "card_number" | "exp_date" | "text" | "phone";
    onChange: (value: string) => void;
  } & /* @vue-ignore */ Omit<InputHTMLAttributes, "onChange">
>();

function handleChange(e: Event) {
  const value = (e.target as HTMLInputElement).value;

  if (!inputType) onChange(value);

  const isValid = handleInputValue(
    value,
    inputType === "text" ? "string" : "number"
  );

  if (isValid) onChange(value);
}
</script>

<template>
  <input
    :class="props.class"
    :placeholder="props.placeholder"
    :value="
      inputType
        ? formateInputValue(inputType, String(props.value || ''))
        : props.value
    "
    @input="handleChange"
  />
</template>
