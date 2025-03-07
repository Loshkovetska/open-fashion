<script setup lang="ts">
import Divider from '@/components/common/divider-comp.vue'
import Socials from '@/components/common/socials-comp.vue'
import Location from '@/components/icons/location-icon.vue'
import Phone from '@/components/icons/phone-icon.vue'

import CommonLink from '@/components/common/common-link.vue'
import ModalClose from '@/components/ui/modal-ui/modal-close.vue'
import Modal from '@/components/ui/modal-ui/modal-ui.vue'
import { MENU_TABS } from '@/lib/constants'
import type { DialogPropType } from '@/lib/type'
import { computed, ref } from 'vue'
import NavItem from './menu-item.vue'
import NavTabs from './menu-tabs.vue'

const { open, onOpenChange } = defineProps<DialogPropType>()

const tab = ref(0)
const onTabChange = (value: number) => (tab.value = value)

const items = computed(() => MENU_TABS[tab.value].list)
</script>

<template>
  <Modal :isOpen="open">
    <ModalClose :action="onOpenChange" />
    <NavTabs :tabChange="onTabChange" :tabs="MENU_TABS" />
    <div class="flex flex-col mt-6">
      <NavItem :item="c" v-for="c in items" :key="c.title" />
    </div>
    <div class="flex flex-col gap-4 my-6">
      <CommonLink
        external
        to="tel:(786) 713-8616"
        class="flex items-center gap-4 text-base font-sans"
      >
        <Phone /> (786) 713-8616
      </CommonLink>
      <CommonLink
        external
        to="https://example.com/"
        target="_blank"
        class="flex items-center gap-4 text-base font-sans"
      >
        <Location /> Store locator
      </CommonLink>
    </div>
    <Divider class="mx-auto w-32 mb-12" />
    <Socials />
  </Modal>
</template>
