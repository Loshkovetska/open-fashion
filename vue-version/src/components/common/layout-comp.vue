<script setup lang="ts">
'use client'
import Dialogs from '@/components/common/dialogs/dialogs-index.vue'
import Footer from '@/components/common/footer-comp.vue'
import Header from '@/components/common/header-comp.vue'
import { useRoute } from 'vue-router'

const { headerColor = 'bg-[#E7EAEF]' } = defineProps<{ headerColor?: string }>()

const route = useRoute()
</script>

<template>
  <Header :headerColor="headerColor" />
  <Dialogs :q="route.query.q" />
  <slot>Children</slot>
  <Footer v-show="!route.name.includes('/checkout')" />
</template>
