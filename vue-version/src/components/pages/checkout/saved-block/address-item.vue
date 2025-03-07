<script setup lang="ts">
import type { AddressType } from '@/lib/type'

const { address } = defineProps<{ address: AddressType }>()
</script>

<template>
  <div className="flex flex-col grow">
    <span className="text-lg text-[#1A1A1A] mb-2"> {{ address.fname }} {{ address.lname }} </span>
    <span className="text-base text-[#555555]">{{ address.address }}</span>
    <span className="text-base text-[#555555]">
      {{ address.city }},{{ address.state }},{{ address.zipCode }}
    </span>
    <span className="text-base text-[#555555]">{{ address.phone }}</span>
  </div>
</template>
