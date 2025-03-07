<script setup lang="ts">
import type { AddressType } from "@/shared/type";

const { address } = defineProps<{ address: AddressType }>();
</script>

<template>
  <div className="flex flex-col grow">
    <span className="text-lg text-[#1A1A1A] mb-2">
      {{ address.fname }} {{ address.lname }}
    </span>
    <span className="text-base text-gray-label">{{ address.address }}</span>
    <span className="text-base text-gray-label">
      {{ address.city }},{{ address.state }},{{ address.zipCode }}
    </span>
    <span className="text-base text-gray-label">{{ address.phone }}</span>
  </div>
</template>
